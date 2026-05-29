import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="min-h-screen flex bg-gradient-to-br from-primary to-secondary">
  <aside className="w-64 p-6 bg-secondary/40 backdrop-blur-sm border-r border-accent/40 flex flex-col gap-6 shadow-[10px_0_20px_rgba(0,0,0,0.35)]">
    <h2 className="text-2xl font-bold text-accent">Menu</h2>

    <nav className="flex flex-col gap-3 text-soft font-semibold">
      <button className="text-left hover:text-accent">Vibe Picker</button>
      <button className="text-left hover:text-accent">History</button>
      <button className="text-left hover:text-accent">Favorites</button>
      <button className="text-left hover:text-accent">Settings</button>
    </nav>
  </aside>

  <main className="flex-1 p-10 bg-primary/30">
    <div className="rounded-2xl bg-secondary/20 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)] p-10 h-full border border-accent/30">
      <h4 className="text-soft font-bold">My heading</h4>
      <p className="text-accent">My main body text</p>
    </div>
  </main>
</div>


  )
}

export default App
