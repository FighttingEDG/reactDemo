import { useState } from 'react'


function App() {
  // 修改对象属性，并且驱动视图
  const [form, setForm] = useState({
    name: 'xiaobai',
    age: 11
  })
  // 不可以改变视图
  const handlerClick = () => {
    form.name = 'xiaohei'
  }
  // 可以改变视图
  const handlerClick2 = () => {
    setForm({
      ...form,
      name: 'jevon'
    })
  }
  return (
    <div>
      {form.name}
      <button onClick={handlerClick}>按钮</button>
      <button onClick={handlerClick2}>按钮</button>
    </div>
  )
}

export default App
