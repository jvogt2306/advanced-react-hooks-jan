// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const initState = {count: 0}

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {count: state.count + action.step}
    }
    case 'DECREMENT': {
      return {count: state.count - action.step}
    }
    case 'RESET': {
      return initState
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

function Counter({step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, initState)
  const {count} = state
  const incrementDispatch = () => dispatch({type: 'INCREMENT', step})
  const decrementDispatch = () => dispatch({type: 'DECREMENT', step})
  const resetDispatch = () => dispatch({type: 'RESET'})

  return (
    <div>
      <button onClick={incrementDispatch}>+</button>
      <span>{count}</span>
      <button onClick={decrementDispatch}>-</button>
      <button onClick={resetDispatch}>Reset</button>
    </div>
  )
}

function App() {
  return <Counter />
}

export default App
