"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function signup(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    redirect(
      "/signup?error=Please%20enter%20your%20email%20and%20password."
    );
  }

  if (password.length < 6) {
    redirect(
      "/signup?error=Password%20must%20be%20at%20least%206%20characters."
    );
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  }

  if (!data.session) {
    redirect(
      "/login?error=Account%20created.%20Please%20check%20your%20email%20to%20confirm%20your%20account."
    );
  }

  redirect("/");
}