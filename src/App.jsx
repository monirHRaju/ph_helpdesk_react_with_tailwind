import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Container from './components/Container'
import ToggleBtns from './components/ToggleBtns'
import IssuesManagement from './components/IssuesManagement'
function App() {
  
  // console.log(toggleStatus)
  return (
    <>
      <Navbar></Navbar>
      <IssuesManagement></IssuesManagement>
      {/* Footer Section */}
      <Footer></Footer>
    </>
  )
}

export default App
