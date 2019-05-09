import React, { Component } from 'react';
import NewCourses from './NewCourses';
import {Link} from 'react-router-dom';


class Courses extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* Page info */}
                    <div className="page-info-section set-bg" style={{ backgroundImage: `url(img/page-bg/1.jpg)` }}>
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
                    {/* course section */}
                    <section className="course-section spad pb-0">
                        <div className="course-warp">
                            <ul className="course-filter controls">
                                <li className="control active" data-filter="all">All</li>
                                <li className="control" data-filter=".listening">Listening</li>
                                <li className="control" data-filter=".writing">Writing</li>
                                <li className="control" data-filter=".reading">Reading</li>
                                <li className="control" data-filter=".speaking">Speaking</li>
                            </ul>
                           <Link to='/add'><button>Tạo khóa học mới</button></Link>
                            <div className="row course-items-area">
                                <NewCourses />
                            </div>
                        </div>
                    </section>
                    {/* course section end */}
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

export default Courses;