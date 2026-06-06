import { useRef } from 'react'

function Uncontrolled(props) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const fileRef = useRef()

  function handleFormData() {
    console.log('Form submitted')
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
    console.log(fileRef.current.files)
  }

  return (
    <div>
      <h2>Uncontrolled Components</h2>
      <form>
        <div className='form-div'>
          <input 
            type='email' 
            placeholder='Enter your email' 
            ref={emailRef}
          />
        </div>
        <div className='form-div'>
          <input 
            type='password' 
            placeholder='Enter your password' 
            ref={passwordRef}
          />
        </div>
        <div className='form-div'>
          <input 
            type='file' 
            ref={fileRef}
          />
        </div>
        <button type='button' onClick={handleFormData}>Login</button>
      </form>
    </div>
  );
}

export default Uncontrolled;