import { useState } from 'react'
const list = [
  {
    id: 1001,
    name: 'vue'
  },
  {
    id: 1002,
    name: 'react'
  },
  {
    id: 1003,
    name: 'angular'
  }
]
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App
