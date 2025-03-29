"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Clock } from "lucide-react";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! (form not functional in demo)");
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="w-full border-b shadow-sm bg-white">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Clock size={24} /> NESTLE IN
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/#am-i-homeless">Am I Homeless?</Link>
            <Link href="/#sleeping-pods">Sleeping pods</Link>
            <Link href="/#showers">Showers</Link>
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

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3 text-sm font-medium">
            <Link href="/#am-i-homeless">Am I Homeless?</Link>
            <Link href="/#sleeping-pods">Sleeping pods</Link>
            <Link href="/#showers">Showers</Link>
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

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <h2 className="text-xl text-gray-600 mb-6">
            Who we are and what we do?
          </h2>
          <p className="mb-4 text-gray-700">
            Our platform is here to shed light on student homelessness—something
            that can hit closer to home than you think. Whether it's your mate
            or even you dealing with couch-surfing or crashing somewhere new,
            we've got your back.
          </p>
          <p className="text-gray-700">
            Dive into our articles and take a quick quiz to get the lowdown.
            Plus, we’ve got emergency digs like sleeping pods for when you need
            a spot for a few nights. Stay informed, stay supported!
          </p>
        </div>

        <div className="w-full h-full rounded-lg overflow-hidden">
          <Image
            src="/about_us.jpeg"
            alt="Hackathon team"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* PARTNERSHIP FORM */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-6">For partnerships</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="first"
              placeholder="First name"
              value={form.first}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded-md"
            />
            <input
              type="text"
              name="last"
              placeholder="Last name"
              value={form.last}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded-md"
            />
            <textarea
              name="message"
              placeholder="Enter your question or message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded-md"
            />
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Optional: You can add a visual, illustration or leave this side empty */}
        <div className="hidden md:block" />
      </section>

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
