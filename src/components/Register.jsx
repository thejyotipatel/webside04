import { AiFillEye } from 'react-icons/ai'

const Register = () => {
  return (
    <div className=''>
      <div className=''>
        <p className=''>
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
        <div className='d-flex'>
          <h1 className=''>Create Account</h1>
          <div className='d-flex'>
            <p className='justify-contant-center align-items-center'>
              Already have an account?
              <Button>Sign In</Button>
            </p>
          </div>
          <div className='d-flex'>
            <p className='justify-contant-center align-items-center'>
              Don’t have an account yet?
              <Button>Create new for free!</Button>
            </p>
          </div>
        </div>

        <div className=''>
          <div className='row'>
            <div className='col'>
              <div className='input-group bg-light rounded-pill d-flex justify-contant-center align-items-center p-1 bg-light'>
                <input
                  type='text'
                  className='form-control bg-light border-1 '
                  placeholder='First Name'
                />
              </div>

              <div className='input-group bg-light rounded-pill d-flex justify-contant-center align-items-center p-1 bg-light'>
                <input
                  type='text'
                  className='form-control bg-light border-1 '
                  placeholder='Last Name'
                />
              </div>

              <div className='input-group bg-light rounded-pill d-flex justify-contant-center align-items-center p-1 bg-light'>
                <input
                  type='email'
                  className='form-control bg-light border-1 '
                  placeholder='Email'
                />
              </div>

              <div className='input-group bg-light rounded-pill d-flex justify-contant-center align-items-center p-1 bg-light'>
                <input
                  type='password'
                  className='form-control bg-light border-1 '
                  placeholder='password'
                />
                <span>
                  <AiFillEye />
                </span>
              </div>
              <div className='input-group bg-light rounded-pill d-flex justify-contant-center align-items-center p-1 bg-light'>
                <input
                  type='password'
                  className='form-control bg-light border-1 '
                  placeholder='Confirm Password'
                />
                <span>
                  <AiFillEdit />
                </span>
              </div>
            </div>
            <div className='col'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register
