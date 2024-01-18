import { Component } from "react"

class Message extends Component {
    render(){
        return <h1>{this.props.content}</h1>
    }
}

export default Message