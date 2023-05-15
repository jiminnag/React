import React from "react";
import styles from "./market.module.css";

function Market() {
  return (
    <div>
      <div className="subpath">
        <ul>
          <li>HOME</li>
          <li>시크릿마켓</li>
        </ul>
      </div>
      <div className="subimg">
        <img src={process.env.PUBLIC_URL + "/images/market_img.png"} alt="Market"></img>
      </div>
      <div className={styles.market_text}>
        <h3>시크릿코드입력 </h3>
        <span className={styles.red}>(오놀라운특가)</span>
        <p>필수입력 항목</p>
        <p className={styles.red2}>*</p>
    

      <div className={styles.market_code}>
        <p className={styles.codered}>*</p>
        <p className={styles.code}>시크릿코드</p>
        <input type="text" placeholder="시크릿코드를 입력해주세요."></input>
      </div>
      <div className={styles.market_btn}>
        <button>확인</button>
      </div>
    </div>
    </div>
  );
}

export default Market;
