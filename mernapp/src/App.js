import "./App.css";
import Home from "./screens/Home";
// import Navbar from "./components/Navbar";
import {
  BrowserRouter as  Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return ( 
    <>
    <div><Home/></div>
    </>
  );
}

export default App;
