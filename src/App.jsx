import { use, useState } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import classNames from 'classnames'

const App = () => {
const [value,setValue] = useState('默认')
  return (
    <div className="app">
      {value}
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
    </div>
  )
}

export default App
