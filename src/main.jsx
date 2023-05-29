import React from "react";
import Mainimg from "./mainimg";
import styles from "./main.module.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useItemState } from "./context";

/* 케이크 박스 부분*/
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

/* 다용도 박스 부분*/
function BoxItem({ item }) {
    if (item.type === 'b')
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

/* 테이크 아웃*/
function OutItem({ item }) {
    if (item.type === 'o')
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

/* 포장데코*/
function PackagingItem({ item }) {
    if (item.type === 'P')
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

/* 베이킹도구*/
function EquipmentItem({ item }) {
    if (item.type === 'e')
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




function Main() {
    const items = useItemState()
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.romi}>
                    <div className={styles.romitop}>
                        <Mainimg />
                    </div>
                    <div className={styles.box}>
                        <div className={styles.banner}>
                            <ul className={styles.bannerb}>
                                <li>
                                    <a href='#'>
                                        <img src="https://packagefactory.co.kr/main/main_banner01.jpg" style={{ width: '400px', height: '200px' }}></img>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.box2}>
                            <ul className={styles.left}>
                                <li>
                                    <a href='#'>
                                        <img src="https://packagefactory.co.kr/main/main_banner02.jpg" style={{ width: '200px', height: '200px' }}></img>
                                    </a>
                                </li>
                            </ul>
                            <ul className={styles.right}>
                                <li>
                                    <a href='#'>
                                        <img src="https://packagefactory.co.kr/main/main_banner03.jpg" style={{ width: '200px', height: '200px' }}></img>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.notice}>
                            <div className={styles.board}>
                                <ul className={styles.notice_notice}>
                                    <li className={styles.noticeli}>
                                        <a href="#">
                                            <img src="https://packagefactory.co.kr/web/upload/romi/notice/notice_more.png"></img>
                                        </a>
                                    </li>
                                </ul>
                                <ul className={styles.recordb}>
                                    <li className={styles.recordr}>
                                        <a className={styles.recorda} href="#">디자인 문의</a>
                                        <span className={styles.records}>08/31</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Tabs
                    defaultActiveKey="cb"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="cb" title="케이크 상자">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <CakeboxItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                    <Tab eventKey="box" title="다용도박스">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <BoxItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                    <Tab eventKey="out" title="테이크아웃" >
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <OutItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                    <Tab eventKey="packaging" title="포장데코">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <PackagingItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                    <Tab eventKey="equipment" title="베이킹도구">
                        <div className={styles.list_b}>
                            {items.map((item) => (
                                <EquipmentItem item={item} key={item.id} />
                            ))}
                        </div>

                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default Main;