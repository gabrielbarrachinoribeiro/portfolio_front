import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <section className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Portfolio</p>
        <h1 className="mt-4 text-3xl font-bold">React + Tailwind CSS</h1>
        <p className="mt-4 text-slate-400">Tudo pronto para começar a criar seu projeto.</p>
        <button
          type="button"
          className="mt-8 cursor-pointer rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          onClick={() => setCount((value) => value + 1)}
        >
          Cliques: {count}
        </button>
      </section>
    </main>
  )
}

export default App
