import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar />
      <main id="accueil" aria-label="Accueil">
        <Home />
      </main>
    </>
  )
}

export default App
