import {SimpleTable} from './components/simple-table-component';

const App = () => {
  return (
    <div class="App">
      <SimpleTable 
      data = {[
        {name: 'aaa', age: 26, point: 33},
        {name: 'bbb', age: 22, point: 33},
        {name: 'bbb', age: 35, point: 33},
        {name: 'eee', age: 122, point: 33},
        {name: 'fff', age: 92, point: 33},]} 
      accessors = {[
        {propName: 'name', displayName: '名前'},
        {propName: 'age', displayName: '年齢', isInputType: true},
        {propName: 'point', displayName: 'ポイント', isInputType: true}]}
      tableStyle={{borderWidth: 2, borderColor: '#ddd'}}/>
      <SimpleTable data={[]} accessors={[]}/>
      <SimpleTable data={[]} accessors={[]}><div>arisona</div></SimpleTable>
    </div>
  );
}

export default App;
