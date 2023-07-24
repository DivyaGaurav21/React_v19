import './App.css';
import DateCounter from './DateCounter';
import CalsUi from './component/CalsUi';

function App() {
  return (
    <div className='App'>
      <DateCounter />
      <div className="calculator-body">
        <CalsUi />

      </div>
    </div>

  );
}

export default App;
