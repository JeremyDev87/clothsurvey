import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../assets/css/sideMenu.css';
import LogOut from '../assets/images/power-off-solid.svg';
import CheckLog from '../assets/images/clipboard-check-solid.svg';

function SideMenu(props) {

    let [menuAuth] = useState(props.state[0].auth);
    return (
        <div className="sideMenu">
                <div className="MenuInfo">
                    <strong>{props.state[0].name}</strong> 님
                    <p>건강 관리 자가 진단</p>
                </div>
                <div className="navList">
                    <ul>
                        {menuAuth==='A'
                        ?<Link to="/list"><li><img src={CheckLog} alt="list"/><span>진단리스트</span></li></Link>
                        :menuAuth==='M'
                            ?<Link to="/adminlist"><li><img src={CheckLog} alt="list"/><span>이상자리스트</span></li></Link>
                            :null
                        }
                        {
                            menuAuth==='M'
                            ?null
                            :<Link to="/check"><li><img src={CheckLog} alt="checkIcon"/><span>자가진단</span></li></Link>
                        }
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
