import { useState } from 'react'
import MainNav from './components/layout/MainNav'
import Panel from "./components/layout/Panel"
import FullScreenLoader from './components/loaders/FullScreenLoader'
import { useLoader } from './contexts/LoaderContext'
import { LoaderOverlay } from './components/loaders/LoaderOverlay'

function App() {
  const loader = useLoader();
  const [count, setCount] = useState(0)

  const doSomething = async () => {
    loader.show(5000);
    await new Promise(r => setTimeout(r, 5000));
    loader.hide();
  };

  return (
      <div className="min-h-screen flex bg-gradient-to-br from-primary to-secondary">
            <MainNav />

            <main className="flex-1 p-10 bg-primary/30">
              <Panel>
                <h4 className="text-soft font-bold">My heading</h4>
                <p className="text-accent">My main body text</p>

                <button onClick={doSomething}>Click me to load</button>
              </Panel>
            </main>

            <LoaderOverlay />
          </div>

  )
}

export default App
