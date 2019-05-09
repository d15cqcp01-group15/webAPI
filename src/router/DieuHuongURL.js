import React, { Component } from 'react';
import {  Route  } from "react-router-dom";
import Home from './../components/Home';
import Contact from './../components/Contact';
import News from './../components/News';
import CourseDetail from './../components/CourseDetail';
import Courses from './../components/Courses';
import About from './../components/About';
import Login from '../components/Login';
import AddCourse from '../components/AddCourse';




class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/courses" component={Courses} />
                <Route path="/contact" component={Contact} />
                <Route path="/news" component={News} />
                <Route path="/courseDetail" component={CourseDetail} />
                <Route path="/login" component={Login} />
                <Route path="/add" component={AddCourse} />        
            </div>
        );
    }
}

export default DieuHuongURL;