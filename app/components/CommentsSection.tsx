"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Comment {
  id: string;
  movie_slug: string | null;
  series_slug: string | null;
  user_id: string | null;
  username: string;
  avatar_url: string | null;
  content: string;
  parent_id: string | null;
  is_pinned: boolean;
  is_admin: boolean;
  created_at: string;
  updated_at: string;
}

interface CommentsSectionProps {
  movieSlug?: string;
  seriesSlug?: string;
}

function formatTime(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();

  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) {
    return "just now";
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  const days = Math.floor(hours / 24);

  if (days < 7) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }

  const weeks = Math.floor(days / 7);

  if (weeks < 5) {
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  }

  return date.toLocaleDateString();
}

function getInitial(username: string) {
  return username.trim().charAt(0).toUpperCase() || "G";
}

export default function CommentsSection({
  movieSlug,
  seriesSlug,
}: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");

  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const isMovie = Boolean(movieSlug);
  const targetSlug = movieSlug ?? seriesSlug;

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setCurrentUserId(user.id);

        const metadata = user.user_metadata ?? {};

        const savedUsername =
          metadata.username ||
          metadata.full_name ||
          metadata.name ||
          user.email?.split("@")[0] ||
          "";

        if (savedUsername) {
          setUsername(savedUsername);
        }
      }
    }

    loadUser();
  }, []);

  useEffect(() => {
    async function loadComments() {
      if (!targetSlug) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      let query = supabase
        .from("comments")
        .select("*")
        .order("is_pinned", { ascending: false })
        .order("created_at", { ascending: true });

      if (isMovie) {
        query = query.eq("movie_slug", targetSlug);
      } else {
        query = query.eq("series_slug", targetSlug);
      }

      const { data, error: commentsError } = await query;

      if (commentsError) {
        console.error("Error loading comments:", commentsError);
        setError("Unable to load comments.");
      } else {
        setComments((data as Comment[]) ?? []);
      }

      setLoading(false);
    }

    loadComments();
  }, [targetSlug, isMovie]);

  async function refreshComments() {
    if (!targetSlug) {
      return;
    }

    let query = supabase
      .from("comments")
      .select("*")
      .order("is_pinned", { ascending: false })
      .order("created_at", { ascending: true });

    if (isMovie) {
      query = query.eq("movie_slug", targetSlug);
    } else {
      query = query.eq("series_slug", targetSlug);
    }

    const { data, error: commentsError } = await query;

    if (commentsError) {
      console.error("Error refreshing comments:", commentsError);
      return;
    }

    setComments((data as Comment[]) ?? []);
  }

  async function handlePostComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedContent = content.trim();
    const trimmedUsername = username.trim();

    if (!trimmedContent) {
      setError("Please write a comment.");
      return;
    }

    setPosting(true);
    setError("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const finalUsername =
      trimmedUsername ||
      user?.user_metadata?.username ||
      user?.user_metadata?.full_name ||
      user?.user_metadata?.name ||
      user?.email?.split("@")[0] ||
      "Guest";

    const { error: insertError } = await supabase.from("comments").insert({
      movie_slug: isMovie ? targetSlug : null,
      series_slug: isMovie ? null : targetSlug,
      user_id: user?.id ?? null,
      username: finalUsername,
      avatar_url: user?.user_metadata?.avatar_url ?? null,
      content: trimmedContent,
      parent_id: null,
      is_pinned: false,
      is_admin: false,
    });

    if (insertError) {
      console.error("Error posting comment:", insertError);
      setError("Unable to post your comment. Please try again.");
      setPosting(false);
      return;
    }

    setContent("");
    setPosting(false);

    await refreshComments();
  }

  async function handleReply(
    event: FormEvent<HTMLFormElement>,
    parentId: string
  ) {
    event.preventDefault();

    const trimmedReply = replyContent.trim();

    if (!trimmedReply) {
      return;
    }

    setPosting(true);
    setError("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const finalUsername =
      username.trim() ||
      user?.user_metadata?.username ||
      user?.user_metadata?.full_name ||
      user?.user_metadata?.name ||
      user?.email?.split("@")[0] ||
      "Guest";

    const { error: insertError } = await supabase.from("comments").insert({
      movie_slug: isMovie ? targetSlug : null,
      series_slug: isMovie ? null : targetSlug,
      user_id: user?.id ?? null,
      username: finalUsername,
      avatar_url: user?.user_metadata?.avatar_url ?? null,
      content: trimmedReply,
      parent_id: parentId,
      is_pinned: false,
      is_admin: false,
    });

    if (insertError) {
      console.error("Error posting reply:", insertError);
      setError("Unable to post your reply. Please try again.");
      setPosting(false);
      return;
    }

    setReplyContent("");
    setReplyingTo(null);
    setPosting(false);

    await refreshComments();
  }

  function getReplies(parentId: string) {
    return comments.filter((comment) => comment.parent_id === parentId);
  }

  const mainComments = comments.filter(
    (comment) => comment.parent_id === null
  );

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="border-t border-white/10 pt-8">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Comments ({comments.length})
        </h2>

        {/* Post Comment */}
        <form
          onSubmit={handlePostComment}
          className="mt-6 rounded-xl border border-white/10 bg-[#1B1B1B] p-5 sm:p-6"
        >
          <h3 className="mb-4 text-lg font-semibold">
            Post a Comment
          </h3>

          <div className="mb-4">
            <label
              htmlFor="comment-username"
              className="mb-2 block text-sm font-medium text-[#CCCCCC]"
            >
              Name
            </label>

            <input
              id="comment-username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your name"
              maxLength={50}
              className="w-full rounded-lg border border-white/10 bg-[#121212] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#666666] focus:border-[#00E5FF]"
            />
          </div>

          <div>
            <label
              htmlFor="comment-content"
              className="mb-2 block text-sm font-medium text-[#CCCCCC]"
            >
              Comment
            </label>

            <textarea
              id="comment-content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Write your comment..."
              rows={4}
              maxLength={1000}
              className="w-full resize-none rounded-lg border border-white/10 bg-[#121212] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#666666] focus:border-[#00E5FF]"
            />
          </div>

          {error && (
            <p className="mt-3 text-sm text-red-400">
              {error}
            </p>
          )}

          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              disabled={posting || !content.trim()}
              className="rounded-lg bg-[#00E5FF] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#00cfe8] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {posting ? "Posting..." : "Post Comment"}
            </button>
          </div>
        </form>

        {/* Comments List */}
        <div className="mt-8">
          {loading ? (
            <div className="rounded-xl border border-white/10 bg-[#1B1B1B] p-6 text-center">
              <p className="text-sm text-[#AAAAAA]">
                Loading comments...
              </p>
            </div>
          ) : mainComments.length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-[#1B1B1B] p-6 text-center">
              <p className="text-sm text-[#AAAAAA]">
                No comments yet. Be the first to comment!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {mainComments.map((comment) => {
                const replies = getReplies(comment.id);

                return (
                  <div key={comment.id}>
                    <article
                      className={`rounded-xl border p-5 ${
                        comment.is_pinned
                          ? "border-[#00E5FF]/30 bg-[#00E5FF]/5"
                          : "border-white/10 bg-[#1B1B1B]"
                      }`}
                    >
                      {/* Comment Header */}
                      <div className="flex items-start gap-3">
                        {comment.avatar_url ? (
                          <img
                            src={comment.avatar_url}
                            alt={comment.username}
                            className="h-10 w-10 shrink-0 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2A2A2A] text-sm font-bold text-[#00E5FF]">
                            {getInitial(comment.username)}
                          </div>
                        )}

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-semibold text-white">
                              {comment.username}
                            </span>

                            {comment.is_admin && (
                              <span className="rounded-full bg-[#00E5FF]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#00E5FF]">
                                Admin
                              </span>
                            )}

                            {comment.is_pinned && (
                              <span className="rounded-full bg-yellow-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-yellow-400">
                                Pinned
                              </span>
                            )}
                          </div>

                          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#777777]">
                            <span>{formatTime(comment.created_at)}</span>

                            {comment.updated_at !== comment.created_at && (
                              <>
                                <span>•</span>
                                <span>edited</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Comment Text */}
                      <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-[#CCCCCC]">
                        {comment.content}
                      </p>

                      {/* Reply Button */}
                      <div className="mt-4">
                        <button
                          type="button"
                          onClick={() => {
                            setReplyingTo(
                              replyingTo === comment.id
                                ? null
                                : comment.id
                            );
                            setReplyContent("");
                          }}
                          className="text-sm font-semibold text-[#00E5FF] transition hover:text-white"
                        >
                          {replyingTo === comment.id
                            ? "Cancel"
                            : "Reply"}
                        </button>
                      </div>

                      {/* Reply Form */}
                      {replyingTo === comment.id && (
                        <form
                          onSubmit={(event) =>
                            handleReply(event, comment.id)
                          }
                          className="mt-4 rounded-lg border border-white/10 bg-[#121212] p-4"
                        >
                          <textarea
                            value={replyContent}
                            onChange={(event) =>
                              setReplyContent(event.target.value)
                            }
                            placeholder="Write a reply..."
                            rows={3}
                            maxLength={1000}
                            className="w-full resize-none rounded-lg border border-white/10 bg-[#1B1B1B] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#666666] focus:border-[#00E5FF]"
                          />

                          <div className="mt-3 flex justify-end">
                            <button
                              type="submit"
                              disabled={
                                posting || !replyContent.trim()
                              }
                              className="rounded-lg bg-[#00E5FF] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#00cfe8] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              {posting ? "Posting..." : "Post Reply"}
                            </button>
                          </div>
                        </form>
                      )}

                      {/* Replies */}
                      {replies.length > 0 && (
                        <div className="mt-5 space-y-4 border-l border-white/10 pl-4 sm:pl-6">
                          {replies.map((reply) => (
                            <article
                              key={reply.id}
                              className="rounded-lg border border-white/10 bg-[#121212] p-4"
                            >
                              <div className="flex items-start gap-3">
                                {reply.avatar_url ? (
                                  <img
                                    src={reply.avatar_url}
                                    alt={reply.username}
                                    className="h-9 w-9 shrink-0 rounded-full object-cover"
                                  />
                                ) : (
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2A2A2A] text-xs font-bold text-[#00E5FF]">
                                    {getInitial(reply.username)}
                                  </div>
                                )}

                                <div className="min-w-0 flex-1">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-semibold text-white">
                                      {reply.username}
                                    </span>

                                    {reply.is_admin && (
                                      <span className="rounded-full bg-[#00E5FF]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#00E5FF]">
                                        Admin
                                      </span>
                                    )}
                                  </div>

                                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#777777]">
                                    <span>
                                      {formatTime(reply.created_at)}
                                    </span>

                                    {reply.updated_at !==
                                      reply.created_at && (
                                      <>
                                        <span>•</span>
                                        <span>edited</span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-[#CCCCCC]">
                                {reply.content}
                              </p>
                            </article>
                          ))}
                        </div>
                      )}
                    </article>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Logged-in user information */}
        {currentUserId && (
          <p className="mt-5 text-xs text-[#666666]">
            You are commenting as{" "}
            <span className="text-[#AAAAAA]">
              {username || "Guest"}
            </span>
            .
          </p>
        )}
      </div>
    </section>
  );
}