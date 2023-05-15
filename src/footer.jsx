import React from "react";
import styles from "./footer.module.css"

function Footer() {
    return (
        <div className={styles.footer}>
            <div className='sub_main'>
            <div className='sub_main_in'>
                <ul>
                    <li>
                        <h4>공지사항</h4>
                        <p>남양몰 5월 연휴 배송 및 고객센터 운영<br></br>
                          안내</p>
                        2023.04.25
                    </li>
                    <li>
                        <h4>APP 다운로드</h4>
                        <p>내 손안에 남양몰 오픈!<br></br>
                        앱스토어, 구글플레이에서 만나요</p>
                       다운로드
                    </li>
                    <li>
                        <h4>고객센터</h4>
                        <p>평일 : 오전 9시 ~ 오후 5시<br></br>
                        (점심시간 : 11시 30분 ~ 1시)<br></br>
                        주말, 공휴일은 1:1문의를 이용해 주세요.</p>
                       <h1>1522-0130</h1>
                    </li>
                    <li>
                      <div className='sub_box1'>
                      <img  src="https://img.icons8.com/ios/100/headset--v1.png" alt="headset--v1"/>
                          <h2>1:1문의</h2>
                      </div>
                      <div className='sub_box2'>
                      <img  src="https://img.icons8.com/dotty/80/faq.png" alt="faq"/>
                          <h2>자주묻는질문</h2>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
            <div className={styles.footer_text}>
                <div className={styles.footer_in}>
                    <span>회사소개</span>
                    <span>이용약관</span>
                    <span>개인정보처리방침</span>
                    <span>고객센터</span>
                </div>
            </div>
            <div className={styles.footer_bom}>
                <div className={styles.footer_bom_in}>
                    <div className={styles.footer_l}>
                        <h1>
                            <img src="https://shopping.namyangi.com/resources/images/common/logo.png"></img><br></br>
                        </h1>
                        <div className={styles.family}>
                            <label for="sel-fs" class={styles.offscreen}> 이동</label>
                            <select id="sel-fs" class={styles.btn}>
                                <option data-url="">패밀리사이트</option>
                                <option data-url="http://company.namyangi.com/">남양유업</option>
                                <option data-url="https://baby.namyangi.com/">남양아이</option>
                                <option data-url="http://www.iggoya.co.kr/index.asp">아이꼬야</option>
                            </select>
                        </div>
                        <div className={styles.footersns}>
                            <img width="36" height="36" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new" />
                            <img width="36" height="36" src="https://img.icons8.com/ios/50/twitter-circled--v1.png" alt="twitter-circled--v1" />
                            <img width="36" height="36" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1" />
                            <img width="36" height="36" src="https://img.icons8.com/ios/50/youtube-play--v1.png" alt="youtube-play--v1" />
                        </div>
                    </div>
                    <div className={styles.footer_r}>
                        <div className={styles.footer_area}>
                            <span className={styles.footer_info}>대표자 성명 : 이광범 </span>
                            <span className={styles.footer_if}>개인정보보호책임자 : 신현정 </span>
                            <span className={styles.footer_if}>사업자등록번호 : 202-81-04367 </span>
                            <span className={styles.footer_if}>통신판매업신고 : 서울강남 00873호<br></br></span>
                            <span className={styles.footer_info}>의료기기판매업신고 : 제7693호 </span>
                            <span className={styles.footer_if}>사업자소재지 : 서울시 강남구 도산대로 240, 1964빌딩 남양유업(주) </span>
                            <span className={styles.footer_if}>대표번호 : 02-734-1305 </span>
                            <span className={styles.footer_if}>팩스번호 : 02-733-6389<br></br></span>
                            <span className={styles.footer_info}>이메일 : webmaster@namyangi.com </span>
                            <span className={styles.footer_if}>남양몰 대표번호 : 1522-0130 </span>
                            <span className={styles.footer_if}>남양분유 임신육아교실 02-2010-6476 </span>
                        </div>
                        <div className={styles.footer_area1}>
                            <span className={styles.footer_tx}>NAMYANG DAIRY PRODUCTS CO.,LTD. ALL RIGHT RESERVED.</span>
                            <span className={styles.footer_t}>남양아이몰의 정보, 콘텐츠 및 UI등을 상업적 목적으로 전재, 전송, 스크래핑 등 무단 사용할 수 없습니다.</span>
                        </div>
                        <div className={styles.footerctn}>
                            <img src="https://shopping.namyangi.com/resources/images/common/img_certimark_06.gif"></img>
                            <img src="https://shopping.namyangi.com/resources/images/common/img_certimark_01.gif"></img>
                            <img src="https://shopping.namyangi.com/resources/images/common/img_certimark_03.gif"></img>
                            <img src="https://shopping.namyangi.com/resources/images/common/img_certimark_04.gif"></img>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;