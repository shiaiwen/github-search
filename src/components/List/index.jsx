import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props
    return (
      /**
       * 1. users
       * 2. first
       * 3. error
       * 4. loading 加载中
       *
       */
      <div className='row'>
        {isFirst ? (
          <h2>欢迎使用，输入关键字随后点击搜索</h2>
        ) : isLoading ? (
          <h2>loading...</h2>
        ) : err ? (
          <h2 style={{ color: 'red' }}>出错了....</h2>
        ) : (
          users.map(user => {
            return (
              <div key={user.id} className='card'>
                <a href={user.html_url} target='_blank'>
                  <img src={user.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className='card-text'>{user.login}</p>
              </div>
            )
          })
        )}
      </div>
    )
  }
}
