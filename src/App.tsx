import './App.css';
import Listing from './components/Listing';
import data from './components/data.json';

function App() {
  return (
    <>
      <Listing items={data} />
    </>
  );
}

export default App;