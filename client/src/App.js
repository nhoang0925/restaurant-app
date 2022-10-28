import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ReserveTable from "./components/ReserveTable";

function App() {
    return (
        <div>
        <header>
            <NavBar />
            <Routes>
                <Fragment><Route path="/" element={<Home />} /></Fragment>
                <Fragment><Route path="/reserve" element={<ReserveTable />} /></Fragment>
            </Routes>
        </header>
        </div>
    );
}

export default App;