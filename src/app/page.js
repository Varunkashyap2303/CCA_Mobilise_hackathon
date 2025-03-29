// src/app/page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

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
          Emergency accommodation (sleeping pods & showers) for students
          experiencing short-term homelessness such as moving out, escaping
          family conflict, or needing a place to stay for a few nights.
        </p>
        <Link
          href="#"
          className="inline-block bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition"
        >
          Get Involved
        </Link>

        {/* Hero Image */}
        <div className="mt-10">
          <Image
            src="/nubelson-fernandes-3XDe63NEvZQ-unsplash.jpg" // ⬅️ Add your actual image here
            alt="Hero"
            width={1000}
            height={600}
            className="rounded-lg w-full object-cover"
          />
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
