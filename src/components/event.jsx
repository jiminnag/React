import React from "react";
import styles from "./event.module.css"
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AiOutlineRightCircle } from "react-icons/ai";
import NoticeList from "./noticeList";
import { useItemState } from "../context";




function EventItem1({ item }) {
    if (item.event1) {
        return (
            <div>
                <img src={item.src} />
                <span className={styles.title}>오직 시크릿마켓에서만, 쉿크릿 0원딜!</span>
                <span className={styles.day}>기간 2023.05.11 ~2023.05.11 </span>
                <span className={styles.event_o}>
                    <span className={styles.event_red}>D-day</span>
                </span>
            </div>
        )
    }
}

function EventItem3({ item }) {
    if (item.event3) {
        return (
            <div>
                <img src={item.src} />
                <span className={styles.title}>함께하면 대박나는 2023 동행축제</span>
                <span className={styles.day}>기간 2023.04.28 ~2023.05.31 </span>
                <span className={styles.event_o}>
                    <span className={styles.event_red}>D-day</span>
                </span>

            </div>
        )
    }
}

function EventItem2({ item }) {
    if (item.event2) {
        return (
            <div>
                <img src={item.src} />
                <span className={styles.title}>오직 시크릿마켓에서만, 쉿크릿 0원딜!</span>
                <span className={styles.day}>기간 2023.04.19 ~2023.04.20 </span>
                <span className={styles.event_e}>
                    <span className={styles.event_end}>종료</span>
                </span>

            </div>
        )
    }
}
function EventItem4({ item }) {
    if (item.event4) {
        return (
            <div>
                <img src={item.src} />
                <span className={styles.title}>오직 시크릿마켓에서만, 쉿크릿 0원딜!</span>
                <span className={styles.day}>기간 2023.04.06 ~2023.04.06 </span>
                <span className={styles.event_e}>
                    <span className={styles.event_end}>종료</span>
                </span>

            </div>
        )
    }
}

function Event() {
    const items = useItemState()
    return (
        <div>
            <div className="subpath">
                <ul>
                    <li>
                        HOME
                    </li>
                    <li>
                        이벤트
                    </li>
                    <li>
                        이벤트 홈
                    </li>
                </ul>
            </div>
            <div className="subimg">
                <Carousel>
                    <Carousel.Item>
                        <div style={{ width: '100%', height: '380px'}}>
                          <img src="https://shoppingcdn.namyangi.com/attach/site/2022/202204/9816f39e-918f-436d-a9f3-ec7cc092c7e5.png"alt="#"></img>
                        </div>
                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div style={{ width: '100%', height: '380px'}}>
                           <img src="https://shoppingcdn.namyangi.com/attach/site/2020/202011/bf81c446-5d7d-483f-af35-35060e037325.png" alt="#"></img>
                        </div>
                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div style={{ width: '100%', height: '380px'}}>
                        <img src="https://shoppingcdn.namyangi.com/attach/site/2020/202011/a0262bb6-6047-47ad-a608-1b8bb5604490.png" alt="#"></img>
                        </div>

                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="contents">
                <div className={styles.contents_in}>
                    <div className={styles.notice_area}>
                        <div className={styles.notice}>
                            <div className={styles.notice_h}>
                                <h3>이벤트결과</h3>
                                <button>더보기<AiOutlineRightCircle /></button>
                            </div>
                            <div className={styles.notice_b}>
                                <NoticeList txt='[분유리뉴얼퀴즈] 리뉴얼 출시 퀴즈 이벤트 당첨자 발표 안내' date="23.01.26" />
                                <NoticeList txt='[뉴페이스체험단] 리얼 아몬드음료, 아몬드데이 체험단! 우수 리뷰 당첨자 발표' date="23.01.26" />
                                <NoticeList txt='[뉴페이스체험단] 아몬드데이 체험단 우수 리뷰 당첨자 발표' date="23.01.04" />
                                <NoticeList txt='[10월 임산부의 날] 프리미엄 멤버십 어썸한 쇼핑지원 당첨' date="23.01.04" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.event_tabmn} id='event_tabmn'>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="event1" title="진행중인이벤트">
                                <div className={styles.event_in}>
                                    <div className={styles.event_a}>
                                        <div className={styles.event_item}>
                                            {items.map((item) => (
                                                <EventItem1 item={item} key={item.id} />
                                            ))}
                                        </div>
                                        <div className={styles.event_item}>
                                            {items.map((item) => (
                                                <EventItem3 item={item} key={item.id} />
                                            ))}
                                            <span className={styles.event_o}>
                                                <span className={styles.event_red}>day</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="event2" title="종료된이벤트">
                                <div>
                                    <div className={styles.event_b}>
                                        <div className={styles.event_item}>
                                            {items.map((item) => (
                                                <EventItem2 item={item} key={item.id} />
                                            ))}

                                        </div>
                                        <div className={styles.event_item}>
                                            {items.map((item) => (
                                                <EventItem4 item={item} key={item.id} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Event;