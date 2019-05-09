import React, { Component } from 'react';
import axios from 'axios';



class CourseDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            price: '',
            amount_student: '',
            skill: '',
            description: ''

        }

    }
    getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
        function(m,key,value) {
          vars[key] = value;
        });
        return vars;
      }
    componentDidMount(){
        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1)
          }
        var ulrDetails = 'https://ttd-api.herokuapp.com/courses/' + this.getUrlVars()["id"];
        var getFunction = axios.get(ulrDetails);
        getFunction.then(response =>{
            this.setState({
                title: response.data.name,
                price: response.data.price,
                amount_student: response.data.amount_student,
                skill: response.data.skill,
                description: response.data.description,
                cover_image:response.data.cover_image

            })
            console.log(response.data.name);
        })

    }
    render() {
        return (
            <div>
                <div>
                    {/* Page info */}
                    <div className="page-info-section set-bg" style={{ backgroundImage: `url(img/page-bg/2.jpg)` }}>
                        <div className="container">
                            <div className="site-breadcrumb">
                                <a href="/">Home</a>
                                <span>Courses</span>
                            </div>
                        </div>
                    </div>
                    {/* Page info end */}
                    {/* search section */}
                    <section className="search-section ss-other-page">
                        <div className="container">
                            <div className="search-warp">
                                <div className="section-title text-white">
                                    <h2><span>Search your course</span></h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        {/* search form */}
                                        <form className="course-search-form">
                                            <input type="text" placeholder="Course" />
                                            <input type="text" className="last-m" placeholder="Category" />
                                            <button className="site-btn btn-dark">Search Couse</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* search section end */}
                    {/* single course section */}
                    <section className="single-course spad pb-0">
                        <div className="container">
                            <div className="course-meta-area">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <div className="course-note">Featured Course</div>
                                        <h3>{this.state.title}</h3>
                                        <h4>Description</h4>
                                        <h5>{this.state.description}</h5>
                                        <h4>Detail Course</h4>
                                        <div className="course-metas">
                                            <div className="course-meta">
                                                <div className="course-author">
                                                    <div className="ca-pic set-bg" style={{backgroundImage: `url("https://insightstudy.co.uk/wp-content/uploads/2017/11/Insight-Study-photo-21.jpg")`}} />
                                                    <h6>Teacher</h6>
                                                    <p>{this.state.title} <span>Teacher</span></p>
                                                </div>
                                            </div>
                                            <div className="course-meta">
                                                <div className="cm-info">
                                                    <h6>Skill</h6>
                                                    <p>{this.state.skill}</p>
                                                </div>
                                            </div>
                                            <div className="course-meta">
                                                <div className="cm-info">
                                                    <h6>Students</h6>
                                                    <p>{this.state.amount_student} Registered Students</p>
                                                </div>
                                            </div>
                                            <div className="course-meta">
                                                <div className="cm-info">
                                                    <h6>Reviews</h6>
                                                    <p>2 Reviews <span className="rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star is-fade" />
                                                    </span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="/courses" className="site-btn price-btn">Price: {this.state.price}</a>
                                        <a href="/courses" className="site-btn buy-btn">Buy This Course</a>
                                    </div>
                                </div>
                            </div>
                            <img src= {this.state.cover_image} alt="anh" className="course-preview" />
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 course-list">
                                    <div className="cl-item">
                                        <h4>Course Description</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. </p>
                                    </div>
                                    <div className="cl-item">
                                        <h4>Certification</h4>
                                        <p>Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum.</p>
                                    </div>
                                    <div className="cl-item">
                                        <h4>The Instructor</h4>
                                        <p>Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* single course section end */}
                   
                    {/* banner section */}
                    <section className="banner-section spad">
                        <div className="container">
                            <div className="section-title mb-0 pb-2">
                                <h2>Join Our Community Now!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                            </div>
                            <div className="text-center pt-5">
                                <a href="/" className="site-btn">Register Now</a>
                            </div>
                        </div>
                    </section>
                    {/* banner section end */}
                </div>


            </div>
        );
    }
}

export default CourseDetail;