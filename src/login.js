import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import './assets/css/login.css';
import hystecLogo from './assets/images/SK-hynix_RGB_EN.png';
import checkList from './assets/images/surveylogo_big.png';

function Login(props) {

    const history = useHistory();

    const DoLogin = () => {
        let loginID = document.getElementById("loginID").value?? '';
        let loginName = document.getElementById("loginName").value?? '';
        LoginPrc(loginID,loginName);
        //로그인 verrify check
    }

    const LoginPrc = (obj1,obj2) => {
        props.dispatch({type:'login',userInfo : {
            "ID" : obj1,
            "name" : obj2,
            "ans1" : "0",
            "ans2" : "0",
            "ans3" : "0",
            "ans4" : "0"
        }});
        history.push('./surveyinfo');
    }

    return (
        <div className="login">
            <div className="topLogoDiv">
                <img src={hystecLogo} alt="hystecLogo"/>
            </div>
            <div className="contentsDiv">
                <img src={checkList} alt="checkList" />
            </div>
            <div className="logoTitle">
                <p><span>'22년 New 근무복</span><br/>모바일 품평회</p>
            </div>
            <div className="submitDiv">
                <input id="loginID" type="text" placeholder="사번을 입력하세요" maxLength="7" />
                <input id="loginName" type="text" placeholder="이름을 입력하세요"/>
            </div>
            <div className="loginBtnDiv">
                <input id="doLoginBtn" type="submit" value="품평회 하기" onClick={DoLogin} />
            </div>
        </div>
    );
}

function GetStore(state){
    return {
        state : state
    }
}

export default connect(GetStore)(Login);
