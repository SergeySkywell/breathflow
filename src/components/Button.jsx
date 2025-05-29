export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
    >
      {children}
    </button>
  )
}
