import React, {Component} from 'react';
import './login.css'
import {Card} from "antd";
import LoginForm from "./components/LoginForm";
import LeftPicture from "./components/LeftPicture";
import BottomTip from "./components/BottomTip";


class LoginIndex extends Component {
    render() {
        return (
            <div className={"login"}>
                <Card className={"MainCard"} />
                <LoginForm />
                <LeftPicture />
                <BottomTip />
            </div>

        );
    }
}

export default LoginIndex;