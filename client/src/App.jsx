import { useState } from 'react'
import MainNav from './components/layout/MainNav'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="min-h-screen flex bg-gradient-to-br from-primary to-secondary">
  <MainNav />

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
