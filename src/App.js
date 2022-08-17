import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";

function App() {
    return (

        <div>
            <BrowserRouter>
                <Header/>
                <Navigation/>
                <Footer/>
            </BrowserRouter>
        </div>

    );
}

export default App;
