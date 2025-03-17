import React, { useState, useEffect, useReducer } from 'react'
// 先定义reducer
function reducer(state, action) {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    // 传参
    case 'SET':
      return state + action.payload
    default:
      return state
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <div className="app">
      {state}
      <button onClick={() => dispatch({ type: 'INC' })}>加</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>减</button>
      {/* 传参 */}
      <button onClick={() => dispatch({ type: 'SET', payload: 100 })}>传值</button>
    </div>
  )
}

export default App