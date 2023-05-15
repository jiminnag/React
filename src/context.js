import React, { createContext, useContext, useReducer } from "react";

const initItems = [
    {
        id: 1,
        type: 'p',
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아01',
        price: '1000원',
        act: true,
    },
    {
        id: 2,
        type: 'p',
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아02',
        price: '2000원',
        act: true,
    },
    {
        id: 3,
        type: 'p',
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아03',
        price: '3000원',
        act: false,

    },
    {
        id: 4,
        type: 'p',
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아04',
        price: '4000원',
        act: false,

    },
    {
        id: 5,
        type: 'p',
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '1000원',
        act: true
    },
    {
        id: 6,
        type: 'p',
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '2000원',
        act: true
    },
    {
        id: 7,
        type: 'p',
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '3000원',
        act: false
    },
    {
        id: 8,
        type: 'p',
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '4000원',
        act: false
    }
    ,
    {
        id: 9,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2023/202305/98e104ae-08f3-4707-a830-757450601d9f.png',
        act: true,
        event1: true
    },
    {
        id: 10,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2023/202304/6ab43aa7-6191-4012-824c-40a3fe9db4b8.png',
        act: true,
        event2: true
    },
    {

        id: 11,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2023/202304/c59164d0-98b2-49f4-8b82-d6eb920e4868.png',
        act: true,
        event3: true
    },
    {
        id: 12,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2023/202304/6ab43aa7-6191-4012-824c-40a3fe9db4b8.png',
        event4: true

    }
    ,
    {
        id: 13,
        src: 'https://shopping.namyangi.com/resources/images/common/bg_pmembership_guest.jpg',
        act: true,
    },
    {
        id: 14,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c',
        title: '55년 모유 연구 노하우',
        price: '임페리얼 XO',
        act: true,
        brand1: true
    }
    ,
    {
        id: 15,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c',
        title: '분유에 진심을 영양에 과학을',
        price: '아이엠마더',
        act: true,
        brand1: true
    }
    ,
    {
        id: 16,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/cff83b65-73f2-4088-a1aa-b3241f930fc7.png?03bba6c',
        title: '365일 자연방목 3%미만 한정생산',
        price: '유기농산양',
        act: true,
        brand1: true
    }
    ,
    {
        id: 17,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/8a9fde0e-751a-4c8f-877f-7af1598cd8cb.png?03bba6c',
        title: '한 번 더 생각한 우리아이 안심먹거리',
        price: '아이꼬야',
        act: true,
        brand1: true
    }
    ,
    {
        id: 18,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2022/202208/cce13fe0-c516-4644-a914-9a9e230134fc.png?03bba6c',
        title: '품질검사도 영양성분도 한 수 위!',
        price: '아인슈타인',
        act: true,
        brand3: true
    }
    ,
    {
        id: 19,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2022/202208/abc013ea-2ead-453b-9ceb-4363f5f789ea.png?03bba6c',
        title: '엄마의 마음으로 만든 이유식',
        price: '맘스쿠킹',
        act: true,
        brand3: true
    }
    ,
    {
        id: 20,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2022/202208/47176eb5-5d5c-4945-b1f0-26eb4fbdd5ad.png?03bba6c',
        title: '우리아이 성장의 KEY를찾다',
        price: '키플러스',
        act: true,
        brand3: true
    }
    ,
    {
        id: 21,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/ebadcfc5-97fa-4b27-8455-cc35a76bb2ef.png?03bba6c',
        title: '아기의 성장 단계별 영양설계',
        price: '아기사랑수',
        act: true,
        brand3: true
    },
    {
        id: 22,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2022/202208/abc013ea-2ead-453b-9ceb-4363f5f789ea.png?03bba6c',
        title: '엄마의 마음으로 만든 이유식',
        price: '맘스쿠킹',
        act: true,
        brand2: true
    }
    ,
    {
        id: 23,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/ebadcfc5-97fa-4b27-8455-cc35a76bb2ef.png?03bba6c',
        title: '아기의 성장 단계별 영양설계',
        price: '아기사랑수',
        act: true,
        brand2: true
    },
    ,
    {
        id: 24,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2022/202208/cce13fe0-c516-4644-a914-9a9e230134fc.png?03bba6c',
        title: '품질검사도 영양성분도 한 수 위!',
        price: '아인슈타인',
        act: true,
        brand2: true
    }
    , {
        id: 25,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/8a9fde0e-751a-4c8f-877f-7af1598cd8cb.png?03bba6c',
        title: '한 번 더 생각한 우리아이 안심먹거리',
        price: '아이꼬야',
        act: true,
        brand2: true
    }, {
        id: 26,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/a4bd0376-6ee9-4f5b-8362-0e861b658e32.png?03bba6c',
        title: '아이엠 마더',
        member: true
    }
    , {
        id: 27,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/a4bd0376-6ee9-4f5b-8362-0e861b658e32.png?03bba6c',
        title: '임페리얼드림XO',
        member: true
    }
    , {
        id: 28,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/a4bd0376-6ee9-4f5b-8362-0e861b658e32.png?03bba6c',
        title: '컴포트케어',
        member: true
    }, {
        id: 29,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202210/09710662-1367-4fdf-b0cc-6f30c6c7f9a6.jpg?03bba6c',
        title: '[가정배달] 아침의 선물 불가리스 골드 (150ml)',
        price: '1,550원',
        delivery1: true
    }, {
        id: 30,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2021/202111/66d0430e-5b53-4578-9b85-1f94eeec969b.jpg?03bba6c',
        title: '[가정배달] 아침의 선물 (930ml)',
        price: '3,200원',
        delivery2: true
    }, {
        id: 31,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2020/202004/74b07f79-8da7-422a-be7b-d2559b9d29a0.jpg?03bba6c',
        title: '[가정배달] 아침의 선물 슈퍼밀크(900ml)',
        price: '3,600원',
        delivery3: true
    }
    , {
        id: 32,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2019/201908/2c94a5f5-135f-4357-a3b5-999f53be5970.jpg?03bba6c',
        title: '[가정배달] 아침의 선물 고칼슘&글루코사민(900ml)',
        price: '3,600원',
        delivery4: true
    }
    , {
        id: 33,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2019/201908/6b40a997-2daa-43df-802d-524fd0a77b46.jpg?03bba6c',
        title: '[가정배달] 이오 (80ml)',
        price: '550원',
        delivery5: true
    }
    , {
        id: 34,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2020/202002/312b3b02-aaac-48f7-b0f8-63ff9d3540b4.jpg?03bba6c',
        title: '[가정배달] 아침의 선물 아인슈타인 베이비(900ml)',
        price: '3,600원',
        delivery6: true
    }
    , {
        id: 35,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2020/202002/6d2173de-954d-4b8b-a62a-db4831e5e772.jpg?03bba6c',
        title: '[가정배달] 아침의 선물 아인슈타인 키즈(900ml)',
        price: '3,600원',
        delivery7: true
    }
];

function itemReducer(state, action) {
    switch (action.type) {

    }
};


const ItemStateContext = createContext();

export function ItemProvider({ children }) {
    const [state] = useReducer(itemReducer, initItems);

    return (
        <ItemStateContext.Provider value={state}>
            {children}
        </ItemStateContext.Provider>
    )

};

export function useItemState() {
    const context = useContext(ItemStateContext);
    if (!context) {
        throw new Error('temStateContext를 찾을 수 없음')
    }
    return context;
};