
import './App.css'
import Manager from './components/Manager'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
        <Navbar/>
        <div className="min-h-90vh">
        <Manager/>
        </div>
        <Footer/>
    </>
  )
}

export default App
