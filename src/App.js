import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
    return (
        <div>
        <header>
            <NavBar />
            <Routes>
                <Fragment><Route path="/" element={<Home />} /></Fragment>
            </Routes>
        </header>
        </div>
    );
}

export default App;