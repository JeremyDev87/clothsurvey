import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../assets/css/sideMenu.css';
import LogOut from '../assets/images/power-off-solid.svg';
import CheckLog from '../assets/images/clipboard-check-solid.svg';
import Info from '../assets/images/info-circle-solid.svg';
import Book from '../assets/images/book-solid.svg';

function SideMenu(props) {

    // let [menuAuth] = useState(props.state[0].auth);
    return (
        <div className="sideMenu">
                <div className="MenuInfo">
                    {/* <strong>{props.state[0].name}</strong> 님 */}
                    <p>근무복 품평회</p>
                </div>
                <div className="navList">
                    <ul>
                        <Link to="/surveyinfo"><li><img src={Info} alt="info"/><span>품평회란?</span></li></Link>
                        <Link to="/question"><li><img src={CheckLog} alt="checkIcon"/><span>품평회하기</span></li></Link>
                        <li><img src={Book} alt="book"/><span>카탈로그보기</span></li>
                        <Link to="/"><li><img src={LogOut} alt="logOutIcon"/><span>로그아웃</span></li></Link>
                    </ul>
                </div>
        </div>
    );
}

function GetStore(state){
    return {
        state : state
    }
}

export default connect(GetStore)(SideMenu);
