import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Delete from './components/Delete';
import Get from './components/Get';
import Home from './components/Home';
import Update from './components/Update';
import { UserProvider } from './components/Users';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/update/:id' element={<Update></Update>}></Route>
          <Route path='/getdata/:id' element={<Get></Get>}></Route>
          <Route path='/delete/:id' element={<Delete></Delete>}></Route>
        </Routes>
      </UserProvider>

    </div>
  );
}

export default App;
