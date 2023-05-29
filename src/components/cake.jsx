import React from "react";
import styles from "./cake.module.css"
import { useItemState } from "../context";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function CakeItem({ item }) {
    if (item.type === 't')
        return (
            <div className={styles.itembox}>
                <img src={item.src} style={{ maxWidth: "270px", width: "220px" }} />
                <h4>{item.title}</h4>
                <img src={item.newSrc}></img>
                <p>{item.price}</p>
            </div>
        )
}

/* 다용도 박스 부분*/
function CakeboxItem({ item }) {
    if (item.type === 'Bo')
        return (
            <div className={styles.itembox}>
                <img src={item.src} style={{ maxWidth: "270px", width: "220px" }} />
                <h4>{item.title}</h4>
                <img src={item.newSrc}></img>
                <h1>{item.price}</h1>
                <p>{item.money}</p>
            </div>
        )
}



function Cake() {
    const items = useItemState()
    return (
        <div className={styles.contents}>
            <div className={styles.title}>
                <h2 className={styles.t}>케익</h2>
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
                        <strong>12</strong>
                        ITEMS
                    </p>
                </div>
                <Tabs
                    defaultActiveKey="tcb"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="tcb" title="투명케이크 상자">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <CakeItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                    <Tab eventKey="cb" title="케이크 상자">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <CakeboxItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Cake;