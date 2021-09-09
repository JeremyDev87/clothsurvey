import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import './assets/css/app.css';

function App(props) {


  const history = useHistory();

  const DoSubmit = () => {
    // console.log("Submit");

    let ans = new Array(3);
    ans[0] = document.getElementsByName("feverRadio1")[0].checked;
    ans[1] = document.getElementsByName("feverRadio2")[0].checked;
    ans[2] = document.getElementsByName("feverRadio3")[0].checked;

    let driverID = props.state[0].driver_id;
    // console.table(ans);
    // console.log(driverID);

    axios.post("http://166.125.244.85:8085/api/submit",{
      "id":driverID,
      "ans":ans
    }).then((result)=>{
      alert("자가진단 등록하였습니다.");
      history.push("./");
    })
    .catch((result)=>{
      alert("자가진단 등록에 실패하였습니다.");
    });

  }

  return (
    <div className="App">
      <div className="contents">
        <div className="ques">
          <span>1) 본인의 몸에 열이 있나요?</span>
          <div className="select">
            <input type="radio" id="select" name="feverRadio1"/><label htmlFor="select">네</label>
            <input type="radio" id="select2" name="feverRadio1" defaultChecked/><label htmlFor="select2">아니오</label>
          </div>
        </div>
        <div className="ques">
          <span>2) 본인에게 코로나19가 의심되는 증상이 있나요?</span>
          <div className="select">
            <input type="radio" id="select3" name="feverRadio2"/><label htmlFor="select3">네</label>
            <input type="radio" id="select4" name="feverRadio2" defaultChecked/><label htmlFor="select4">아니오</label>
          </div>
        </div>
        <div className="ques">
          <span>3) 동거가족 중 현재 자가격리 중인 가족이 있나요?</span>
          <div className="select">
            <input type="radio" id="select5" name="feverRadio3"/><label htmlFor="select5">네</label>
            <input type="radio" id="select6" name="feverRadio3" defaultChecked/><label htmlFor="select6">아니오</label>
          </div>
        </div>
      </div>
      <div className="btnDiv">
        <p className="agreeMsg">
          위와 같이 자가진단을 수행하며 <br/>해당 내용은 방역에 활용됩니다.
        </p>
        <input className="selectSubmit" type="submit" value="자가 진단 제출하기" onClick={DoSubmit} />
      </div>
    </div>
  );
}

function GetStore(state){
  return {
      state : state
  }
}

export default connect(GetStore)(App);
