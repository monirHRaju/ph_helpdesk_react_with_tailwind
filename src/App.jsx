import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import IssuesManagement from './components/IssuesManagement'
import { Suspense } from 'react'
import Loading from './components/Loading'

const issueFetch = async () => {
    const result = await fetch('/data.json')
    return result.json()
  }
function App() {
  const issuePromise = issueFetch();
  

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<Loading></Loading>}>
        <IssuesManagement issuePromise={issuePromise}></IssuesManagement>
      </Suspense>
      {/* Footer Section */}
      <Footer></Footer>
    </>
  )
}

export default App
