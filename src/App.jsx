import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state = {
    users: [], //初始化状态,为空数组
    isFirst: true, // 是否为第一次打开页面
    isLoading: true, // 是否为加载中
    err: '' // 请求相关的错误信息
  }
  // 更新 app 的 state 需要传入的是一个对象
  updateAppState = state => this.setState(state)

  render() {
    const { users } = this.state
    return (
      <div className='container'>
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
