import './App.css'
import Controlled from './components/Controlled'
import Uncontrolled from './components/Uncontrolled'

function App() {
  return (
    <>
      <h1>Controlled & Uncontrolled Components</h1>
      <hr/>
      <Controlled />
      <hr/>
      <Uncontrolled />
    </>
  )
}

export default App

/*
  # Form Handling:
    - Controlled Component ***:
      - Sync the form element data with react state whenever the form data updates
      - "React state becomes the single source of truth"
      - Steps:
        1. Create state for each form element, assign state to value prop
          - value={state}
        2. Update state (using stateHandler) whenever form data updates
          - eventHandler (onInput/onChange) -> stateHandler

    - Uncontrolled Component
      - Form element data is managed by the DOM itself
      - React fetches the value only when needed
      - Steps:
        1. Create a reference using useRef()
        2. Connect the reference using the 'ref' prop
        3. Access the value whenever required
*/