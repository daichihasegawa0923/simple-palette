import logo from './logo.svg';
import './App.css';
import {SimpleTable} from './components/simple-table-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SimpleTable 
      data = {[{name: 'aaa', age: 12},{name: 'aaa', age: 12}]} 
      accessors = {[{propName: 'name', displayName: '名前'},{propName: 'age', displayName: '年齢'}]} />
      <SimpleTable data={[]} accessors={[]}/>
      <SimpleTable data={[]} accessors={[]}><div>arisona</div></SimpleTable>
    </div>
  );
}

export default App;
