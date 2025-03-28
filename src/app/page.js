export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-indigo-100 via-white to-pink-100 text-center">
      {/* Glass Card */}
      <div className="bg-white/70 backdrop-blur-2xl shadow-xl rounded-3xl p-10 max-w-2xl w-full border border-white/30">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 animate-pulse mb-4">
          🧭 See & Share
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          A real-time map tracking homelessness stories & sleeping pods across Australia.  
          Reclaim visibility. Rebuild empathy.
        </p>

        {/* Map Button */}
        <a
          href="/map"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
        >
          🗺️ View Interactive Map
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500">
        Built for the <span className="font-semibold text-indigo-600">2025 Hackathon</span> · Powered by Mobilise · Designed with ❤️
      </footer>
    </main>
  );
}
