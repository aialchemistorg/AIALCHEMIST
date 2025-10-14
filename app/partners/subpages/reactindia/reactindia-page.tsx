export default function ReactIndiaPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-50 text-[#0e1b4d]">
      <img
        src="/partner/reactindia.png"
        alt="React India"
        className="h-24 mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">React India</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">
        React India is a community-driven conference that brings together React
        developers, experts, and enthusiasts from around the world.
      </p>
      <a
        href="https://reactindia.io"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-300"
      >
        Visit Official Website
      </a>
    </main>
  );
}
