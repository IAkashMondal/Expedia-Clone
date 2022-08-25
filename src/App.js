import './App.css';
import LargeWithLogoCentered from './Components/Footer';
import WithSubnavigation from './Components/NabBar';
import Search from './Components/Search';


function App() {
  return (
    <div >
      <WithSubnavigation/>
      <Search/>
      <LargeWithLogoCentered/>
    </div>
  );
}

export default App;
