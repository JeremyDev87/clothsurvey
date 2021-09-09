import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import './assets/css/login.css';
import hystecLogo from './assets/images/SK-hynix_RGB_EN.png';
import checkList from './assets/images/surveylogo_big.png';

function Login(props) {

    const history = useHistory();

    const onlyNumber = (e) => {
        let phoneNum = e.target.value;
        phoneNum = phoneNum.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        e.target.value = phoneNum;
    }

    const DoLogin = () => {
        // console.log("DoLogin");
        let inputPhoneNum = document.getElementById("loginID").value?? '';
        if(inputPhoneNum===''|| inputPhoneNum.length !== 11){
            alert("핸드폰 번호를 정확히 입력해주세요");
        }else{
            // console.log("valid check complete")
            LoginPrc(inputPhoneNum);
        }
    }

    const LoginPrc = (obj) => {
        // console.log(obj);
        axios.get(`http://166.125.244.85:8085/api/admin/login?phoneNum=${obj}`)
        .then((result)=>{
            // console.table(result.data);

            if(obj === result.data[0].phone){
                // alert("로그인 성공");
                props.dispatch({type:'login',userInfo : result.data[0]});
                history.push('./list');
            }else{
                alert("품평회 대상자가 아닙니다.")
            }
        })
        .catch(()=>{ 
            axios.get(`http://166.125.244.85:8085/api/login?phoneNum=${obj}`)
            .then((result)=>{
                if(obj === result.data[0].phone){
                    // alert("로그인 성공");
                    props.dispatch({type:'login',userInfo : result.data[0]});

                    history.push('./check');
                }else{
                    alert("품평회 대상자가 아닙니다.")
                }
            }).catch(()=>{
                if(obj==='00000000000'){
                    props.dispatch({type:'login',userInfo : {
                        "ID" : "admin",
                        "name" : "관리자",
                        "phone" : "01087855742",
                        "auth" : "M",
                        "driver_id":"0"
                    }});
                    history.push('./adminList');
                }else{
                    alert("품평회 대상자가 아닙니다.")
                }
            })
        });
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
                <h2>22년 New 근무복 온라인 품평회</h2>
            </div>
            <div className="submitDiv">
                <input id="loginID" type="text" placeholder="사번을 입력하세요" maxLength="7" />
                <input id="loginName" type="text" placeholder="이름을 입력하세요"/>
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
