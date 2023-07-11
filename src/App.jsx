import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Signup from "./components/Signup";
import Login from "./components/login";
import AlertState from "./context/alerts/AlertState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <AlertState>
          <BrowserRouter>
            <NavBar />
            <Alert/>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signup" element={<Signup />}></Route>
            </Routes>
          </BrowserRouter>
        </AlertState>
      </NoteState>
    </>
  );
}

export default App;
