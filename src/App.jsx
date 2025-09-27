import DancingCat from './components/DancingCat'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 Dancing Cat Animation</h1>
        <p>Watch the cat dance!</p>
      </header>
      <main>
        <DancingCat />
      </main>
    </div>
  )
}

export default App
