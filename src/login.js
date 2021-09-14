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

        axios.get(`http://172.20.30.219:9998/api/login?emp_id=${loginID}&emp_name=${loginName}`)
        .then((result)=>{
            let verify = result.data[0].cnt;
            if(verify>0){
                //중복 체크 추가해야함
                axios.get(`http://172.20.30.219:9998/api/usedchk?emp_id=${loginID}&emp_name=${loginName}`)
                .then((res)=>{
                    let used = res.data[0].cnt;
                    console.log(used);
                    if(used>0){
                        alert("품평회에 이미 참여하셨습니다.");
                    }else{
                        alert("로그인 성공");
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
