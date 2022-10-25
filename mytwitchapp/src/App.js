import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne =()=>{
  return <div>Page 1-One
  <hr></hr>
  <Link to="/pagetwo"> Navigate to Page Two </Link>
  </div>

}

const PageTwo =()=>{
  return <div>Page 2-Two
  <hr></hr>
  <button>Click Me</button>
  <Link to="/"> Navigate to Page -1-One-Uno </Link></div>
  

}

function App() {
  return (
    <div className='container'>
    <BrowserRouter>
        <div className='container' >

        <Route path ='/' exact component={PageOne} />
        <Route path='/pagetwo' component={PageTwo} />
        </div>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
