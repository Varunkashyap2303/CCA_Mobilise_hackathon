"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function HiddenHomelessnessPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-16">
        {/* NAVBAR */}
        <header className="w-full border-b shadow-sm bg-white">
          <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex items-center gap-2 text-xl font-bold">
              <Image
                src="/kangaroo.jpeg"
                alt="Nestle-In logo"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span>Nestle-In</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#">Am I Homeless?</Link>
              <Link href="#">Sleeping pods</Link>
              <Link href="#">Showers</Link>
              <Link
                href="#"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Chip in!
              </Link>
              <Link
                href="#"
                className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
              >
                Share love ♡
              </Link>
              <Link
                href="https://forms.gle/TYuojmifQnKE4uam9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Get help
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {menuOpen && (
            <div className="md:hidden px-6 pb-4 space-y-3 text-sm font-medium">
              <Link href="#">Am I Homeless?</Link>
              <Link href="#">Sleeping pods</Link>
              <Link href="#">Showers</Link>
              <Link
                href="#"
                className="block bg-blue-600 text-white px-4 py-2 rounded"
              >
                Chip in!
              </Link>
              <Link
                href="#"
                className="block bg-purple-700 text-white px-4 py-2 rounded"
              >
                Share love ♡
              </Link>
              <Link
                href="https://forms.gle/TYuojmifQnKE4uam9"
                className="block bg-black text-white px-4 py-2 rounded"
              >
                Get help
              </Link>
            </div>
          )}
        </header>

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold mb-6 mt-10">
          New way to think about homelessness
        </h1>

        {/* FEATURE IMAGE */}
<div className="mb-10 max-w-5xl mx-auto">
  <div className="relative w-full h-[320px] rounded-lg overflow-hidden">
    <Image
      src="/alexander-grey-v6nyYt7lQ-Y-unsplash.jpg"
      alt="Student asleep on couch"
      fill
      className="object-cover rounded-lg"
      sizes="(max-width: 1024px) 100vw, 800px"
    />
  </div>
</div>

        {/* INTRO PARAGRAPH */}
        <p className="text-gray-700 mb-6">
          In Australia, the issue of student homelessness often goes unnoticed,
          lurking beneath the surface and affecting more young people than many
          realise. This hidden crisis can strike unexpectedly, impacting
          students who might find themselves couch-surfing, staying in temporary
          accommodations, or living in unstable conditions. Contrary to the
          common belief that homelessness is only about living on the streets,
          many students are affected by short-term homelessness due to various
          circumstances such as transitioning between homes or financial
          instability.
        </p>

        {/* SECOND IMAGE */}
        <div className="mb-10 text-center">
          <Image
            src="/alexander-grey-v6nyYt7lQ-Y-unsplash.jpg"
            alt="Youth affected by homelessness"
            width={400}
            height={400}
            className="mx-auto rounded-lg object-cover"
          />
        </div>

        {/* TWO-COLUMN TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <p className="text-gray-700">
            Did you know that 37% of homeless people are under 25? This
            statistic highlights the urgent need to address youth homelessness,
            particularly among students who are trying to balance education with
            the challenges of securing stable housing. It's a reality that might
            be closer to home than you think, affecting your friends or even
            you.
          </p>
          <p className="text-gray-700">
            You might think that being financially strapped limits your ability
            to help, but that’s not the case. By sharing information about
            hidden forms of homelessness, you can empower others to recognize if
            they’re eligible for support and encourage them to address their
            struggles early on. Your voice can create a ripple effect of
            awareness and understanding within our community.
          </p>
        </div>

        {/* GET INVOLVED SECTION */}
        <section className="bg-gray-50 py-16 px-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-8">Get involved</h2>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="https://forms.gle/TYuojmifQnKE4uam9"
              target="_blank"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition"
            >
              Take a quiz
            </Link>
            <button className="bg-black text-white px-6 py-3 rounded-md text-base font-medium hover:bg-gray-800 transition">
              Chip in!
            </button>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-purple-800 transition">
              Share love ♡
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
            <p>
              Would you spare just $1 or $5 each week to help a friend in need?
              By donating, you can support not just one or two friends, but many
              students who need it now — and who knows, they might return the
              favor someday! Your contributions can make a significant
              difference, providing much-needed resources and support for those
              facing homelessness.
            </p>
            <p>
              Our platform offers a wealth of resources, including articles and
              quizzes, to help you understand the complexities of student
              homelessness. By staying informed, you can better support your
              peers and contribute to a community where everyone has the
              opportunity to thrive. Remember, even small actions can lead to
              big changes, and together, we can tackle this hidden crisis
              head-on.
            </p>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-white py-16 px-6 mt-20 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand + Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-6">NESTLE IN</h3>
            <div className="flex space-x-4 text-gray-500">
              <a href="#" aria-label="Facebook" className="hover:text-gray-800">
                <i className="fab fa-facebook">📘</i>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-800">
                <i className="fab fa-linkedin">💼</i>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-800">
                <i className="fab fa-youtube">▶️</i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-800"
              >
                <i className="fab fa-instagram">📸</i>
              </a>
            </div>
          </div>

          {/* Latest updates */}
          <div>
            <h4 className="font-semibold mb-3">Latest updates</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link href="/map">Live map</Link>
              </li>
              <li>
                <Link href="/#sleeping-pods">Find your place</Link>
              </li>
              <li>
                <Link href="/#showers">Where to shower?</Link>
              </li>
            </ul>
          </div>

          {/* Am I Homeless? */}
          <div>
            <h4 className="font-semibold mb-3">Am I Homelessness?</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a
                  href="https://forms.gle/TYuojmifQnKE4uam9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Take a quiz
                </a>
              </li>
              <li>
                <Link href="/hidden-homelessness">
                  Read about hidden homelessness
                </Link>
              </li>
            </ul>
          </div>

          {/* People & Stories */}
          <div>
            <h4 className="font-semibold mb-3">People & Stories</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link href="#">Students’ stories</Link>
              </li>
              <li>
                <Link href="#">Government support</Link>
              </li>
              <li>
                <Link href="#">Partners</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
