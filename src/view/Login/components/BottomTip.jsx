import React, {Component} from 'react';
import {Col,Row} from "antd";
import "./BottomTip.css"
import TipOne from  "@assets/img/login/img.png"
import TipTwo from "@assets/img/login/img_2.png"
import TipThree from "@assets/img/login/img_3.png"
import TipFour from "@assets/img/login/img_4.png"

class BottomTip extends Component {
    render() {
        return (
            <div className={"bottom_tip"}>
                <Row>
                    <Col span={8} offset={9}>
                        <Row >
                            <Col span={6}><img src={TipOne} className={"tip_logo"} alt=""/></Col>
                            <Col span={6}><img src={TipTwo} className={"tip_logo"} alt=""/></Col>
                            <Col span={6}><img src={TipThree} className={"tip_logo"} alt=""/></Col>
                            <Col span={6}><img src={TipFour} className={"tip_logo"} alt=""/></Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop:""}}>
                    <Col span={11} offset={1} className={"first_tip"}>本系统版权归防灾科技学院大学生国旗护卫队所有 </Col>
                    |
                    <Col span={8} className={"second_tip"}>本系统仅限防灾科技学院大学生国旗护卫队内部人员使用</Col>
                </Row>

            </div>
        );
    }
}

export default BottomTip;