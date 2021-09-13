import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import './assets/css/login.css';
import hystecLogo from './assets/images/SK-hynix_RGB_EN.png';
import checkList from './assets/images/surveylogo_big.png';
import action from './reducers/reducer'
function Login() {

    const history = useHistory();
    const dispatch = useDispatch();
    
    const DoLogin = () => {
        let loginID = document.getElementById("loginID").value?? '';
        let loginName = document.getElementById("loginName").value?? '';

        dispatch({type:'login', userInfo : {
            "ID" : loginID,
            "name" : loginName
            }
        })
        LoginPrc();
        //로그인 verrify check
    }

    const LoginPrc = () => {
        history.push('./surveyinfo');
    };

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
export default Login;
