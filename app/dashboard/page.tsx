import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId } = await auth();
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <p className="mt-2">Signed in as {userId}</p>
    </main>
  );
}
