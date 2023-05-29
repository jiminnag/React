import React from "react";
import styles from "./kcea.module.css"
import { useItemState } from "../context";



function Kcea(){
    const items = useItemState()
    return (
        <div className={styles.contents}>
                <div className={styles.title}>
                    <h2 className={styles.t}>LOGIN</h2>
                </div>
            
            </div>
    )
}

export default Kcea;