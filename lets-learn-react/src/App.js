import { useState } from 'react';
import './App.css';
import Button from './Button.js';

function App() {
  const [color, setColor] = useState('blue');

  

  return (
    <div className={`App`}
        style={{
          backgroundColor: color,
        }}>
        <div className="container">
        <h1>Hello world!</h1>
          <Button setColor={setColor} color="red" />
          <Button  setColor={setColor}  color="yellow" />
          <Button  setColor={setColor}  color="blue" />
          <Button  setColor={setColor}  color="purple" />
          <Button  setColor={setColor}  color="green" />
          <Button  setColor={setColor}  color="grey" />
        </div>
    </div>
  );
}

export default App;
