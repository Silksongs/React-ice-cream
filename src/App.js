import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
