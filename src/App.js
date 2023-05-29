import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { ItemProvider } from './context';

import Main from './main';
import Footer from './footer';

import Cake from './components/cake';
import Bottom from './components/bottom';
import Pie from './components/pie';
import Macaron from './components/macaron';
import Cookie from './components/cookie';
import Deco from './components/deco';
import Custom from './components/custom';
import Kcea from './components/kcea';


function App() {

  return (
    <>
      <ItemProvider>
        <div className='header'>
          <div className='header_top'>
            <div className='header_area'>
              <a href='#'>
                <img src='https://packagefactory.co.kr/web/upload/romi/top/top_in.png' alt='로그인'></img>
                <img src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#'></img>
              </a>
              <a href='#'>
                <img src='https://packagefactory.co.kr/web/upload/romi/top/top_join.png' alt='회원가입'></img>
                <img src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#'></img>
              </a>
              <a href='#'>
                <img src='https://packagefactory.co.kr/web/upload/romi/top/top_my.png' alt='마이쇼핑'></img>
                <img src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#'></img>
              </a>
              <a href='#'>
                <img src='https://packagefactory.co.kr/web/upload/romi/top/top_cart.png' alt='로그인'></img>
                <img src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#'></img>
              </a>
              <a href='#'>
                <img src='https://packagefactory.co.kr/web/upload/romi/top/top_order.png' alt='로그인'></img>
              </a>
            </div>
            <div className='menu'>
              <ul className='navigation'>
                <li>
                  <a href='#'>
                    <img src='https://packagefactory.co.kr/web/upload/romi/top/menu_book.png'></img>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src='https://packagefactory.co.kr/web/upload/romi/top/menu_cate.png'></img>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src='https://packagefactory.co.kr/web/upload/romi/top/menu_com.png'></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='warp'>
          <div className='header_body'>
            <div className='header_b'>
              <div className='logo'>
                <a href='#'>
                  <img src='https://packagefactory.co.kr/web/upload/romi/top/top_logo.png' alt='로고'></img>
                </a>
              </div>
            </div>
            <form id="form">
              <div className='box'>
                <img src='https://packagefactory.co.kr/web/upload/romi/top/top_sh_title.png' style={{ margin: '0px 10px 0px 10px' }}></img>
                <img src='https://packagefactory.co.kr/web/upload/romi/top/top_sh_btn.png' style={{ float: 'right', width: '14px', textAlign: 'right', cursor: 'pointer', margin: '5px 10px 0px 10px', padding: '0px' }}></img>
                <input class='put' type="text" name="name" />
              </div>
            </form>
            <div className='text'>
              <ul className='xans'>
                <li className='cord'>
                  <img src='https://packagefactory.co.kr/web/upload/adb09b73cdd5cb03e1032bb2334d11fa.png'></img>
                  <img src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#'></img>
                </li>
                <li className='cord'>
                  <img src='https://packagefactory.co.kr/web/upload/635655550472752fa8ac335d2ac2a017.png'></img>
                  <img src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#'></img>
                </li>
                <li className='cord'>
                  <img src='https://packagefactory.co.kr/web/upload/f26feab7a9909a46f823545b45ee1fa2.png'></img>
                  <img src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#'></img>
                </li>
                <li className='cord'>
                  <img src='https://packagefactory.co.kr/web/upload/adb09b73cdd5cb03e1032bb2334d11fa.png'></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='title'>
          <ul className='titlet'>
            <li className='record'>
              <Link to="/components/cake" style={{ textDecoration: 'none', color: 'black' }}>
                <img src="https://packagefactory.co.kr/web/upload/category/7b18f0b301929437a81f66285c0d253d.jpg"></img>
                <img className='i' src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#' style={{ padding: '0px' }}></img>
              </Link>
            </li>
            <li className='record'>
              <Link to="/components/bottom" style={{ textDecoration: 'none', color: 'black' }}>
                <img src="https://packagefactory.co.kr/web/upload/category/shop1_26_menu_215954.jpg"></img>
                <img className='i' src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#' style={{ padding: '0px' }}></img>
              </Link>
            </li>
            <li className='record'>
              <Link to="/components/pie" style={{ textDecoration: 'none', color: 'black' }}>
                <img src="https://packagefactory.co.kr/web/upload/category/shop1_25_menu_452120.png"></img>
                <img className='i' src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#' style={{ padding: '0px' }}></img>
              </Link>
            </li>
            <li className='record'>
              <Link to="/components/macaron" style={{ textDecoration: 'none', color: 'black' }}>
                <img src="https://packagefactory.co.kr/web/upload/category/53694307a7dd899c45becf0e938ec8ef.jpg"></img>
                <img className='i' src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#' style={{ padding: '0px' }}></img>
              </Link>
            </li>
            <li className='record'>
              <Link to="/components/cookie" style={{ textDecoration: 'none', color: 'black' }}>
                <img src="https://packagefactory.co.kr/web/upload/category/083cd65b7fe360325a247209ce76a5a0.jpg"></img>
                <img className='i' src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#' style={{ padding: '0px' }}></img>
              </Link>
            </li>
            <li className='record'>
              <Link to="/components/deco" style={{ textDecoration: 'none', color: 'black' }}>
                <img src="https://packagefactory.co.kr/web/upload/category/shop1_54_menu_928926.jpg"></img>
                <img className='i' src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#' style={{ padding: '0px' }}></img>
              </Link>
            </li>
            <li className='record'>
              <Link to="/components/custom" style={{ textDecoration: 'none', color: 'black' }}>
                <img src="https://packagefactory.co.kr/web/upload/category/shop1_59_menu_453649.jpg"></img>
                <img className='i' src='https://packagefactory.co.kr/web/upload/romi/top/top_bg.png' alt='#' style={{ padding: '0px' }}></img>
              </Link>
            </li>
            <li className='record'>
              <Link to="/components/kcea" style={{ textDecoration: 'none', color: 'black' }}>
                <img src="https://packagefactory.co.kr/web/upload/category/shop1_88_menu_838073.jpg"></img>
              </Link>
            </li>
          </ul>
        </div>
        <Route path="/" exact={true} component={Main}></Route>
        <Route path="/components/cake" component={Cake}></Route>
        <Route path="/components/bottom" component={Bottom}></Route>
        <Route path="/components/pie" component={Pie}></Route>
        <Route path="/components/macaron" component={Macaron}></Route>
        <Route path="/components/cookie" component={Cookie}></Route>
        <Route path="/components/deco" component={Deco}></Route>
        <Route path="/components/custom" component={Custom}></Route>
        <Route path="/components/kcea" component={Kcea}></Route>
        <Footer />
      </ItemProvider>
      {/* 주석처리 */}
    </>
  );
}

export default App;


