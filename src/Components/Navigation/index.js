import React from 'react';
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import Home from "../../Pages/Home";
import Assortment from "../../Pages/Assortment";
import Contacts from "../../Pages/Contacts";
import Blog from "../../Pages/Blog";

function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<Assortment/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/blog' element={<Blog/>}/>
        </Routes>

    );
};

export default Navigation;