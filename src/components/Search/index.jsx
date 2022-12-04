import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // 获取用户的输入
    const {
      keywordElement: { value: keyword }
    } = this
    console.log(keyword)
    // 发送网络请求
    // https://api.github.com/search?q=ajax
    // 后端用 cors 解决跨域
    this.props.updateAppState({
      isFirst: false,
      isLoading: true
    })
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => {
        // this.props.saveUsers(res.data.items)
        this.props.updateAppState({
          users: res.data.items,
          isLoading: false
        })
      })
      .catch(err => {
        console.log('请求失败的结果', err)
        this.props.updateAppState({
          // users: [],
          err,
          isLoading: false
        })
      })

    // avatar 神灵的化身
  }

  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github Users</h3>
        <div>
          <input
            type='text'
            placeholder='enter the name you search'
            ref={c => (this.keywordElement = c)}
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
