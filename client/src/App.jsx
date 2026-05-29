import { useState } from 'react'
import MainNav from './components/layout/MainNav'
import Panel from "./components/layout/Panel"

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="min-h-screen flex bg-gradient-to-br from-primary to-secondary">
  <MainNav />

  <main className="flex-1 p-10 bg-primary/30">
    <Panel>
      <h4 className="text-soft font-bold">My heading</h4>
      <p className="text-accent">My main body text</p>
    </Panel>
  </main>
</div>


  )
}

export default App
