import React, { createContext, useContext, useReducer } from "react";

const initItems = [
    {
        id: 1,
        type: 'c',
        type: 't',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/ce0f8f001da6844a9d3345f18e3ca358.jpg',
        title: '하우스 그레이지 투명케이크상자 (x 5개)',
        newSrc: 'https://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_new.gif',
        price: '5,500원',
        act: true,

    },
    {
        id: 2,
        type: 'c',
        type: 't',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/77598971e6595b8368513a497a2ec51b.jpg',
        title: '하우스 러브미 투명케이크상자 (x 5개)',
        newSrc: 'https://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_new.gif',
        price: '5,500원',
        act: true,

    },
    {
        id: 3,
        type: 'c',
        type: 't',
        src: 'https://packagefactory.co.kr/web/product/medium/202212/4858b2d5fe22240a934581be31f3ceb4.jpg',
        title: '솜사탕 누드 투명케이크상자',
        newSrc: 'https://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_new.gif',
        price: '1,550원',
        act: true,

    },
    {
        id: 4,
        type: 'c',
        type: 't',
        src: 'https://packagefactory.co.kr/web/product/medium/201910/c3ccea0d208c0e9960b0af2065b674e0.jpg',
        title: '아이보리 누드 투명케이크상자',
        price: '1,550원',
        act: true,

    },
    {
        id: 5,
        type: 'c',
        type: 't',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/8fcc704dc491f77480ad88f7ce37ad6a.jpg',
        title: '미니 누드 투명케이크상자',
        new: 'NEW',
        price: '900원',
        act: true,

    },
    {
        id: 6,
        type: 'c',
        src: 'https://packagefactory.co.kr/web/product/medium/202204/2f389106e2c49fbc778d17f2561bb0ad.jpg',
        title: '케이크 종이가방 쇼핑백 (x 10개)',
        new: 'NEW',
        price: '8,500원',
        act: true,

    },
    {
        id: 7,
        type: 'c',
        type: 't',
        src: 'https://packagefactory.co.kr/web/product/medium/202205/c86add37c88d47c7272a14930a6d970e.jpg',
        title: '투명 케이크 상자 (x 5개)',
        new: 'NEW',
        price: '11,000원',
        act: true,

    },
    {
        id: 8,
        type: 'c',
        type: 'Bo',
        src: 'https://packagefactory.co.kr/web/product/medium/202010/31aa475b17e6363e436e2d6de7c7ab25.jpg',
        title: '사탕수수 쉬폰 케이크 상자',
        price: '800원',
        act: true,

    },
    {
        id: 9,
        type: 'c',
        type: 't',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/8fcc704dc491f77480ad88f7ce37ad6a.jpg',
        title: '미니 누드 투명케이크상자',
        price: '900원',
        act: true,

    },
    {
        id: 10,
        type: 'c',
        type: 'Bo',
        src: 'https://packagefactory.co.kr/web/product/medium/202211/f2452efec9ec586d071fa9bbbf52ff3f.jpg',
        title: '스노우 화이트 케이크 상자',
        price: '1,100원',
        act: true,

    },
    {
        id: 11,
        type: 'c',
        type: 'Bi',
        src: 'https://packagefactory.co.kr/web/product/medium/201910/2f6a01929fd21a22b0e69e6c3527044d.jpg',
        title: '무지 케이크 비닐봉투 (x 50개)',
        price: '9,000원',
        act: true,

    },
    {
        id: 12,
        type: 'c',
        src: 'https://packagefactory.co.kr/web/product/medium/202212/5fdcc6b8c5c11b7c7816cbc7978fa856.jpg',
        title: '케이크 고정틀 (x 10개)',
        price: '2,000원',
        act: true,

    },
    {
        id: 13,
        type: 'p',
        type: 'Bo',
        src: 'https://packagefactory.co.kr/web/product/medium/201909/98b4b4edb473b7619db445b9d8d73fe5.jpg',
        title: '큐브 케이크 상자 화이트 (x 5개)',
        price: '5,000원',
        act: true,

    },
    {
        id: 14,
        type: 'p',
        type: 'Bo',
        src: 'https://packagefactory.co.kr/web/product/medium/202303/76ba66e2ea74bf11aba5b6b46ede7aed.jpg',
        title: '#흰점 시크릿큐브 케이크 상자 (x 5개)',
        price: '4,500원',
        act: true,

    },
    {
        id: 15,
        type: 'p',
        type: 'Bo',
        src: 'https://packagefactory.co.kr/web/product/medium/202106/f75f0cc6fe5304eb2ac5467673d6c14d.jpg',
        title: '시크릿큐브 케이크 상자 버터 (x 5개)',
        price: '5,000원',
        act: true,

    },
    {
        id: 16,
        type: 'p',
        type: 'Bo',
        src: 'https://packagefactory.co.kr/web/product/medium/202108/1e2ff6a5e55d6e1a04eca1d1e1dea004.jpg',
        title: '시크릿큐브 케이크 상자 피치 (x 5개)',
        price: '5,000원',
        act: true,

    },
    {
        id: 17,
        type: 'p',
        type: 'Bo',
        src: 'https://packagefactory.co.kr/web/product/medium/202206/9ca08819c70e29670c6680407f07ed59.jpg',
        title: '미니 케이크 상자 (화이트)',
        price: '800원',
        act: true,

    },
    {
        id: 18,
        type: 'p',
        type: 'Bo',
        src: 'https://packagefactory.co.kr/web/product/medium/202209/83d4052638727e2409f5eb4dc160dd27.jpg',
        title: '로즈 누드 케이크상자',
        price: '1, 550원',
        act: true,

    },
    {
        id: 19,
        type: 'p',
        type: 'Bo',
        src: 'https://packagefactory.co.kr/web/product/medium/202211/64de05b73eb0b4bc8d7a3487257caf56.jpg',
        title: '파스텔핑크 쉬폰 케이크 상자',
        price: '1,450원',
        act: true,

    },
    {
        id: 20,
        type: 'p',
        type: 'Bo',
        src: 'https://packagefactory.co.kr/web/product/medium/202208/ed235cc00b108cc786e4d43e2dfe8de5.jpg',
        title: '#흰점 피치누드 2호2단)',
        price: '2,200원',
        act: true,

    },
    {
        id: 21,
        type: 'm',
        src: 'https://packagefactory.co.kr/web/product/medium/202212/92be731667c0bda3cc1f29fc89b5d7a2.jpg',
        title: '투명&슬라이드 상자 레몬 (x 10개)',
        price: '8,000원',
        act: true,

    },
    {
        id: 22,
        type: 'm',
        src: 'https://packagefactory.co.kr/web/product/medium/201907/b5aed201e3be297368c3c29d54b11541.jpg',
        title: '투명&슬라이드 상자 화이트 (x 10개)',
        price: '8,000원',
        act: true,

    },
    {
        id: 23,
        type: 'm',
        src: 'https://packagefactory.co.kr/web/product/medium/201907/81114bfcbab27d535fd975412869e9e1.jpg',
        title: '투명&슬라이드 상자 에어블루 (x 10개)',
        price: '8,000원',
        act: true,

    },
    {
        id: 24,
        type: 'm',
        src: 'https://packagefactory.co.kr/web/product/medium/201907/040b65058b6f752989e66ce2869007dc.jpg',
        title: '투명&슬라이드 상자 리빙코랄 (x 10개)',
        price: '8,000원',
        act: true,

    },
    {
        id: 25,
        type: 'm',
        src: 'https://packagefactory.co.kr/web/product/medium/201812/5a7f413f4498bc5ac5f19d71f19e943a.jpg',
        title: '투명&버건디 마카롱 상자 (x 10개)',
        price: '7,000원',
        act: true,

    },
    {
        id: 26,
        type: 'm',
        src: 'https://packagefactory.co.kr/web/product/medium/201812/d9f0802272d8b3f4ff6ae82a3ef31ec5.jpg',
        title: '투명&옐로우 마카롱 상자 (x 10개)',
        price: '7,000원',
        act: true,

    },
    {
        id: 27,
        type: 'm',
        src: 'https://packagefactory.co.kr/web/product/medium/201808/960c89b6bf1631b03adb549fce58b657.jpg',
        title: '투명&파스텔민트 마카롱 상자 (x 10개)',
        price: '8,000원',
        act: true,

    },
    {
        id: 28,
        type: 'm',
        src: 'https://packagefactory.co.kr/web/product/medium/201808/9637d10d66355e3ac7578ae71327faa1.jpg',
        title: '투명&파스텔핑크 마카롱 상자 (x 10개)',
        price: '7,000원',
        act: true,

    },
    {
        id: 29,
        type: 'C',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/f137f29f9241a66b704d71d5cbca948f.jpg',
        title: '큐빅 선물 상자 (x 10개)',
        price: '4,000원',
        act: true,

    },
    {
        id: 30,
        type: 'C',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/8898094a9d928ffe63b1b2b47bc390b0.jpg',
        title: '화이트펄 구디백 (x 10개)',
        price: '4,000원',
        act: true,

    },
    {
        id: 31,
        type: 'C',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/3561fcf7a22ebd95aab67872f9d44b4e.jpg',
        title: '화이트펄 반달상자 (x 10개)',
        price: '3,500원',
        act: true,

    },
    {
        id: 32,
        type: 'C',
        src: 'https://packagefactory.co.kr/web/product/medium/202205/fba1ecde194c47821ac22b745ea80528.jpg',
        title: '구움과자 휘낭시에 마들렌 상자 박스 (x 10개)',
        price: '5,500원',
        act: true,

    },
    {
        id: 33,
        type: 'C',
        src: 'https://packagefactory.co.kr/web/product/medium/202204/2f389106e2c49fbc778d17f2561bb0ad.jpg',
        title: '케이크 종이가방 쇼핑백 (x 10개)',
        price: '8,500원',
        act: true,

    },
    {
        id: 34,
        type: 'C',
        src: 'https://packagefactory.co.kr/web/product/medium/202106/dbd6a5abb2cf649ca06ffd1b09193a55.jpg',
        title: '투명&사탕수수 쿠키 상자 (x 10개)',
        price: '8,000원',
        act: true,

    },
    {
        id: 35,
        type: 'C',
        src: 'https://packagefactory.co.kr/web/product/medium/202106/2b00164c51c9c98dbad1ca9f7f04081c.jpg',
        title: '투명&핑크 쿠키 상자 (x 10개)',
        price: '8,000원',
        act: true,

    },
    {
        id: 36,
        type: 'C',
        src: 'https://packagefactory.co.kr/web/product/medium/202106/45b22a776f9cbedbef2b43e899fdee6c.jpg',
        title: '투명&아이보리 쿠키 상자 (x 10개)',
        price: '8,000원',
        act: true,

    }, {
        id: 37,
        type: 'd',
        src: 'https://packagefactory.co.kr/web/product/medium/202206/cb8f8a491cbebc0dcafb377996bd2ca2.jpg',
        title: '일회용 케이크 종이 칼 (x 10개)',
        price: '800원',
        act: true,

    },
    {
        id: 38,
        type: 'd',
        src: 'https://packagefactory.co.kr/web/product/medium/202110/20091897e294e0c1a61ac9513a6e9eba.jpg',
        title: '택배 박스',
        price: '33,000원',
        act: true,

    },
    {
        id: 39,
        type: 'd',
        src: 'https://packagefactory.co.kr/web/product/medium/201909/ba148fd4799f440358ba2b7673f030b1.jpg',
        title: '(스티커) 냉장 / 냉동보관 2입 (x 10개)',
        price: '1,000원',
        act: true,

    },
    {
        id: 40,
        type: 'd',
        src: 'https://packagefactory.co.kr/web/product/medium/201909/70a61c27c85b3943c1389ccbf2ea6a95.jpg',
        title: '(스티커) 베이직 핸드메이드 (x 10개)',
        price: '1,000원',
        act: true,

    },
    {
        id: 41,
        type: 'd',
        src: 'https://packagefactory.co.kr/web/product/medium/202205/fba1ecde194c47821ac22b745ea80528.jpg',
        title: '구움과자 휘낭시에 마들렌 상자 박스 (x 10개)',
        price: '5,500원',
        act: true,

    },
    {
        id: 42,
        type: 'd',
        src: 'https://packagefactory.co.kr/web/product/medium/201909/4701381510144a1a2e8160effbe8958e.jpg',
        title: '(스티커) 베이직 땡큐 (x 10개)',
        price: '1,000원',
        act: true,

    },
    {
        id: 43,
        type: 'd',
        src: 'https://packagefactory.co.kr/web/product/medium/202009/24446a498c919d24f4a80de7b4c57cbe.jpg',
        title: '(텍) 미니사각 땡큐 (x 10개)',
        price: '1,000원',
        act: true,

    },
    {
        id: 44,
        type: 'd',
        src: 'https://packagefactory.co.kr/web/product/medium/202009/f73899a0a418b8b407f93d197884c74e.jpg',
        title: '(텍) 원형 땡큐 (x 10개)',
        price: '1,000원',
        act: true,

    },
    {
        id: 45,
        type: 'cu4',
        src: 'https://packagefactory.co.kr/web/product/medium/201705/81_shop1_411296.jpg',
        title: '***',
        price: '2,729,500원',
        act: true,

    },
    {
        id: 46,
        type: 'cu2',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/606ca4f101148c23f92d695d07cd9e09.jpg',
        title: '키세스 ver.2',
        price: '14 x 8.5 x 5 cm',
        act: true,

    },
    {
        id: 47,
        type: 'cu2',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/06f9e83d33e16d9b2257e0069945e2ed.jpg',
        title: '크림퐁',
        price: '15 x 15 x 8 cm',
        act: true,

    },
    {
        id: 48,
        type: 'cu2',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/cd0257b9969e883d7fffc8fd054cf78b.jpg',
        title: '하고메케이크 ver.3',
        price: '누드1호',
        act: true,

    },
    {
        id: 49,
        type: 'cu',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/e9ad583e206bf3178c22e656342835a7.jpg',
        title: '하고메케이크 ver.4',
        price: '누드미니(고)',
        act: true,

    },
    {
        id: 50,
        type: 'cu2',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/f8ec2070da42edd3bed69352841f6ccf.jpg',
        title: '디트레인 ver.2',
        price: '16 x 16 x 9 cm',
        act: true,

    },
    {
        id: 51,
        type: 'cu3',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/c0f5a12fdc435876e6a17b3e059c00da.jpg',
        title: '누보 종이가방 ver.2',
        price: '19 x 10 x 19.5 cm',
        act: true,

    },
    {
        id: 52,
        type: 'cu2',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/2ed97e839a615d85925a38d8b6336648.jpg',
        title: '머지피스',
        price: '24.5 x 12 x 5 cm',
        act: true,

    },
    {
        id: 53,
        type: 'b',
        src: 'https://impacking.com/web/product/small/20191217/3339f5e86e1546853d2483b75f0c0848.jpg',
        title: '고급 블랙 선물상자 9-3호',
        price: '200 x 170 x 70 mm',
        money: '3,500원',
        act: true,

    },
    {
        id: 54,
        type: 'b',
        src: 'https://impacking.com/web/product/small/202102/fb948290377b666149a2ba9537910636.jpg',
        title: '돔형 조각케이크 박스 소_크라프트',
        price: '130 x 103 x 80 mm',
        money: '400원',
        act: true,

    },
    {
        id: 55,
        type: 'b',
        src: 'https://impacking.com/web/product/small/202102/1a668047b977fa16596ed5a7efe58fb8.jpg',
        title: '돔형 조각케이크 박스 소_화이트',
        price: '155 x 110 x 90 mm',
        money: '250원',
        act: true,

    },
    {
        id: 56,
        type: 'b',
        src: 'https://impacking.com/web/product/small/202102/da1f74e4659d646937078e996f958faa.jpg',
        title: '돔형 조각케이크 박스 중_블랙',
        price: '155 x 110 x 90 mm',
        money: '450원',
        act: true,

    },
    {
        id: 57,
        type: 'b',
        src: 'https://impacking.com/web/product/small/202102/1a668047b977fa16596ed5a7efe58fb8.jpg',
        title: '돔형 조각케이크 박스 중_블루',
        price: '155 x 110 x 90 mm',
        money: '450원',
        act: true,

    },
    {
        id: 58,
        type: 'b',
        src: 'https://impacking.com/web/product/small/202102/f9b4f0e391a0c7ee3d940407d3492309.jpg',
        title: '돔형 조각케이크 박스 중_핑크',
        price: '155 x 110 x 90 mm',
        money: '450원',
        act: true,

    },
    {
        id: 59,
        type: 'b',
        src: 'https://impacking.com/web/product/small/202102/1be83ee956d0981370f99b202f0c4638.jpg',
        title: '돔형 조각케이크 박스 중_화이트',
        price: '155 x 110 x 90 mm',
        money: '300원',
        act: true,

    },
    {
        id: 60,
        type: 'b',
        src: 'https://impacking.com/web/product/small/20200618/9766a53d6b666decc82f4addd5697731.jpg',
        title: '라운드 컷팅박스_크라프트',
        price: '160 x 160 x 55 mm',
        money: '500원',
        act: true,

    }, {
        id: 61,
        type: 'b',
        src: 'https://impacking.com/web/product/small/202102/19d4b4c8cb82a5ebdfb256d5778753c8.jpg',
        title: '라운드 컷팅박스_화이트',
        price: '160 x 160 x 55 mm',
        money: '500원',
        act: true,

    },
    {
        id: 62,
        type: 'b',
        src: 'https://impacking.com/web/product/small/202104/665ee60be403c76c3a8f466321dc7d67.jpg',
        title: '마카롱박스 1칸 화이트',
        price: '210 x 55 x 55 mm',
        money: '300원',
        act: true,

    },
    {
        id: 63,
        type: 'b',
        src: 'https://impacking.com/web/product/small/202104/fe2f9f359ce0d2a0752f060cdca305f4.jpg',
        title: '마카롱박스 2칸 화이트',
        price: '180 x 110 x 55 mm',
        money: '500원',
        act: true,

    },
    {
        id: 64,
        type: 'b',
        src: 'https://impacking.com/web/product/small/202104/1ef75d3703a84609347940ec84aaa43e.jpg',
        title: '마카롱박스 2칸 화이트',
        price: '210 x 110 x 55 mm',
        money: '500원',
        act: true,
    },
    {
        id: 65,
        type: 'o',
        src: 'https://impacking.com/web/product/small/202009/75db2252a9b87489f277f0f1dc335557.jpg',
        title: '2구 친환경 펄프 계란케이스_10개',
        price: '104 x 57 x 68 mm',
        money: '2,000원',
        act: true,

    },
    {
        id: 66,
        type: 'o',
        src: 'https://impacking.com/web/product/small/202009/866d132585d046e48ac4cb345aaf63f4.jpg',
        title: '3구 친환경 펄프 하트 계란케이스_10개',
        price: '110 x 113 x 60 mm',
        money: '3,100원',
        act: true,

    },
    {
        id: 67,
        type: 'o',
        src: 'https://impacking.com/web/product/small/202103/51395f86f1c7f15383db9a2e628974f5.jpg',
        title: '머핀 다용도캐리어 PET 4구_5개',
        price: '170 x 170 x 40 mm',
        money: '3,200원',
        act: true,

    },
    {
        id: 68,
        type: 'o',
        src: 'https://impacking.com/web/product/small/202103/e075bf65e718e56b164613ddf797bf95.jpg',
        title: '머핀 다용도캐리어 PET 6구_5개',
        price: '245 x 175 x 40 mm',
        money: '4,500원',
        act: true,

    },
    {
        id: 69,
        type: 'o',
        src: 'https://impacking.com/web/product/small/202102/15ccb41f25915a811c20698e87b2780c.jpg',
        title: '3중 단열 종이컵 물결 12oz(뚜껑포함)_옐로우_50개',
        price: '60 x 116 mm',
        money: '9,000원',
        act: true,

    },
    {
        id: 70,
        type: 'o',
        src: 'https://impacking.com/web/product/small/202102/5a6cfbcc25eb1f63d654fdc446eba7fb.jpg',
        title: '3중 단열 종이컵 물결 16oz(뚜껑포함)_라벤더_50개',
        price: '60 x 135 mm',
        money: '10,500원',
        act: true,

    },
    {
        id: 71,
        type: 'o',
        src: 'https://impacking.com/web/product/small/202102/83fda0aed45a4f60b59929eec492c5ac.jpg',
        title: '3중 단열 종이컵 물결 16oz(뚜껑포함)_민트_50개',
        price: '60 x 135 mm',
        money: '10,500원',
        act: true,

    },
    {
        id: 72,
        type: 'o',
        src: 'https://impacking.com/web/product/small/202102/001d35376dd6d28d744f5bc57d594e28.jpg',
        title: '3중 단열 종이컵 물결 16oz(뚜껑포함)_스카이_50개',
        price: '60 x 135 mm',
        money: '10,500원',
        act: true,

    }, {
        id: 73,
        type: 'o',
        src: 'https://impacking.com/web/product/small/202102/0a7eed872f7600363212ffbe7be5bc74.jpg',
        title: '3중 단열 종이컵 물결 16oz(뚜껑포함)_옐로우_50개',
        price: '60 x 135 mm',
        money: '10,500원',
        act: true,

    },
    {
        id: 74,
        type: 'o',
        src: 'https://impacking.com/web/product/small/202008/61ac8fb973441cf8a3cefb685890acd1.jpg',
        title: '3중 단열 종이컵 물결 16oz(뚜껑포함)_코랄핑크_50개',
        price: '60 x 135 mm',
        money: '10,500원',
        act: true,

    },
    {
        id: 75,
        type: 'o',
        src: 'https://impacking.com/web/product/small/202102/e34b7454cdca6d8caf6f8d42a0c78171.jpg',
        title: '4구 친환경 펄프 계란케이스_10개',
        price: '105 x 105 x 66 mm',
        money: '2,500원',
        act: true,

    },
    {
        id: 75,
        type: 'o',
        src: 'https://impacking.com/web/product/small/202102/12cf75fa6b742c9142a4bbcf155cbe56.jpg',
        title: '미니 롤케이크 케이스(뚜껑포함)_투명_30개',
        price: '150 x 110 x 85 mm',
        money: '18,850원',
        act: true,
    }, {
        id: 76,
        type: 'P',
        src: 'https://impacking.com/web/product/small/202212/e3afe712eb1d7525baa295f72494761f.jpg',
        title: '데코픽 털모자_크리스마스 그린',
        price: '35 x 135 mm',
        money: '800원',
        act: true,

    },
    {
        id: 77,
        type: 'P',
        src: 'https://impacking.com/web/product/medium/202212/0756816518287b603679d0b36b3a1243.jpg',
        title: '데코픽 털모자_크리스마스 레드',
        price: '35 x 135 mm',
        money: '800원',
        act: true,

    },
    {
        id: 78,
        type: 'P',
        src: 'https://impacking.com/web/product/medium/202211/10bd60d421ebff3fb729ec9801c59ceb.jpg',
        title: '데코픽 크리스마스 리본리스',
        price: '45 x 49 x 16 mm',
        money: '1,000원',
        act: true,

    },
    {
        id: 79,
        type: 'P',
        src: 'https://impacking.com/web/product/medium/202211/ee4fd9fa7251c2ba0437bdbaf244d393.jpg',
        title: '데코픽 크리스마스 화이트 트리',
        price: '42 x 53 x 24 mm',
        money: '1,000원',
        act: true,

    },
    {
        id: 80,
        type: 'P',
        src: 'https://impacking.com/web/product/medium/202211/759fff06ae9eef2034844cc0fc32f6c3.jpg',
        title: '데코픽 크리스마스 징글벨',
        price: '42 x 54 x 20 mm',
        money: '1,000원',
        act: true,

    },
    {
        id: 81,
        type: 'P',
        src: 'https://impacking.com/web/product/medium/202211/b70e61dc2439d6866fb1474b2323d649.jpg',
        title: '데코픽 크리스마스 눈사람C',
        price: '31 x 54 x 25 mm',
        money: '1,000원',
        act: true,

    },
    {
        id: 82,
        type: 'P',
        src: 'https://impacking.com/web/product/medium/202211/3e5b409bb9f1c4bab476c278c788fa6f.jpg',
        title: '데코픽 크리스마스 눈사람B',
        price: '31 x 55 x 24 mm',
        money: '1,000원',
        act: true,

    },
    {
        id: 83,
        type: 'P',
        src: 'https://impacking.com/web/product/medium/202211/20f2c991b6eaac7ca2def7359608e004.jpg',
        title: '데코픽 크리스마스 눈사람A',
        price: '30 x 54 x 21 mm',
        money: '1,000원',
        act: true,

    }, {
        id: 84,
        type: 'P',
        src: 'https://impacking.com/web/product/medium/202211/84326f6f03560f9c156a6866a60c65af.jpg',
        title: '데코픽 크리스마스 산타B',
        price: '40 x 50 x 20 mm',
        money: '1,000원',
        act: true,

    },
    {
        id: 85,
        type: 'P',
        src: 'https://impacking.com/web/product/medium/202211/01548f91ed2ea0855d6100721413967f.jpg',
        title: '데코픽 크리스마스 산타A',
        price: '40 x 50 x 20 mm',
        money: '1,000원',
        act: true,

    },
    {
        id: 86,
        type: 'P',
        src: 'https://impacking.com/web/product/small/202102/e34b7454cdca6d8caf6f8d42a0c78171.jpg',
        title: '4구 친환경 펄프 계란케이스_10개',
        price: '105 x 105 x 66 mm',
        money: '2,500원',
        act: true,

    },
    {
        id: 87,
        type: 'P',
        src: 'https://impacking.com/web/product/small/202212/e3afe712eb1d7525baa295f72494761f.jpg',
        title: '데코픽 털모자_크리스마스 그린',
        price: '35 x 135 mm',
        money: '800원',
        act: true,
    }, {
        id: 88,
        type: 'e',
        src: 'https://impacking.com/web/product/small/202105/c2310017686360e0f04d49e2496da883.jpg',
        title: '계량스푼 6종',
        price: '1.25, 1.65, 2.5, 5, 7.5, 15 ml',
        money: '4,300원',
        act: true,

    },
    {
        id: 89,
        type: 'e',
        src: 'https://impacking.com/web/product/small/202105/d4bfdb2948a2891333aa2e20c24bb36c.jpg',
        title: '계량스푼 스텐 4종',
        price: '1.25ml, 2.5ml, 5ml, 15ml',
        money: '4,300원',
        act: true,

    },
    {
        id: 90,
        type: 'e',
        src: 'https://impacking.com/web/product/small/202105/ad5bf7b2edf3d0a98c26aa4a34ff3e8d.jpg',
        title: '계량컵 그린 4종',
        price: '60ml, 80ml, 120ml, 240ml',
        money: '8,500원',
        act: true,

    },
    {
        id: 91,
        type: 'e',
        src: 'https://impacking.com/web/product/small/202105/0b1eded5ce3dce91572f07632bf3605e.jpg',
        title: '계량컵 투명 250ml',
        price: '250 ml',
        money: '4,000원',
        act: true,

    },
    {
        id: 92,
        type: 'e',
        src: 'https://impacking.com/web/product/small/202009/a54dde5cc6b5ec0faa7f78b682ae15ca.jpg',
        title: '깍지 별 no.840',
        price: '6 x 25 x 49 mm',
        money: '1,150원',
        act: true,

    },
    {
        id: 93,
        type: 'e',
        src: 'https://impacking.com/web/product/small/202009/46331369fb4ffda785fca1a77799e8f6.jpg',
        title: '깍지 별 no.841',
        price: '8 x 25 x 48 mm',
        money: '1,150원',
        act: true,

    },
    {
        id: 94,
        type: 'e',
        src: 'https://impacking.com/web/product/small/202009/8bb3bcf79a8ffde9529a0a308461244e.jpg',
        title: '깍지 별 no.842',
        price: '9 x 25 x 47 mm',
        money: '1,150원',
        act: true,

    },
    {
        id: 95,
        type: 'e',
        src: 'https://impacking.com/web/product/small/202009/0941cd2a22b9d1c314c1e41d08661b11.jpg',
        title: '깍지 별 no.843',
        price: '10 x 25 x 45 mm',
        money: '1,150원',
        act: true,

    }, {
        id: 96,
        type: 'e',
        src: 'https://impacking.com/web/product/small/202009/8ea1f5825c975a3e71d387fa8dc5a588.jpg',
        title: '깍지 별 no.844',
        price: '13 x 31 x 49 mm',
        money: '1,150원',
        act: true,

    },
    {
        id: 97,
        type: 'e',
        src: 'https://impacking.com/web/product/small/202009/4814da9fda25b657903f029dac752ac7.jpg',
        title: '깍지 별 no.845',
        price: '16 x 31 x 49 mm',
        money: '1,150원',
        act: true,

    },
    {
        id: 98,
        type: 'e',
        src: 'https://impacking.com/web/product/small/202009/b81549508e4dcd45e534653c7ad30f9c.jpg',
        title: '깍지 별 no.846',
        price: '16 x 31 x 49 mm',
        money: '1,150원',
        act: true,

    },
    {
        id: 99,
        type: 'e',
        src: 'https://impacking.com/web/product/small/202009/7261ef1e33c1e986c4e1b604ca4d87f9.jpg',
        title: '깍지 별 no.847',
        price: '18 x 36 x 53 mm',
        money: '1,150원',
        act: true,
    },
    {
        id: 100,
        type: 'c',
        type: 't',
        src: 'https://packagefactory.co.kr/web/product/medium/202108/3d95debd55c38e805c19eb4f504dae62.jpg',
        title: '피치 누드 투명케이크상자',
        price: '1,650원',
        act: true,

    },
    {
        id: 101,
        type: 'p',
        type: 'Bo',
        src: 'https://packagefactory.co.kr/web/product/medium/202211/b3ae6cbee88946f4323793cc546a9300.jpg',
        title: '파스텔민트 쉬폰 케이크 상자',
        price: '1,450원',
        act: true,

    },
    {
        id: 102,
        type: 'p',
        type: 'Bo',
        src: 'https://packagefactory.co.kr/web/product/medium/20200225/fcabce515c572b7d48415f41c998c43f.jpg',
        title: '로즈 케이크 상자',
        price: '1,200원',
        act: true,

    },
    {
        id: 103,
        type: 'f',
        src: 'https://packagefactory.co.kr/web/product/medium/20200302/243eb83c2bf70e0846dfb0cfb5d1ebe6.jpg',
        title: '단단한 사각 받침 (x 100개)',
        price: '10,000원',
        act: true,

    },
    {
        id: 104,
        type: 'f',
        src: 'https://packagefactory.co.kr/web/product/medium/20200611/51376e3f006ac438dd60a5808ac182f3.jpg',
        title: '단단한 #직사각 받침 (x 100개)',
        price: '10,000원',
        act: true,

    },
    {
        id: 105,
        type: 'f',
        src: 'https://packagefactory.co.kr/web/product/medium/202110/1baa96ce4ecdd047af2d965998c0ffb2.jpg',
        title: '케이크 사각 받침 밑판 하판',
        price: '330원',
        act: true,

    },
    {
        id: 106,
        type: 'f',
        src: 'https://packagefactory.co.kr/web/product/medium/20200227/7f37c84d3d641b987ddebbe2cfcdde96.jpg',
        title: '허그 사각 받침 (x 10개)',
        price: '1,000원',
        act: true,

    },
    {
        id: 107,
        type: 'f',
        src: 'https://packagefactory.co.kr/web/product/medium/201909/f45bcc251bf624e10172b4a47556066b.jpg',
        title: '핑크골드 케이크 사각 받침 밑판 하판',
        price: '380원',
        act: true,

    },
    {
        id: 108,
        type: 'O',
        src: 'https://packagefactory.co.kr/web/product/medium/20200302/e21026fce92e70f6ae9215ae06bc6c59.jpg',
        title: '단단한 원형 받침 (x 100개)',
        price: '10,000원',
        act: true,

    },
    {
        id: 109,
        type: 'O',
        src: 'https://packagefactory.co.kr/web/product/medium/201909/ba566037608a518567f64b2ca23d0071.jpg',
        title: '케이크 원형 받침 밑판 하판',
        price: '380원',
        act: true,

    },
    {
        id: 110,
        type: 'O',
        src: 'https://packagefactory.co.kr/web/product/medium/202206/fdeefe290e182dd942563ddb4d755952.jpg',
        title: '컵 4구 받침 (x 10개)',
        price: '3,500원',
        act: true,

    },
    {
        id: 111,
        type: 'O',
        src: 'https://packagefactory.co.kr/web/product/medium/202212/b9cf2906e7ea42d2a4d99366fa8f77bc.jpg',
        title: '무스 조각케이크 받침 (x 10개)',
        price: '600원',
        act: true,

    },
    {
        id: 112,
        type: 'Pi2',
        src: 'https://packagefactory.co.kr/web/product/medium/202304/69b8dd84c3a14961a24aff9d8e819464.jpg',
        title: '앞열림 높은 조각케이크 상자 레드 (x 10개)',
        price: '5,000원',
        act: true,

    },
    {
        id: 113,
        type: 'Pi2',
        src: 'https://packagefactory.co.kr/web/product/medium/202112/afe8f6327ac2a3c3e2dd2cce4e9e4404.jpg',
        title: '앞열림 높은 조각케이크 상자 옐로우 (x 10개)',
        price: '5,000원',
        act: true,

    },
    {
        id: 114,
        type: 'Pi2',
        src: 'https://packagefactory.co.kr/web/product/medium/201909/959cdc1262289da96e7cda5460eb11f9.jpg',
        title: '앞열림 조각케이크 상자 파스텔핑크 (x 10개)',
        price: '4,000원',
        act: true,

    },
    {
        id: 115,
        type: 'Pi2',
        src: 'https://packagefactory.co.kr/web/product/medium/201909/cafa8581fb43bcf41073b05aa9f25728.jpg',
        title: '앞열림 조각케이크 상자 파스텔민트 (x 10개)',
        price: '4,000원',
        act: true,

    },
    {
        id: 116,
        type: 'Pi2',
        src: 'https://packagefactory.co.kr/web/product/medium/201909/c07cf16f79d6db242487a753e997cc56.jpg',
        title: '허그 조각케이크 상자 (x 10개)',
        price: '4,000원',
        act: true,

    },
    {
        id: 117,
        type: 'Lo',
        src: 'https://packagefactory.co.kr/web/product/medium/202106/a8bbf9acbcd6cb1fb28630e42bc66fbc.jpg',
        title: '리본끈 롤케이크 상자 (x 10개)',
        price: '13,000원',
        act: true,

    },
    {
        id: 118,
        type: 'Lo',
        src: 'https://packagefactory.co.kr/web/product/medium/201708/108_shop1_827576.jpg',
        title: '도지마 롤케이크 상자 대 소 (x 10개)',
        price: '9,500원',
        act: true,

    },
    {
        id: 119,
        type: 'Lo',
        src: 'https://packagefactory.co.kr/web/product/medium/201803/158_shop1_445932.jpg',
        title: '파스텔 도지마 롤케이크 상자 대 소 (x 10개)',
        price: '9,500원',
        act: true,

    },
    {
        id: 120,
        type: 'Lo',
        src: 'https://packagefactory.co.kr/web/product/medium/202110/b03fb61f83a07ca70704c87267e4f63a.jpg',
        title: '아이스 포켓 상자 (x 10개)',
        price: '5,500원',
        act: true,

    },
    {
        id: 121,
        type: 'Pi',
        src: 'https://packagefactory.co.kr/web/product/medium/202104/27ad4998700939b50e4f77452086c1fe.jpg',
        title: '앞열림 파이 상자 화이트',
        price: '800원',
        act: true,

    },
    {
        id: 122,
        type: 'Pi',
        src: 'https://packagefactory.co.kr/web/product/medium/202104/f37a8b94698d1805c206e3452acfc23d.jpg',
        title: '앞열림 파이 상자 사탕수수',
        price: '800원',
        act: true,

    },
    {
        id: 123,
        type: 'Pi',
        src: 'https://packagefactory.co.kr/web/product/medium/202104/0777da4a5d8561f084fa7ed43fc96b4b.jpg',
        title: '앞열림 파이 상자 블랙',
        price: '800원',
        act: true,

    },
    {
        id: 124,
        type: 'Pi',
        src: 'https://packagefactory.co.kr/web/product/medium/201703/63_shop1_750926.jpg',
        title: '파이 타르트 상자 +받침',
        price: '1,000원',
        act: true,

    },
    {
        id: 125,
        type: 'cu4',
        src: 'https://packagefactory.co.kr/web/product/medium/201705/81_shop1_411296.jpg',
        title: '***',
        price: '127,850원',
        act: true,

    },
    {
        id: 126,
        type: 'cu4',
        src: 'https://packagefactory.co.kr/web/product/medium/201705/81_shop1_411296.jpg',
        title: '***',
        price: '2,220,420원',
        act: true,

    },
    {
        id: 127,
        type: 'cu4',
        src: 'https://packagefactory.co.kr/web/product/medium/201705/81_shop1_411296.jpg',
        title: '***',
        price: '4,749,150원',
        act: true,

    },
    {
        id: 128,
        type: 'cu',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/cd0257b9969e883d7fffc8fd054cf78b.jpg',
        title: '하고메케이크 ver.3',
        price: '누드1호',
        act: true,

    },
    {
        id: 129,
        type: 'cu',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/433561771833801106a1760e3c848765.png',
        title: '반달케이크',
        price: '17 x 18 x 9 cm',
        act: true,

    },
    {
        id: 130,
        type: 'cu',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/5378328a3d0442ecbb4d85fadd8b22d7.jpg',
        title: '로즈레',
        price: '쉬폰1,2호',
        act: true,

    },
    {
        id: 131,
        type: 'cu3',
        src: 'https://packagefactory.co.kr/web/product/medium/202305/7971375394ae98f0549470e0fac68f16.jpg',
        title: '스미다 종이가방',
        price: '22 x 19 x 19 cm',
        act: true,

    },
    {
        id: 132,
        type: 'cu3',
        src: 'https://packagefactory.co.kr/web/product/medium/202304/740da182699e2728064f072fa02486fe.jpg',
        title: '진도 대파빵',
        price: '35 x 20 x 6 cm',
        act: true,

    },
    {
        id: 133,
        type: 'cu3',
        src: 'https://packagefactory.co.kr/web/product/medium/202304/b9fd90e9a74f601cc20bf79a54a3d892.jpg',
        title: '피닉스 파크골프',
        price: '6 x 6 x 6 cm',
        act: true,

    },









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