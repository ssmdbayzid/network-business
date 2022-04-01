import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import './App.css'


function App() {
  return (
    <div>
      <Header></Header>
      <h1 className='text-5xl bg-transparent text-center font-sans font-extrabold  text-indigo-400  animate-pulse '>Welcome To Our Business Club</h1> 

      <Pricing></Pricing>
    </div>
  );
}

export default App;
