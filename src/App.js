import './App.css';
//import Profile from './components/Profile'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      {/* <Profile name="Bernardo" lastname="Salgueiro"/> */}
      <Message content="This is a class component"></Message>
    </div>
  );
}

export default App;