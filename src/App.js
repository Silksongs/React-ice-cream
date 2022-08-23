import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Components/footer";
import Navigation from "./Components/navigation";
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/header";
import './style.css'

function App() {
    return (

        <div className={'app'}>
            <BrowserRouter>
                <Header/>
                <Navigation/>
                <Footer/>
            </BrowserRouter>
        </div>

    );
}

export default App;
