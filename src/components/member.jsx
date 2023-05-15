import React from "react";
import styles from './member.module.css';


function Member() {
    return (
        <div>
            <div className="subpath">
                <ul>
                    <li>
                        HOME
                    </li>
                    <li>
                        프리미엄멤버십
                    </li>
                    <li>
                        프리미엄멤버십 안내
                    </li>
                    <li>
                        소개
                    </li>
                </ul>
            </div>
            <div className="subimg">
                <img src={process.env.PUBLIC_URL + "/images/member.png"} alt="Market"></img>
            </div>
           <div className={styles.contents}>
            <div className={styles.contents_in}>
                <div className={styles.member_benefit}>
                    <div className={styles.member_benefit01}>
                        <div className={styles.member_txt_box}>혜택1</div>
                        <h3>웰컴 기프트로 가입비 돌려받자!</h3>
                        <p>가입비 내신 만큼 돌려드립니다 (택1)</p>
                    </div>
                    <div className={styles.member_b}>
                        <div className={styles.member_benefit01_item}>
                            <img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/a4bd0376-6ee9-4f5b-8362-0e861b658e32.png?63cc85d" alt="아이엠마더"></img>
                            <h4>아이엠마더</h4>
                        </div>
                        <div className={styles.member_benefit01_item}>
                            <img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/d37c5c9a-0a64-4134-b664-96dc033a1711.png?03bba6c" alt="임페리얼드림XO"></img>
                            <h4>임페리얼드림XO</h4>
                        </div>
                        <div className={styles.member_benefit01_item}>
                            <img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/9a5e35d2-bbdc-489a-a8a5-1b76e9d476f1.png?03bba6c" alt="컴포트케어"></img>
                            <h4>컴포트케어</h4>
                        </div>
                        <div className={styles.member_benefit01_item}>
                            <img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/86f359b4-b022-4b08-a65d-88acf3666940.png?03bba6c" alt="유기농 산양유아식"></img>
                            <h4>유기농 산양유아식</h4>
                        </div>
                    </div>
                    <div class={styles.member_benefit01_text}>
                        <p>가입선물은 유료 가입자에 한해 지급되며 선택한 사은품은 변경 및 교환이 불가합니다.</p>
                    </div>
                    <div className={styles.member_benefit02}>
                        <div className={styles.member_txt_box2}>혜택2</div>
                        <h3>구매할수록 더욱 커지는 혜택</h3>
                        <p>구매 단계별 할인 혜택이 적용됩니다</p>
                    </div>
                    <div className={styles.member_benefit02_b}>
                       <div className={styles.member_benefit02_bb}>
                            <img src="https://shopping.namyangi.com/resources/images/common/img_benefit_step1.png" alt="첫 구매부터 15%할인"></img>
                            <h4>첫 구매부터 15%할인</h4>
                        </div>
                        <div className={styles.member_benefit02_bb}>
                            <img src="https://shopping.namyangi.com/resources/images/common/img_benefit_step2.png" alt="구매 구간별 할인폭 증가"></img>
                            <h4>구매 구간별 할인폭 증가</h4>
                        </div>
                        <div className={styles.member_benefit02_bb}>
                            <img src="https://shopping.namyangi.com/resources/images/common/img_benefit_step3.png" alt="5회 구매확정 시 마다 사은품 증정"></img>
                            <h4>5회 구매확정 시 마다 사은품 증정<br></br>
                                (구매확정 주문건수에 한함)</h4>
                        </div>
                    </div>
                    <div class={styles.member_benefit02_text}>
                        <p>단계별 한 사람이 구매할 수 있는 구매 총량은 한정되어 있으며, 구매량에 관계없이 구매 횟수로 사은품제공 및 할인율이 차등 적용됩니다.</p>
                    </div>
                    <div className={styles.member_benefit03}>
                        <div className={styles.member_txt_box3}>혜택3</div>
                        <h3>프리미엄멤버십 회원 전용관 혜택</h3>
                        <p>회원님만을 위한 깜짝 혜택들이 쏟아집니다</p>
                    </div>
                    <div className={styles.member_benefit03_b}>
                       <div className={styles.member_benefit03_bb}>
                            <img src="https://shopping.namyangi.com/resources/images/common/bg_benefit_speciel.png" alt="프리미엄멤버십 전용관 입장"></img>
                            <h4>프리미엄멤버십 전용관 입장</h4>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div >

    )
}

export default Member;
