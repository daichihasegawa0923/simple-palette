## USAGE
 
 ``` App.js

import { Canvas, Palette } from 'simple-palette-component'

const App = () => {
  return (
    <div class="App">
      <Canvas />
      <Palette />
      
    </div>
  );
}

export default App;

 ```

 ### Canvas
You can display components that allow you to draw simple pictures.

 ### Palette
 You can display a simple color picker.
 It is also possible to pass the selected color to the calling component.

 ``` App.js

 const[color, setColor] = useState<string>('#000000');

<Palette onChangeColor={setColor} />

 ```