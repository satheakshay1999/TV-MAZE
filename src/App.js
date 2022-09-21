//package imported 
import {BrowserRouter as Router ,Routes  , Route} from 'react-router-dom';
// imported  Components 
import Navbar from "./Components/Navbar";

//pages
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Singlepage from './Pages/Singlepage';

function App() {
  return (
  
      <Router>
        <Navbar />  
        <div className='container'>
          <Routes>
            <Route  exact path='/'  element={<Homepage/>} ></Route>
            <Route  exact path='/AboutPage'  element={<Aboutpage/>} />
            <Route path='/singleshow/:id' element={<Singlepage/>}   />
          </Routes>
        </div>
      </Router>

  );
}

export default App;
