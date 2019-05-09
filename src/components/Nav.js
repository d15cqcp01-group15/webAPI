import React, { Component } from 'react';
import './../css/App.css';
import {  NavLink,Redirect } from "react-router-dom";


class Nav extends Component {
    constructor(props){
        super(props)
        this.state={
            redirect:false
            
        }
    }
    
    render() {
        if(this.state.redirect){
            return (<Redirect to="/login"/>)
        }
        else{
        return (
            <div>
                {/* Page Preloder */}
                <div id="preloder">
                    <div className="loader" />
                </div>
                {/* Header section */}
                <header className="header-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="site-logo">
                                    <img src="img/logo.png" alt="anh" />
                                </div>
                                <div className="nav-switch">
                                    <i className="fa fa-bars" />
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <NavLink to="/login" className="site-btn header-btn">Login</NavLink>
                                <nav className="main-menu">
                                    <ul>
                                        <li><NavLink to="/home">Home</NavLink></li>
                                        <li><NavLink to="/about">About us</NavLink></li>
                                        <li><NavLink to="/courses">Courses</NavLink></li>
                                        <li><NavLink to="/news">News</NavLink></li>
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Header section end */}

            </div>
        );
        }
    }
}


export default Nav;