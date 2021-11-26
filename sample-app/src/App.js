import { Palette } from 'simple-palette-component'

const App = () => {
  return (
    <div class="App">
      <h1>Super SImple Palette!!</h1>
      <br />
      <br />
      <div style={{ display: 'flex' }} >
        <p>Drag to draw!</p>
        <Palette />
      </div>
    </div>
  );
}

export default App;
