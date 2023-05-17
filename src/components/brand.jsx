import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useItemState } from "../context";


//가정배달 추천제품
function BrandItem1({ item }) {
    if (item.brand1) {
        return (
            <div className="brandbox">
                <img src={item.src} />
                <h4>{item.title}</h4>
                <p>{item.price}</p>
            </div>
        )
    }
}

//아이를 위한 제품
function BrandItem3({ item }) {
    if (item.brand3) {
        return (
            <div className="brandbox">
                <img src={item.src} />
                <h4>{item.title}</h4>
                <p>{item.price}</p>
            </div>
        )
    }
}
//이름별
function BrandItem2({ item }) {
    if (item.brand2) {
        return (
            <div className="brandbox">
                <img src={item.src} />
                <h4>{item.title}</h4>
                <p>{item.price}</p>
            </div>
        )
    }
}

function Brand() {
    const items = useItemState();

    return (
        <div>
            <div className="subpath">
                <ul>
                    <li>
                        HOME
                    </li>
                    <li>
                        브랜드
                    </li>
                </ul>
            </div>
            <div className="subimg"></div>
            <div className="contents">
                <div style={{
                    margin: '0 auto',
                    width: '1100px',
                    height: '1000px',
                }} id='brand_tab'>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="분류별">
                            <div className="tte">
                                <h3>분유</h3>
                                <div className="BrandItem1">
                                    {items.map((item) => (
                                        <BrandItem1 item={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                            <div className="tte">
                                <h3>아기간식/이유식</h3>
                                <div className="BrandItem3">
                                    {items.map((item) => (
                                        <BrandItem3 item={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="이름별">
                            <div className="tte">
                                <h3>이름별</h3>
                                <div className="BrandItem2">
                                    {items.map((item) => (
                                        <BrandItem2 item={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export default Brand;