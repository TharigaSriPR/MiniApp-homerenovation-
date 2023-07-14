import axios from 'axios'
import React, { Component } from 'react'

export default class displaydata extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[]
      }

    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(Response=>{console.log(Response)
        this.setState({post:Response.data})})
        .catch(error=>{console.log(error)})
    }

    render() {
    return (
      <div>{JSON.stringify(this.state.post[5])}</div>

    )
  }
}
