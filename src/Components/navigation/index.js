import React from 'react';
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import Home from "../../Pages/home";
import Assortment from "../../Pages/assortment";
import Contacts from "../../Pages/сontacts";
import Blog from "../../Pages/blog";

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