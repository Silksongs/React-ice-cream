import React from 'react';
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import Home from "../../Pages/Home/Home";
import Assortment from "../../Pages/Assortment/Assortment";
import Contacts from "../../Pages/Contacts/Contacts";
import Blog from "../../Pages/Blog/Blog";

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