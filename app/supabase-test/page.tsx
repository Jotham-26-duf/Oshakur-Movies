import { supabase } from "@/lib/supabase";

export default async function SupabaseTest() {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .limit(1);

  return (
    <main className="min-h-screen bg-[#121212] p-8 text-white">
      <h1 className="text-2xl font-bold">Supabase Connection Test</h1>

      {error ? (
        <div className="mt-6 rounded-lg bg-red-900/30 p-4">
          <p className="font-semibold text-red-400">Connection test result:</p>
          <p className="mt-2 text-sm text-gray-300">{error.message}</p>
        </div>
      ) : (
        <div className="mt-6 rounded-lg bg-green-900/30 p-4">
          <p className="font-semibold text-green-400">
            Supabase connection works!
          </p>
          <pre className="mt-3 text-sm text-gray-300">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}