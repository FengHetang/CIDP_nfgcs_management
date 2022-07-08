import React, {Component} from 'react';
import leftPicture from "@assets/img/login/img_1.png"

class LeftPicture extends Component {
    render() {
        return (
            <div className={"LeftPicture"}>
                <img src={leftPicture} alt="" className={"leftpicture"}/>
            </div>
        );
    }
}

export default LeftPicture;