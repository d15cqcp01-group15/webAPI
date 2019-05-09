import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                {/* Hero section */}
                <section className="hero-section set-bg" style={{ backgroundImage: `url(img/bg.jpg)` }}>
                    <div className="container">
                        <div className="hero-text text-white">
                            <h2>Get The Best Free Online Courses</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla <br /> dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <form className="intro-newslatter">
                                    <input type="text" placeholder="Name" />
                                    <input type="text" className="last-s" placeholder="E-mail" />
                                    <button className="site-btn">Sign Up Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Hero section end */}
                <div>
                    {/* categories section */}
                    <section className="categories-section spad">
                        <div className="container">
                            <div className="section-title">
                                <h2>Our Course Categories</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                            </div>
                            <div className="row">
                                {/* categorie */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="categorie-item">
                                        <div className="ci-thumb set-bg" data-setbg="img/categories/1.jpg" />
                                        <div className="ci-text">
                                            <h5>IT Development</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            <span>120 Courses</span>
                                        </div>
                                    </div>
                                </div>
                                {/* categorie */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="categorie-item">
                                        <div className="ci-thumb set-bg" data-setbg="img/categories/2.jpg" />
                                        <div className="ci-text">
                                            <h5>Web Design</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            <span>70 Courses</span>
                                        </div>
                                    </div>
                                </div>
                                {/* categorie */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="categorie-item">
                                        <div className="ci-thumb set-bg" data-setbg="img/categories/3.jpg" />
                                        <div className="ci-text">
                                            <h5>Illustration &amp; Drawing</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            <span>55 Courses</span>
                                        </div>
                                    </div>
                                </div>
                                {/* categorie */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="categorie-item">
                                        <div className="ci-thumb set-bg" data-setbg="img/categories/4.jpg" />
                                        <div className="ci-text">
                                            <h5>Social Media</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            <span>40 Courses</span>
                                        </div>
                                    </div>
                                </div>
                                {/* categorie */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="categorie-item">
                                        <div className="ci-thumb set-bg" data-setbg="img/categories/5.jpg" />
                                        <div className="ci-text">
                                            <h5>Photoshop</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            <span>220 Courses</span>
                                        </div>
                                    </div>
                                </div>
                                {/* categorie */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="categorie-item">
                                        <div className="ci-thumb set-bg" data-setbg="img/categories/6.jpg" />
                                        <div className="ci-text">
                                            <h5>Cryptocurrencies</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            <span>25 Courses</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* categories section end */}
                    {/* search section */}
                    <section className="search-section">
                        <div className="container">
                            <div className="search-warp">
                                <div className="section-title text-white">
                                    <h2>Search your course</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-10 offset-md-1">
                                        {/* search form */}
                                        <form className="course-search-form">
                                            <input type="text" placeholder="Course" />
                                            <input type="text" className="last-m" placeholder="Category" />
                                            <button className="site-btn">Search Couse</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* search section end */}
                    {/* course section */}
                    <section className="course-section spad">
                        <div className="container">
                            <div className="section-title mb-0">
                                <h2>Featured Courses</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                            </div>
                        </div>
                        <div className="course-warp">
                            <ul className="course-filter controls">
                                <li className="control active" data-filter="all">All</li>
                                <li className="control" data-filter=".finance">Finance</li>
                                <li className="control" data-filter=".design">Design</li>
                                <li className="control" data-filter=".web">Web Development</li>
                                <li className="control" data-filter=".photo">Photography</li>
                            </ul>
                            <div className="row course-items-area">
                                {/* course */}
                                <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
                                    <div className="course-item">
                                        <div className="course-thumb set-bg" data-setbg="img/courses/1.jpg">
                                            <div className="price">Price: $15</div>
                                        </div>
                                        <div className="course-info">
                                            <div className="course-text">
                                                <h5>Art &amp; Crafts</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                <div className="students">120 Students</div>
                                            </div>
                                            <div className="course-author">
                                                <div className="ca-pic set-bg" data-setbg="img/authors/1.jpg" />
                                                <p>William Parker, <span>Developer</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* course */}
                                <div className="mix col-lg-3 col-md-4 col-sm-6 design">
                                    <div className="course-item">
                                        <div className="course-thumb set-bg" data-setbg="img/courses/2.jpg">
                                            <div className="price">Price: $15</div>
                                        </div>
                                        <div className="course-info">
                                            <div className="course-text">
                                                <h5>IT Development</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                <div className="students">120 Students</div>
                                            </div>
                                            <div className="course-author">
                                                <div className="ca-pic set-bg" data-setbg="img/authors/2.jpg" />
                                                <p>William Parker, <span>Developer</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* course */}
                                <div className="mix col-lg-3 col-md-4 col-sm-6 web">
                                    <div className="course-item">
                                        <div className="course-thumb set-bg" data-setbg="img/courses/3.jpg">
                                            <div className="price">Price: $15</div>
                                        </div>
                                        <div className="course-info">
                                            <div className="course-text">
                                                <h5>Graphic Design</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                <div className="students">120 Students</div>
                                            </div>
                                            <div className="course-author">
                                                <div className="ca-pic set-bg" data-setbg="img/authors/3.jpg" />
                                                <p>William Parker, <span>Developer</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* course */}
                                <div className="mix col-lg-3 col-md-4 col-sm-6 photo">
                                    <div className="course-item">
                                        <div className="course-thumb set-bg" data-setbg="img/courses/4.jpg">
                                            <div className="price">Price: $15</div>
                                        </div>
                                        <div className="course-info">
                                            <div className="course-text">
                                                <h5>IT Development</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                <div className="students">120 Students</div>
                                            </div>
                                            <div className="course-author">
                                                <div className="ca-pic set-bg" data-setbg="img/authors/4.jpg" />
                                                <p>William Parker, <span>Developer</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* course */}
                                <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
                                    <div className="course-item">
                                        <div className="course-thumb set-bg" data-setbg="img/courses/5.jpg">
                                            <div className="price">Price: $15</div>
                                        </div>
                                        <div className="course-info">
                                            <div className="course-text">
                                                <h5>IT Development</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                <div className="students">120 Students</div>
                                            </div>
                                            <div className="course-author">
                                                <div className="ca-pic set-bg" data-setbg="img/authors/5.jpg" />
                                                <p>William Parker, <span>Developer</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* course */}
                                <div className="mix col-lg-3 col-md-4 col-sm-6 design">
                                    <div className="course-item">
                                        <div className="course-thumb set-bg" data-setbg="img/courses/6.jpg">
                                            <div className="price">Price: $15</div>
                                        </div>
                                        <div className="course-info">
                                            <div className="course-text">
                                                <h5>Socia Media</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                <div className="students">120 Students</div>
                                            </div>
                                            <div className="course-author">
                                                <div className="ca-pic set-bg" data-setbg="img/authors/6.jpg" />
                                                <p>William Parker, <span>Developer</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* course */}
                                <div className="mix col-lg-3 col-md-4 col-sm-6 web">
                                    <div className="course-item">
                                        <div className="course-thumb set-bg" data-setbg="img/courses/7.jpg">
                                            <div className="price">Price: $15</div>
                                        </div>
                                        <div className="course-info">
                                            <div className="course-text">
                                                <h5>IT Development</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                <div className="students">120 Students</div>
                                            </div>
                                            <div className="course-author">
                                                <div className="ca-pic set-bg" data-setbg="img/authors/7.jpg" />
                                                <p>William Parker, <span>Developer</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* course */}
                                <div className="mix col-lg-3 col-md-4 col-sm-6 photo">
                                    <div className="course-item">
                                        <div className="course-thumb set-bg" data-setbg="img/courses/8.jpg">
                                            <div className="price">Price: $15</div>
                                        </div>
                                        <div className="course-info">
                                            <div className="course-text">
                                                <h5>HTML 5</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                <div className="students">120 Students</div>
                                            </div>
                                            <div className="course-author">
                                                <div className="ca-pic set-bg" data-setbg="img/authors/8.jpg" />
                                                <p>William Parker, <span>Developer</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* course section end */}
                    {/* signup section */}
                    <section className="signup-section spad">
                        <div className="signup-bg set-bg" data-setbg="img/signup-bg.jpg" />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="signup-warp">
                                        <div className="section-title text-white text-left">
                                            <h2>Sign up to became a teacher</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                                        </div>
                                        {/* signup form */}
                                        <form className="signup-form">
                                            <input type="text" placeholder="Your Name" />
                                            <input type="text" placeholder="Your E-mail" />
                                            <input type="text" placeholder="Your Phone" />
                                            <label htmlFor="v-upload" className="file-up-btn">Upload Course</label>
                                            <input type="file" id="v-upload" />
                                            <button className="site-btn">Search Couse</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* signup section end */}
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

export default Home;