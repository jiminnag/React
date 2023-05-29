import React from "react";
import styles from "./cookie.module.css"
import { useItemState } from "../context";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function CookieItem({ item }) {
    if (item.type === 'C')
        return (
            <div className={styles.itembox}>
                <img src={item.src} style={{ maxWidth: "270px" }} />
                <h4>{item.title}</h4>
                <img src={item.newSrc}></img>
                <p>{item.price}</p>
            </div>
        )
}

function Cookie() {
    const items = useItemState()
    return (
        <div className={styles.contents}>
            <div className={styles.title}>
                <h2 className={styles.t}>쿠키&선물</h2>
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
                    <Tab eventKey="cb" title="쿠키&선물 상자">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <CookieItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Cookie;