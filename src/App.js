import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2> 
  </div>
)

// match.params.topicID == props-v-state
// match.path == '/topics/:topicId'
// match.url == "/topics/props-v-state"

const Topic = ({match}) => console.log(match)||(
  <div>
    <h2>Topic is: {match.params.topicId}</h2> 
  </div>
)


const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/prop-v-state`}>Props vs States</Link></li>
    </ul>

    <Route path="/topics/:topicId" component={Topic}/>
    <Route exact path="/topics/" render={() => (            // Inline render()
      <h3> Please select a topic</h3>
     )} />
    {/* <Route path="/topics/prop-v-state" component={Topic}/> */}
  </div>
)


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit1 <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
