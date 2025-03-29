"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu, X, Clock } from "lucide-react";
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="w-full border-b shadow-sm bg-white">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Left: Logo */}
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
      <section className="px-6 pt-12 max-w-6xl mx-auto bg-white">
        {/* Image */}
        <div className="w-full h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/nubelson-fernandes-3XDe63NEvZQ-unsplash.jpg"
            alt="Hero image - student homelessness"
            width={1200}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content below image */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            NESTLE-IN
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-700 leading-snug mb-6">
            Shining a light on student homelessness—learn, quiz, and find a safe
            spot when you need it!
          </p>
          <Link
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition"
          >
            Get involved
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Get Help</h2>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://form.typeform.com/to/GeiiqZNY"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
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

      {/* AM I HOMELESS? SECTION */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center md:text-left">
            Am I Homeless?
          </h2>

          {/* Buttons */}
          <div className="flex gap-4">
            {/* <a
              href="https://forms.gle/TYuojmifQnKE4uam9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition"
            >
              Take a quiz
            </a> */}
            <Link
              href="/hidden-homelessness"
              className="bg-gray-200 text-black px-6 py-3 rounded-md text-base font-medium hover:bg-gray-300 transition"
            >
              Read about Hidden Homelessness
            </Link>
          </div>
        </div>
      </section>

      {/* LIVE MAP & SHOWERS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text & Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">
            Live Map of Free Emergency <br className="hidden sm:block" /> and
            Accomodation Showers
          </h2>

          <div className="space-y-6 text-left">
            <div>
              <h3 className="font-semibold text-base">Am I Homeless?</h3>
              <p className="text-gray-600 text-sm">
                What they are and where you can find them
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base">
                Where to sleep tonight?
              </h3>
              <p className="text-gray-600 text-sm">
                Near every sleeping pod location we installed two shower cabins
                for you to make yourself fresh and ready to fight your battles
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base">
                Where to take a shower?
              </h3>
              <p className="text-gray-600 text-sm">
                How to book your sleeping pod and/or shower time
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-800 transition">
                Where to sleep?
              </button>
              <button className="bg-gray-200 text-black px-5 py-2 rounded-md font-medium hover:bg-gray-300 transition">
                Where to shower?
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
        {mounted && (
          <div className="w-full h-[320px] md:h-[400px] rounded-xl overflow-hidden">
            <MapComponent showFilter={false} />
          </div>
        )}
      </section>

      {/* CHIP IN SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold mb-10">Chip in!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col">
            <Image
              src="/elizabeth-lies-PIQCA1ReSgU-unsplash.jpg" // replace with correct file path
              alt="Student helping peer"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-[280px]"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-1">
                Help your peer is easier than you think
              </h3>
              <p className="text-sm text-gray-600">Would you give</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col">
            <Image
              src="/alexander-grey-v6nyYt7lQ-Y-unsplash.jpg" // replace with correct file path
              alt="Girl sleeping on couch"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-[280px]"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">
                What is homelessness?
              </h3>
              <p className="text-sm text-gray-600">
                Many people think about homelessness as sleeping on the streets,
                however, it is only 6% of the total homeless population. Read
                more about homelessness in our article here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS FROM STUDENTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold mb-10 underline underline-offset-4">
          Reviews from students
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <p className="text-lg mb-4">
              “It saved my day, I had nowhere to go for a few nights, and it was
              just a miracle”
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/josh.jpg" // add to /public
                alt="Josh"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">Josh</p>
                <p className="text-xs text-gray-500">19 y.o., RMIT student</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <p className="text-lg mb-4">
              “I didn’t know I am experiencing homelessness by crashing at my
              friends houses for the past two weeks…”
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/layla.jpg" // add to /public
                alt="Layla"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">Layla</p>
                <p className="text-xs text-gray-500">21 y.o, Monash student</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <p className="text-lg mb-4">
              “How simple it was to book a place to sleep! I can’t believe I
              didn’t know about it earlier. It is safe, cosy and warm”
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/cobe.jpg" // add to /public
                alt="Cobe"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">Cobe</p>
                <p className="text-xs text-gray-500">18 y.o., TAFE student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED SECTION */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text */}
          <h2 className="text-3xl font-bold text-center md:text-left">
            Get involved
          </h2>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition">
              Chip in!
            </button>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-purple-800 transition">
              ♡ Share love
            </button>
          </div>
        </div>
      </section>

      {/* BOOK YOUR SAFE SLEEP SECTION */}
      <section className="bg-gray-50 py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center md:text-left">
            Book your safe sleep
          </h2>

          {/* Booking Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition">
              Book sleeping pod
            </button>
            <button className="bg-gray-200 text-black px-6 py-3 rounded-md text-base font-medium hover:bg-gray-300 transition">
              Book shower
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-16 px-6 mt-20 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand + Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-6">NESTLE IN</h3>
            <div className="flex space-x-4 text-gray-500">
              <a href="#" aria-label="Facebook" className="hover:text-gray-800">
                <i className="fab fa-facebook-f">📘</i>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-800">
                <i className="fab fa-linkedin-in">💼</i>
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

          {/* ABOUT US */}
          <div>
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  Who we are and what we do?
                </Link>
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
                  className="hover:underline"
                >
                  Take a quiz
                </a>
              </li>
              <li>
                <Link href="/hidden-homelessness" className="hover:underline">
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
                <Link href="#" className="hover:underline">
                  Students’ stories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Government support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
