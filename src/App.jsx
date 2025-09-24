import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Container from './components/Container'
import { useState } from 'react'
import ToggleBtns from './components/ToggleBtns'
function App() {
  const [toggleStatus, setToggleStatus] = useState('All')
  // console.log(toggleStatus)
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <div className='grid grid-cols-3 gap-5'>
          
          <div className='flex flex-col items-center justify-center bg-gray-500 h-[250px] text-white rounded-lg p-7 text-center my-[80px]'>
            <h2 className='text-4xl font-bold'>Pending</h2>
            <p className='text-4xl font-semibold'>0</p>
          </div>
          
          <div className='flex flex-col items-center justify-center bg-purple-500 h-[250px] text-white rounded-lg p-7 text-center my-[80px]'>
            <h2 className='text-4xl font-bold'>Submitted</h2>
            <p className='text-4xl font-semibold'>0</p>
          </div>
          
          <div className='flex flex-col items-center justify-center bg-teal-500 h-[250px] text-white rounded-lg p-7 text-center my-[80px]'>
            <h2 className='text-4xl font-bold'>Reviewed</h2>
            <p className='text-4xl font-semibold'>0</p>
          </div>
          
        </div>
      </Container>

      {/* toggle buttons */}
      <ToggleBtns toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></ToggleBtns>

      {/* Footer Section */}
      <Footer></Footer>
    </>
  )
}

export default App
