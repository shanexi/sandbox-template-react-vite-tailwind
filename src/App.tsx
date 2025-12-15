import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Vite + React</h1>
      <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-xl shadow-lg">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-150 shadow-md"
        >
          count is {count}
        </button>
        <p className="text-gray-600 text-center max-w-md">
          Edit <code className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm font-mono">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-gray-500 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
