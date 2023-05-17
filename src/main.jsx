import React from "react";
import Mainimg from "./mainimg";
import { useItemState } from "./context";

function ProductItem({ item }) {
    if (item.id <= 4) {
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
}



function Main() {
    const items = useItemState()
    return (
        <div>
            <Mainimg />
            <div className='contents'>
                <div className='contents_in'>
                    <div className="items">
                        {items.map((item) => (
                            <ProductItem item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;