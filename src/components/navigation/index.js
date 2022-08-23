import React from 'react';
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import Home from "../../pages/home";
import Assortment from "../../pages/assortment";
import Contacts from "../../pages/сontacts";
import Blog from "../../pages/blog";

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