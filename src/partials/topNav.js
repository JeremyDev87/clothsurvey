import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import '../assets/css/topNav.css';
import hystecLogo from '../assets/images/hystec_logo.png';
import SideMenu from './sideMenu';

function TopNav(props) {

    const history = useHistory();

    useEffect(()=>{
        // console.table(props);

        if(props.state===undefined){
            alert('로그인이 필요합니다.');
            history.push('./');
        }
    })

    let [menuActive,setMenuActive] = useState(false);

    const MenuOpen = () => {
        menuActive
        ?setMenuActive(false)
        :setMenuActive(true)
        
    }

    return (
        <div className="topNav">
            <div className="topLogoDiv">
                <img src={hystecLogo} alt="hystecLogo" />
                <div className={"menu " + (menuActive?"active":"")} onClick={MenuOpen} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {menuActive?<SideMenu/>:null}
        </div>
    );
}

function GetStore(state){
    return {
        state : state
    }
}

export default connect(GetStore)(TopNav);
