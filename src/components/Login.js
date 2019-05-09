import React, { Component } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './../css/login.css';




class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ' ',
            password: ' ',
            tokenValue: '',
            isRedirect:false

        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    setCookie(name, value) {
        document.cookie = name + "=" + (value || "");
    }

    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }


    login() {
        if (this.state.email === "") swal("Email can not be blank ");
        if (this.state.password === "") swal("Password can not be blank !");
        if (this.state.email === "" && this.state.password === "") swal("Email and Password can not be blank !");
        if (this.state.email !== "" && this.state.password !== "") {
            var loginRequest = axios.post('http://ttd-api.herokuapp.com/auth/login', {
                email: this.state.email,
                password: this.state.password,
                tokenValue: this.state.tokenValue

            })
            loginRequest.then(respone => {
                var tokenValue = respone.data.token
                if (tokenValue.length > 0) {
                    this.setState({ tokenValue: tokenValue });
                    this.setCookie('tokenvalue', tokenValue);
                    console.log(this.state.tokenValue);
                    this.setState({
                        isRedirect:true
                    })

                }
            })
        }

    }
    onChange(e) {

        var user_email = document.getElementById("user_email").value;
        var password = document.getElementById("user_password").value;
        this.setState({ email: user_email, password: password })
        console.log("---------------->Email:  " + this.state.email);
        console.log("----------------> Password: " + this.state.password);
    }

    render() {
        if (this.state.isRedirect) {
            return <Redirect to="/home" />;
        }
        
   
        

        return (
            <div>
                <div>
                    {/* Page info */}
                    <div className="page-info-section set-bg" style={{ backgroundImage: `url(img/bg.jpg)` }}>
                       
                    </div>
                    {/* Page info end */}
                    {/* search section */}
               <div>     
                </div>
                <div className="login-box">
                    <h1>Login</h1>
                    <div className="textbox">
                        <i className="fas fa-user" />
                        <input type="text" name="username" id="user_email" placeholder="Email" onChange={this.onChange} />
                    </div>
                    <div className="textbox">
                        <i className="fas fa-lock" />
                        <input type="password" name="password" id="user_password" placeholder="Password" onChange={this.onChange} />
                    </div>
                    <input type="button" onClick={this.login} className="btn" value="Sign in" /><a href="/" >Register</a>
                </div>
                </div>
            </div>
        );

    }
}

export default Login;