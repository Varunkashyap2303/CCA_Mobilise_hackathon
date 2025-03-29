// src/app/page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 border-b shadow-sm">
        <div className="text-xl font-bold">Snoozebox</div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="#">Sleeping pods</Link>
          <Link href="#">Showers</Link>
          <Link href="#">Stories</Link>
          <Link href="#">Am I Homeless?</Link>
        </nav>
        <Link
          href="#"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm font-medium"
        >
          Help someone
        </Link>
      </header>

      {/* HERO SECTION */}
      <section className="px-6 py-12 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">SNOOZE BOX</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Emergency accommodation (sleeping pods & showers) for students experiencing
          short-term homelessness such as moving out, escaping family conflict, or needing a place to stay for a few nights.
        </p>
        <Link
          href="#"
          className="inline-block bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition"
        >
          Get yourself safe
        </Link>

        {/* Hero Image */}
        <div className="mt-10">
          <Image
            src="/hero.jpg" // ⬅️ Add your actual image here
            alt="Hero"
            width={1000}
            height={600}
            className="rounded-lg w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
