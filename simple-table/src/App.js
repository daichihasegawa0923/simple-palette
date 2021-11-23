import {SimpleTable} from './components/simple-table-component';

const App = () => {
  return (
    <div class="App">
      <SimpleTable 
      data = {[
        {name: 'aaa', age: 26},
        {name: 'bbb', age: 22},
        {name: 'bbb', age: 35},
        {name: 'eee', age: 122},
        {name: 'fff', age: 92},]} 
      accessors = {[{propName: 'name', displayName: '名前'},{propName: 'age', displayName: '年齢', isInputType: true}]} />
      <SimpleTable data={[]} accessors={[]}/>
      <SimpleTable data={[]} accessors={[]}><div>arisona</div></SimpleTable>
    </div>
  );
}

export default App;
