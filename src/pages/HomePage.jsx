export default function HomePage() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">BreathFlow</h1>
      <p className="text-lg text-blue-700 mb-8">Embrace the stillness within</p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
        Get Started
      </button>
    </div>
  )
}
