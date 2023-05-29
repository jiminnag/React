import React from "react";
import styles from "./custom.module.css"
import { useItemState } from "../context";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function CustomItem({ item }) {
    if (item.type === 'cu')
        return (
            <div className={styles.itembox}>
                <img src={item.src} style={{ maxWidth: "270px" }} />
                <h4>{item.title}</h4>
                <img src={item.newSrc}></img>
                <p>{item.price}</p>
            </div>
        )
}

function CustomItem2({ item }) {
    if (item.type === 'cu2')
        return (
            <div className={styles.itembox}>
                <img src={item.src} style={{ maxWidth: "270px" }} />
                <h4>{item.title}</h4>
                <img src={item.newSrc}></img>
                <p>{item.price}</p>
            </div>
        )
}

function CustomItem3({ item }) {
    if (item.type === 'cu3')
        return (
            <div className={styles.itembox}>
                <img src={item.src} style={{ maxWidth: "270px" }} />
                <h4>{item.title}</h4>
                <img src={item.newSrc}></img>
                <p>{item.price}</p>
            </div>
        )
}
function CustomItem4({ item }) {
    if (item.type === 'cu4')
        return (
            <div className={styles.itembox}>
                <img src={item.src} style={{ maxWidth: "270px" }} />
                <h4>{item.title}</h4>
                <img src={item.newSrc}></img>
                <p>{item.price}</p>
            </div>
        )
}



function Custom() {
    const items = useItemState()
    return (
        <div className={styles.contents}>
            <div className={styles.title}>
                <h2 className={styles.t}>주문제작</h2>
            </div>
            <div className={styles.contents_in}>
                <div className={styles.menu}>
                    <ul className={styles.type}>
                        <li>
                            <a href="#">
                                LOW PRICE
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                HIGH PRICE
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                NAME
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                NEW
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                BEST
                            </a>
                        </li>
                    </ul>
                    <p className={styles.total}>
                        TOTAL
                        <strong>8</strong>
                        ITEMS
                    </p>
                </div>
                <Tabs
                    defaultActiveKey="cb"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="cb" title="홈케이크">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <CustomItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                    <Tab eventKey="box" title="디저트">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <CustomItem2 item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                    <Tab eventKey="out" title="기타 " >
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <CustomItem3 item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                    <Tab eventKey="packaging" title="개인결제">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <CustomItem4 item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Custom;