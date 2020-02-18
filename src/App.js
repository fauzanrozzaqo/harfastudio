import React, { Component } from "react"
//import logo from "./hstudio.png"
import "./App.css"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Harfa Studio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App v4-beta example
        </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default App
