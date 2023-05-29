import React from "react";
import styles from "./bottom.module.css"
import { useItemState } from "../context";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

/*사각받침*/
function CakeItem({ item }) {
    if (item.type === 'f')
        return (
            <div className={styles.itembox}>
                <img src={item.src} style={{ maxWidth: "270px", width: "220px" }} />
                <h4>{item.title}</h4>
                <img src={item.newSrc}></img>
                <p>{item.price}</p>
            </div>
        )
}

/* 원형받침*/
function BoxItem({ item }) {
    if (item.type === 'O')
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


function Bottom() {
    const items = useItemState()

    return (
        <div className={styles.contents}>
            <div className={styles.title}>
                <h2 className={styles.t}>받침</h2>
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
                    defaultActiveKey="cakebox"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="cakebox" title="사각 받침">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <CakeItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                    <Tab eventKey="box" title="원형 받침">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <BoxItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Bottom;