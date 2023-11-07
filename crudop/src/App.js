import './App.css';
import Begin from './Begin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Read from './Read';
import Update from './Update';

function App() {
  return (
      <Router>
    <div className="container my-4">
      <Routes>
        <Route path='/' element={<Read/>}/>
        <Route path='/begin' element={<Begin/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
