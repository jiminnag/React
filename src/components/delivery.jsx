import React from "react";
import styles from "./delivery.module.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useItemState } from "../context";



//분류별
function DeliveryItem1({ item }) {
    if (item.delivery1) {
        return (
            <div className={styles.deliverybox}>
                <img src={item.src} />
                <h4>[가정배달] 아침의 선물 불가리스 골드 <br></br>(150ml)</h4>
                <p>1,550원</p>
            </div>
        )
    }
}
function DeliveryItem2({ item }) {
    if (item.delivery2) {
        return (
            <div className={styles.deliverybox}>
                <img src={item.src} />
                <h4>[가정배달] 아침의 선물<br></br>(930ml)</h4>
                <p>3,200원</p>
            </div>
        )
    }
}
function DeliveryItem3({ item }) {
    if (item.delivery4) {
        return (
            <div className={styles.deliverybox}>
                <img src={item.src} />
                <h4>[가정배달] 하루근력 (900ml)</h4>
                <p>3,750원</p>
            </div>
        )
    }
}
function DeliveryItem4({ item }) {
    if (item.delivery4) {
        return (
            <div className={styles.deliverybox}>
                <img src={item.src} />
                <h4>[가정배달] 아침의 선물 고칼슘&글루코사민(900ml)</h4>
                <p>3,600원</p>
            </div>
        )
    }
}

function DeliveryItem5({ item }) {
    if (item.delivery5) {
        return (
            <div className={styles.deliverybox}>
                <img src={item.src} />
                <h4>[가정배달] 이오 (80ml)</h4>
                <p>550원</p>
            </div>
        )
    }
}
function DeliveryItem6({ item }) {
    if (item.delivery6) {
        return (
            <div className={styles.deliverybox}>
                <img src={item.src} />
                <h4>[가정배달] 아침의 선물 아인슈타인 베이비(900ml)</h4>
                <p>3,600원</p>
            </div>
        )
    }
}
function DeliveryItem7({ item }) {
    if (item.delivery7) {
        return (
            <div className={styles.deliverybox}>
                <img src={item.src} />
                <h4>[가정배달] 아침의 선물 아인슈타인 키즈(900ml)</h4>
                <p>3,600원</p>
            </div>
        )
    }
}


function Delivery() {
    const items = useItemState();
    return (
        <div>
            <div className="subpath">
                <ul>
                    <li>
                        HOME
                    </li>
                    <li>
                        가정배달
                    </li>
                </ul>
            </div>
            <div className="subimg">
                <img src="https://shoppingcdn.namyangi.com/attach/site/2021/202111/1d77283d-eb9d-4db0-8609-cbfc6365efab.jpg?03bba6c"></img>
            </div>
            <div className={styles.contents} id='delivery_tab' >
                <div className={styles.contents_in}>
                    <div className={styles.delivety_wrap}>
                        <img src="https://shoppingcdn.namyangi.com/attach/site/2023/202302/453196af-77e1-4937-b825-ae7399e1300e.jpg?03bba6c"></img>
                        <img src="https://shoppingcdn.namyangi.com/attach/site/2021/202103/c98937de-e26c-4494-ad4b-bf32337df803.png?03bba6c" style={{float: 'right'}} />
                    </div>
                </div>
                <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="가정배달 추천제품">
                        <div className={styles.tte}>
                                <div className={styles.DeliveryItem1}>
                                    {items.map((item) => (
                                        <DeliveryItem1 item={item} key={item.id} />
                                    ))}
                                    {items.map((item) => (
                                        <DeliveryItem2 item={item} key={item.id} />
                                    ))}
                                    {items.map((item) => (
                                        <DeliveryItem3 item={item} key={item.id} />
                                    ))}
                                      {items.map((item) => (
                                        <DeliveryItem4 item={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="이름별">
                            <div className={styles.tte}>
                            <div className={styles.DeliveryItem5}>
                                    {items.map((item) => (
                                        <DeliveryItem5 item={item} key={item.id} />
                                    ))}
                                    {items.map((item) => (
                                        <DeliveryItem6 item={item} key={item.id} />
                                    ))}
                                    {items.map((item) => (
                                        <DeliveryItem7 item={item} key={item.id} />
                                    ))}
                                    {items.map((item) => (
                                        <DeliveryItem7 item={item} key={item.id} />
                                    ))}
                                    
                                </div>
                                
                            </div>
                        </Tab>
                    </Tabs>
            </div>
        </div>
    )
}
export default Delivery;