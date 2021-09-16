import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import './assets/css/login.css';
import hystecLogo from './assets/images/SK-hynix_RGB_EN.png';
import checkList from './assets/images/surveylogo_big.png';
import mouse from './assets/images/touch-svgrepo-com.svg';
import action from './reducers/reducer'
function Login() {

    const history = useHistory();
    const dispatch = useDispatch();
    
    const DoLogin = () => {
        let loginID = document.getElementById("loginID").value?? '';
        let loginName = document.getElementById("loginName").value?? '';

        axios.get(`http://166.125.244.71:9999/api/login?emp_id=${loginID}&emp_name=${loginName}`)
        .then((result)=>{
            let verify = result.data[0].cnt;
            if(verify>0){
                //중복 체크 추가해야함
                axios.get(`http://166.125.244.71:9999/api/usedchk?emp_id=${loginID}&emp_name=${loginName}`)
                .then((res)=>{
                    let used = res.data[0].cnt;
                    console.log(used);
                    if(used>0){
                        alert("품평회에 이미 참여하셨습니다.");
                    }else{
                        LoginPrc(loginID,loginName);
                    }
                })
            }else{
                alert("품평회 대상자가 아닙니다.");
            }
        })
    };

    const LoginPrc = (obj1,obj2) => {
        dispatch({type:'login', userInfo : {
            "ID" : obj1,
            "name" : obj2
            }
        })
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
                
                <p>
                    <span>하이지니어와 함께 만드는</span>
                    <span>'22년 New 근무복</span>
                    <span>모바일 품평회</span>
                </p>
            </div>
            <div className="catalogBtnDiv">
                <a href="http://166.125.244.71:9999/api/download" id="docatalogBtn">
                    <span>카탈로그 다운로드</span>
                    <span>(09/16 SkyNet 전사공지된 '카탈로그'와 동일함)</span>
                </a>
                <img src={mouse} alt="mouse"/>
            </div>
            <div className="submitDiv">
                <input id="loginID" type="text" placeholder="사번을 입력하세요" maxLength="7" />
                <input id="loginName" type="text" placeholder="이름을 입력하세요"/>
            </div>
            <div className="loginBtnDiv">
                <button id="doLoginBtn" onClick={DoLogin}>
                    <span>품평회(투표) 참여하기</span>
                </button>
                <img src={mouse} alt="mouse"/>
            </div>
            <div className="subInfoDiv">
                <ol>
                    <li>참여기간 : '21.09.27 ~ 10.03</li>
                    <li>'PC(EGSS)' 또는 '모바일' 중 1회만 참여 가능</li>
                </ol>
            </div>
        </div>
    );
}
export default Login;
