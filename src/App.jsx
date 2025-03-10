import axios from 'axios'
import './App.scss'
import avatar from './images/bozai.png'
import React, { useState, useEffect } from 'react'

// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}


// 封装获取数据的hook
function useGetList() {
  const [commentList, setCommentList] = useState([])
  useEffect(() => {
    async function getList() {
      const res = await axios.get('http://localhost:3001/list')
      setCommentList(res.data)
    }
    getList()
  }, [])
  return {
    commentList,
    setCommentList
  }
}
/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]
function Item({ item }) {
  return (<div className="reply-item" key={item.rpid}>
    {/* 头像 */}
    <div className="root-reply-avatar">
      <div className="bili-avatar">
        <img
          className="bili-avatar-img"
          alt=""
          src={avatar}
        />
      </div>
    </div>

    <div className="content-wrap">
      {/* 用户名 */}
      <div className="user-info">
        <div className="user-name">{item.user.uname}</div>
      </div>
      {/* 评论内容 */}
      <div className="root-reply">
        <span className="reply-content">{item.content}</span>
        <div className="reply-info">
          {/* 评论时间 */}
          <span className="reply-time">{item.ctime}</span>
          {/* 评论数量 */}
          <span className="reply-time">点赞数:{item.like}</span>
          {/* user下的id等于评论list下的uid才显示删除 */}
          {user.uid === item.user.uid && <span className="delete-btn" onClick={() => handlerDel(item.rpid)}>删除</span>}
        </div>
      </div>
    </div>
  </div>)
}
const App = () => {
  const { commentList, setCommentList } = useGetList();

  // 因为处理的是useState，所以需要在组件内部处理数组
  const handlerDel = (id) => {
    // 过滤defaultList
    setDefaultList(defaultList.filter(item => item.rpid !== id))
  }
  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            <span className='nav-item'>最新</span>
            <span className='nav-item'>最热</span>
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text">发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map(item => <Item item={item} key={item.rpid} />)}
        </div>
      </div>
    </div>
  )
}

export default App