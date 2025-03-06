import { useState } from 'react'
import '../src/index.css'
const style = { color: 'skyblue', fontSize: '23px' }
function App() {
  return (
    <div>
      {/* 行内样式控制 */}
      <div style={{ color: 'red', fontSize: '20px' }}>分身乏术</div>
      {/* 变量存储 */}
      <div style={style}>分身乏术</div>
      {/* 类名控制 */}
      <div className='box'>耳热</div>
    </div>
  )
}

export default App
