import logo from './logo.svg';
import './App.css';

class TodoApp extends React.Component{
constructor(props) {
  super(props);
  this.state = { items: [], text: '' };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
  render () {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>
          Data Deposit Test
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Here
        </a>
      </header>
    </div>
    );
}
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todos-example')
);