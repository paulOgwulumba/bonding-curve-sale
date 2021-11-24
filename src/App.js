// import logo from './logo.svg';
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import './App.css';

function App() {
  return (
    <div class="App">
      <Navbar />
      <Loader isLoading={true}/>
    </div>
  );
}

export default App;
