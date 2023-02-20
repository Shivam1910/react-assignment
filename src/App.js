import './App.css';
import { StyledButton } from './Components/Button.style';





function App() {
  return (
    <div className="App">

      <StyledButton> Style Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton varient='outline'> Style Button</StyledButton>
    </div>
  );
}

export default App;
