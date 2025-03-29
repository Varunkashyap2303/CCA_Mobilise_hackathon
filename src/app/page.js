// src/app/page.jsx
"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Menu, X, Clock } from "lucide-react";
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}

      <header className="w-full border-b shadow-sm bg-white">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 text-xl font-bold">
            <Clock size={24} />
            Snoozebox
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
              href="#"
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

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3 text-sm font-medium">
            <Link href="#" className="block">
              Am I Homeless?
            </Link>
            <Link href="#" className="block">
              Sleeping pods
            </Link>
            <Link href="#" className="block">
              Showers
            </Link>
            <Link
              href="#"
              className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Chip in!
            </Link>
            <Link
              href="#"
              className="block bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
            >
              Share love ♡
            </Link>
            <Link
              href="#"
              className="block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Get help
            </Link>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        {/* Hero Image with overlay text */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/jon-tyson-zzzsVQvtpDA-unsplash.jpg"
            alt="Hero"
            fill
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30" />

          {/* Overlay Text */}
          <div className="absolute bottom-8 left-8 text-left text-white max-w-lg">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">SNOOZE BOX</h1>
            <p className="text-lg sm:text-xl font-medium leading-snug">
              Shining a light on student homelessness—learn, quiz, and find a
              safe spot when you need it!
            </p>
          </div>
        </div>

        {/* Button below the image */}
        <div className="text-center mt-8">
          <Link
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition"
          >
            Get involved
          </Link>
        </div>
      </section>

      {/* STUDENT HOMELESSNESS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold mb-10">Student Homelessness</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col h-full text-left">
            <Image
              src="/nathan-dumlao-XZToRBmGPcs-unsplash.jpg"
              alt="Student on bench"
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="flex flex-col flex-grow mt-4">
              <h3 className="font-semibold text-lg leading-snug mb-2">
                Students?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                Yes, unlike common belief, students are experiencing short-term
                homelessness more than we used to think.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col h-full text-left">
            <Image
              src="/jon-tyson-ajzN2AYNi1U-unsplash.jpg"
              alt="Homeless youth"
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="flex flex-col flex-grow mt-4">
              <h3 className="font-semibold text-lg leading-snug mb-2">
                37% of homeless people are under 25 years old
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                Read why many of us, students, experience homelessness at some
                point.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col h-full text-left">
            <Image
              src="/jon-tyson-zzzsVQvtpDA-unsplash.jpg"
              alt="Support pod"
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="flex flex-col flex-grow mt-4">
              <h3 className="font-semibold text-lg leading-snug mb-2">
                How we can help
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                Our sleeping pods and showers offer a swift and secure solution
                for your temporary yet important challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE MAP & SHOWERS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text & Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">
            Live Map of Sleeping Pods <br className="hidden sm:block" /> and
            Showers Platform
          </h2>

          <div className="space-y-6 text-left">
            <div>
              <h3 className="font-semibold text-base">Sleeping pods</h3>
              <p className="text-gray-600 text-sm">
                What they are and where you can find them
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base">Showers</h3>
              <p className="text-gray-600 text-sm">
                Near every sleeping pod location we installed two shower cabins
                for you to make yourself fresh and ready to fight your battles
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base">Booking</h3>
              <p className="text-gray-600 text-sm">
                How to book your sleeping pod and/or shower time
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-800 transition">
                Book sleeping pod
              </button>
              <button className="bg-gray-200 text-black px-5 py-2 rounded-md font-medium hover:bg-gray-300 transition">
                Book shower
              </button>
              <Link href="/map">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                  View Full Map
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Embedded Map */}
        <div className="w-full h-[320px] md:h-[400px] rounded-xl overflow-hidden">
          <MapComponent />
        </div>
      </section>
    </main>
  );
}
