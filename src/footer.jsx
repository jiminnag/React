import React from "react";
import styles from "./footer.module.css"

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_in}>
                <div className={styles.info}>
                    <ul>
                        <li className={styles.if}>
                            <img src="https://packagefactory.co.kr/web/upload/romi/bottom/info.png"></img>
                        </li>
                        <li className={styles.community}>
                            <img src="https://packagefactory.co.kr/web/upload/romi/bottom/board_top.png"></img>
                            <img src="https://packagefactory.co.kr/web/upload/romi/bottom/board_01.png"></img>
                            <img src="https://packagefactory.co.kr/web/upload/romi/bottom/board_02.png"></img>
                            <img src="https://packagefactory.co.kr/web/upload/romi/bottom/board_03.png"></img>
                        </li>
                        <li className={styles.sns}>
                            <img src="https://packagefactory.co.kr/web/upload/romi/bottom/sns_top.png"></img>
                            <img src="https://packagefactory.co.kr/web/upload/romi/bottom/sns_insta.png"></img>
                            <img src="https://packagefactory.co.kr/web/upload/romi/bottom/sns_kakao.png"></img>
                        </li>
                        <li className={styles.drive}>
                            <img src="https://packagefactory.co.kr/web/upload/romi/bottom/order_info.png"></img>
                        </li>
                    </ul>
                </div>
                <div className={styles.company}>
                    <span>
                        <img src="https://packagefactory.co.kr/web/upload/romi/company/company_01.png"></img>
                        <img src="https://packagefactory.co.kr/web/upload/romi/company/company_02.png"></img>
                        <img src="https://packagefactory.co.kr/web/upload/romi/company/company_03.png"></img>
                        <img src="https://packagefactory.co.kr/web/upload/romi/company/company_04.png"></img>
                        <img src="https://packagefactory.co.kr/web/upload/romi/company/company_05.png"></img>
                        <img src="https://packagefactory.co.kr/web/upload/romi/company/company_06.png"></img>
                    </span>
                </div>
                <div className={styles.address}>
                    <span>COMPANY 패키지팩토리</span>
                    <span>OWNER 박새롬</span>
                    <span>WEB MASTER 박새롬</span>
                    <span>(saerom212@gmail.com)</span>
                    <span>TEL. 070-8265-5664</span><br />
                    <span>ADDRESS 경상북도 칠곡군 지천면 낙산로1길 51 패키지팩토리</span>
                    <span>BUSINESS LICENCE. 578-75-00030</span>
                    <span>MAIL-ORDER LICENCE NO. 제 2015 대구북구-0368호</span>
                    <span>[사업자정보확인]</span><br /><br />
                    <span>COPYRIGHT © 2015 PACKAGEFACTORY ALL RIGHTS RESERVED. design by.packagefactory</span><br /><br />
                    <img src="https://packagefactory.co.kr/web/upload/romi/company/company_banner_ssl.png"></img>
                    <img src="https://packagefactory.co.kr/web/upload/romi/company/company_banner_cafe24.png"></img>
                    <img src="https://packagefactory.co.kr/web/upload/romi/company/company_banner_es.png"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer;