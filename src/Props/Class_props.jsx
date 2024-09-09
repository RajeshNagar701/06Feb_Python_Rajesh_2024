
/*
create

constructor(props){
        super();
        this.props=props;
    }

use : {this.props.title}

*/


import React, { Component } from 'react'

export class Class_props extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div className='col-md-4 mt-5'>
                <div className="card" style={{ width: "100%" }}>
                    <img className="card-img-top" width="100%" src={this.props.img} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.desc}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Class_props