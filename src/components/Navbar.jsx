import { AiFillSetting, AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
  return (
    <>
      <div className='position-fixed  bg-light w-100   '>
        <nav className='navbar navbar-default z-3  align-item-center container  '>
          <a className='navbar-brand text-uppercase d-flex justify-content-center align-items-center'>
            Atg.W
            <span className='text-green'>
              <AiFillSetting />
            </span>
            rld
          </a>
          <div className='input-group input-group w-50 bg-light rounded-pill d-flex justify-content-center align-items-center px-3 border '>
            <AiOutlineSearch />
            <input
              type='text'
              className='form-control bg-light border-0 '
              placeholder='Search for your favorite groups in ATG'
            />
          </div>
          <div className=' d-flex m-0 gap-1 justify-content-center align-items-center'>
            Create account.
            <div className='btn-group' role='group'>
              <button
                id='btngroup'
                className='btn m-0 p-0 dropdown-toggle'
                type='button'
              >
                <span className='text-primary'>It’s free!</span>
              </button>
              <ul className='dropdown-menu' aria-labelledby='btngroup'>
                <li>
                  <a className='dropdown-item' href='#'>
                    logIn
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Navbar
