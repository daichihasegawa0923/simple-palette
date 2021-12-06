import { Canvas, Palette } from 'simple-palette-component'

const App = () => {
  return (
    <div class="App">
      <h1>Demo Page</h1>
      <div>
        <h2>Simple Palette Component</h2>
        <Palette />
      </div>
      <h2>Simple Canvas Component</h2>
      <p>This canvas component contains 'Palette' component. </p>
      <Canvas width='800px' />
    </div>
  );
}

export default App;
