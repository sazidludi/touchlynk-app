// Landing page with the logins

import Link from 'next/link';
export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {/* min-h-screen is viewport height */}

      {/* Page heading */}
      <h1 className="text-3xl font-bold mb-6">Welcome to TouchLynk</h1>

      {/* Player Dashboard Link */}
      <Link href="/player-login">
        <a className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4">
          Player Dashboard
        </a>
      </Link>

      {/* Team Dashboard Link */}
      <Link href="/team-login">
        <a className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Team Dashboard
        </a>
      </Link>
    </main>
  );
}
