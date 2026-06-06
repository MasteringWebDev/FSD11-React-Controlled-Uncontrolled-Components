import { useState } from 'react'
import './Form.css'

function Controlled(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h2>Controlled Components</h2>
      <form>
        <div className='form-div'>
          <input 
            type='text' 
            placeholder='Enter your name' 
            value={name}
            onInput={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-div'>
          <input 
            type='email' 
            placeholder='Enter your email' 
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-div'>
          <input 
            type='password' 
            placeholder='Enter your password' 
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='button'>Login</button>
      </form>
    </div>
  );
}

export default Controlled;