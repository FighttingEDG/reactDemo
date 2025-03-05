import { useState } from 'react'
const message = "消息"
function getName() {
  return 'xiaobai';
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      this is app
      <div>
        {message}
      </div>
      <div>
        {'字符串传递'}
      </div>
      <div>
        {getName()}
      </div>
      <div>
        {new Date().getDate()}
      </div>
    </div>
  )
}

export default App
