import { create } from "zustand"

// 创建store
const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  // 消费数据
  const { count, inc } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
const App = () => {
  return (
    <>
      <Counter />
    </>
  )

}

export default App