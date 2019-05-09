import React, { Component } from 'react';
import axios from 'axios';
import './../css/Add.css';
import { Link } from 'react-router-dom';

class AddCourse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skill: ' ',
            address: ' ',
            description: '',
            tokenValue: ''
        }
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);

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

    login(e) {
        axios.request({
            method: 'post',
            url: 'https://ttd-api.herokuapp.com/courses',
            data: {
                skill: this.state.skill,
                address: this.state.address,
                description: this.description
                
            }
        }).then(response => {
           
            console.log("MMMMMMMMMM", response)
        }).catch(err => console.log(err));
    }

    onChange(e) {
        var address = document.getElementById("v_address").value;
        var description = document.getElementById("v_description").value;
        this.setState({  address: address, description: description })
        console.log("----------------> Address: " + this.state.address);
        console.log("----------------> Description: " + this.state.description);
    }
   
    render() {
        return (
            <div>
                {/* Page info */}
                <div className="page-info-section set-bg" style={{ backgroundImage: `url(img/page-bg/1.jpg)` }}>
                    <div className="container">
                        <div className="site-breadcrumb">
                            <a href="/">Home</a>
                            <span>ADD</span>
                        </div>
                    </div>
                </div>
                {/* Page info end */}
              
                <br />
                <Link className="btn grey" to="/courses">Back</Link>
                     <h2>ADD Course</h2>    
                    <form>
                        <div className="form-group">
                            <label htmlFor="skill">Skill</label>
                            <select className="form-control" id="skill">
                                <option>Listening</option>
                                <option>Reading</option>
                                <option>Speaking</option>
                                <option>Writing</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Date">Date</label>
                            <input type="date" className="form-control" id="v_date"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputAddress">Address</label>
                            <input type="name" className="form-control" id="v_address" placeholder="Ađdress" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputDescription">Description</label>
                            <input type="name" className="form-control" id="v_description" placeholder="Description" onChange={this.onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.login}>Save</button>
                    </form>
            </div>
        );
    }
}

export default AddCourse;