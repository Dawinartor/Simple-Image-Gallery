import React, {Component} from 'react';
import './Picture.css';

class Picture extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
            <div className="picture-container">
                <img className="picture" src={this.props.source} alt='' />
                <div className="text-box">
                    <p className="title">{this.props.title}</p>
                    <p className="create-date">{this.props.createDate}</p>
                </div>
            </div>
        )
    }
}

export default Picture;