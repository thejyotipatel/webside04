import {
  AiFillEdit,
  AiOutlineInfoCircle,
  AiOutlineLike,
  AiOutlineLock,
} from 'react-icons/ai'
const Rightbar = () => {
  return (
    <div className=''>
      <div className='input-group bg-light rounded-pill d-flex justify-contant-center align-items-center p-1 bg-light'>
        <AiOutlineLock />
        <input
          type='search'
          className='form-control bg-light border-0 '
          placeholder='Enter your location'
        />
        <span>
          <AiFillEdit />
        </span>
      </div>
      <p className=''>
        <AiOutlineInfoCircle />
        Your location will help us serve better and extend a personalised
        experience.
      </p>

      <div className=''>
        <h3>
          <span>
            <AiOutlineLike />
          </span>
          REcommended Groups
        </h3>

        <ul className='nav'>
          <li className='d-flex'>
            <p className=''>
              <img src='' alt='' />
              <span>Leisure</span>
            </p>
            <button className='btn'>follow</button>
          </li>
        </ul>
        <button className='btn'>see more...</button>
      </div>
    </div>
  )
}
export default Rightbar
