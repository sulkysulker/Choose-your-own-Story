import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import StoryLoader from "./components/StoryLoader.jsx"
import StoryGenerator from "./components/StoryGenerator.jsx"

function App() {
  return (
    <Router>
        <div className="app">
            <header className="app-header">
                <div className="container">
                    <h1>Interactive Story Generator</h1>
                    <p>Create your own adventure stories with AI</p>
                </div>
            </header>
            <main className="app-main">
                <div className="container">
                    <Routes>
                        <Route path={"/story/:id"} element={<StoryLoader/>}/>
                        <Route path={"/"} element={<StoryGenerator/>}/>
                    </Routes>
                </div>
            </main>
            <footer className="app-footer">
                <div className="container">
                    <p>&copy; 2024 Choose Your Story. Powered by AI.</p>
                </div>
            </footer>
        </div>
    </Router>
  )
}

export default App
