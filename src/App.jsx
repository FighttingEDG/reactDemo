import { useState } from 'react'
// 三种情况渲染
const list = [0, 1, 3]
function getContent(num) {
  if (num == 0) {
    return <div>这是数字0的样式</div>
  } else if (num == 1) {
    return <div>这是数字1的样式</div>
  } else {
    return <div>这是数字3的样式</div>
  }
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <ul>
        {list.map(item => <li key={item}>{getContent(item)}</li>)}
      </ul>
    </div>
  )
}

export default App
