import React from "react";
import styles from "./pie.module.css"
import { useItemState } from "../context";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function PieItem({ item }) {
    if (item.type === 'Pi')
        return (
            <div className={styles.itembox}>
                <img src={item.src} style={{ maxWidth: "270px" }} />
                <h4>{item.title}</h4>
                <img src={item.newSrc}></img>
                <p>{item.price}</p>
            </div>
        )
}
function LolItem({ item }) {
    if (item.type === 'Lo')
        return (
            <div className={styles.itembox}>
                <img src={item.src} style={{ maxWidth: "270px" }} />
                <h4>{item.title}</h4>
                <img src={item.newSrc}></img>
                <p>{item.price}</p>
            </div>
        )
}

function Pie2Item({ item }) {
    if (item.type === 'Pi2')
        return (
            <div className={styles.itembox}>
                <img src={item.src} style={{ maxWidth: "270px" }} />
                <h4>{item.title}</h4>
                <img src={item.newSrc}></img>
                <p>{item.price}</p>
            </div>
        )
}


function Pie() {
    const items = useItemState()
    return (
        <div className={styles.contents}>
            <div className={styles.title}>
                <h2 className={styles.t}>파이&롤&조각</h2>
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
                    defaultActiveKey="tcb"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="tcb" title="파이">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <PieItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                    <Tab eventKey="cb" title="롤">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <LolItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                    <Tab eventKey="out" title="조각">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <Pie2Item item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Pie;