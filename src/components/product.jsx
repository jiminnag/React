import React from "react";
import styles from "./product.module.css";
import { useItemState } from "../context";

function ProductItem({ item }) {
    if (item.type === 'p')
        return (
            <div>
                <div>
                    <span>※냉장</span>
                </div>
                <img src={item.src} />
                <h4>{item.title}</h4>
                <p>{item.price}</p>
            </div>
        )
}

function Product() {
    const items = useItemState()
    return (
        <div>
            <div className="subpath">
                <ul>
                    <li>
                        HOME
                    </li>
                    <li>
                        냉장제품
                    </li>
                </ul>
            </div>
            <div class={styles.subtitle}>
                <div>
                    <h3>냉장제품</h3>
                    <span>총몇개의 상품이 있습니다.</span>
                    <button>상세검색 +</button>
                </div>
            </div>
            <div className={styles.contents}>
                <div className="contents_in">
                    <div className={styles.list_h}>
                        <ul>
                            <li>인기상품순</li>
                            <li>신상품순</li>
                            <li>낮은가격순</li>
                            <li>높은가격순</li>
                            <li>상품평순</li>
                        </ul>
                        <div>200개씩 보기</div>
                    </div>
                    <div className={styles.list_b}>
                        {items.map((item) => (
                            <ProductItem item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Product;