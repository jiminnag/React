import React from "react";
import styles from './pop.module.css';

function Pop() {
    return (
        <div>
            <div className="subpath">
                <ul>
                    <li>
                        HOME
                    </li>
                    <li>
                        기획전
                    </li>
                </ul>
            </div>
            <div className="subimg">
                <img src="https://shoppingcdn.namyangi.com/attach/site/2020/202011/a0262bb6-6047-47ad-a608-1b8bb5604490.png" alt="#"></img>
            </div>
            <div className={styles.contents}>
                <div className={styles.contents_in}>
                    <div className={styles.poptitle}>
                        <h3>남양 기획전</h3>
                        <div className={styles.poptitle_r}>
                            총 7건의 기획전이 있습니다.
                        </div>
                    </div>
                    <div className={styles.pop_b}>
                        <div className={styles.pop_item}>
                            <img src="https://shoppingcdn.namyangi.com/attach/item/2023/202305/19c1d8ba-6871-4588-91b3-5c0e54ee8da1.png" alt="테이크핏 퓨어프로틴 신제품 출시! 수분충전 완전 단백질 플랜"></img>
                            <h4>테이크핏 퓨어프로틴 신제품 출시! 수분충전 완전 단백질 플랜</h4>
                            <span>2023.05.09 ~ 2023.06.30</span>
                        </div>
                    </div>
                    <div className={styles.pop_b1}>
                        <div className={styles.pop_item1}>
                            <img src="https://shoppingcdn.namyangi.com/attach/item/2023/202304/6c205439-e307-4d42-abb8-f099a5617735.png" alt="테이크핏 퓨어프로틴 신제품 출시! 수분충전 완전 단백질 플랜"></img>
                            <h4>테이크핏 퓨어프로틴 신제품 출시! 수분충전 완전 단백질 플랜</h4>
                            <span>2023.05.09 ~ 2023.06.30</span>
                        </div>
                    </div>
                    <div className={styles.pop_b2}>
                        <div className={styles.pop_item2}>
                            <img src="https://shoppingcdn.namyangi.com/attach/item/2023/202302/7a666558-7a70-499d-9b5d-403d548aa6c4.png" alt="분유에 진심을 영양에 과학을_ 남양 분유 기획전"></img>
                            <h4>분유에 진심을 영양에 과학을_ 남양 분유 기획전</h4>
                            <span>2023.02.07 ~ 2023.06.30</span>
                        </div>
                    </div>
                    <div className={styles.pop_b3}>
                        <div className={styles.pop_item3}>
                            <img src="https://shoppingcdn.namyangi.com/attach/item/2023/202301/f51165d8-6e0e-4463-bdaa-da6fa933a895.png" alt="테이크핏 케어, 9가지 필수 아미노산이 모두 함유된 완전 단백질 플랜"></img>
                            <h4>테이크핏 케어, 9가지 필수 아미노산이 모두 함유된 완전 단백질 플랜</h4>
                            <span>2023.01.30 ~ 2023.06.30</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.pop_in}>
                <div className={styles.poptitle}>
                    <h3>
                        입점사 기획전
                    </h3>
                    <div className={styles.poptitle_r}>
                         총 0건의 기획전이 있습니다
                    </div>
                </div>
                <div className={styles.pop_none}>
                    <span className={styles.pop_text}>등록된 기획전이 없습니다.</span>
                </div>
            </div>
        </div>
    )
}
export default Pop;