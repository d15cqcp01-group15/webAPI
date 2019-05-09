import React, { Component } from 'react';

class NewCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }

    }

    componentDidMount() {
        fetch('https://ttd-api.herokuapp.com/courses')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="row course-items-area">
                    {items.map(item => (
                            <div key={item.id} className= {`mix col-lg-3 col-md-4 col-sm-6 ${item.skill}`}>
                                <div className="course-item">
                                    <div className="course-thumb set-bg" style={{backgroundImage: `url(${item.cover_image})`}}>
                                        <a href={`/courseDetail?id=${item.id}`}><div className="price">{item.price}</div></a>
                                    </div>
                                    <div className="course-info">
                                        <div className="course-text">
                                            <h5>{item.skill[0].toUpperCase() + item.skill.slice(1)}</h5>
                                            <p>{item.address}</p>
                                            <div className="students">{item.amount_student + ' Students'}</div>
                                        </div>
                                        <div className="course-author">
                                            <div className="ca-pic set-bg" style={{backgroundImage: `url("https://insightstudy.co.uk/wp-content/uploads/2017/11/Insight-Study-photo-21.jpg")`}} />
                                            <p>{item.description}, <span> Teacher</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    ))};
                </div>

            );
        }

    }
}

export default NewCourses;
