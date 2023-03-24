import { AiOutlineGroup } from 'react-icons/ai'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Rightbar from '../components/Rightbar'
const Rootlayout = () => {
  return (
    <div className='main-container position-relative w-100'>
      <Navbar />
      <div className='header-container d-flex flex-column text-white'>
        <div className='home-container header-contant'>
          <h1 className=' '>Computer Engineering</h1>
          <p className=''>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <div className='home-container     display-none '>
        <div className=' m-0 p-0  d-flex flex-row justify-content-between align-items-center w-100 my-3 border-bottom border-3  '>
          <nav className='nav m-0 p-0 '>
            {/* <li className='nav-item'> */}
            <a href='#' className='nav-link active   pl-1 text-dark'>
              All Posts(32)
            </a>
            {/* </li> */}
            {/* <li className='nav-item'> */}
            <a href='#' className='nav-link text-dark'>
              Article
            </a>
            {/* </li> */}
            {/* <li className='nav-item'> */}
            <a href='#' className='nav-link text-dark'>
              Event
            </a>
            {/* </li> */}
            {/* <li className='nav-item'> */}
            <a href='#' className='nav-link text-dark'>
              Education
            </a>
            {/* </li> */}
            {/* <li className='nav-item'> */}
            <a href='#' className='nav-link text-dark'>
              Job
            </a>
            {/* </li> */}
          </nav>
          {/* </div> */}
          <div className='d-flex nav'>
            <button className='btn nav-link text-dark'>Write a Post</button>
            <button className='btn nav-link text-dark'>
              <AiOutlineGroup />
              join Group
            </button>
          </div>
        </div>
      </div>
      <div className='row home-container z-1 '>
        <div className='col m-0 p-0'>
          <Outlet />
        </div>

        <div className='col-5 display-none'>
          <Rightbar />
        </div>
      </div>
    </div>
  )
}
export default Rootlayout
