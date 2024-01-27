import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import './App.css';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import Main from './Main';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <header className="App-header"></header>
      <Navbar />
      <SideMenu />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
