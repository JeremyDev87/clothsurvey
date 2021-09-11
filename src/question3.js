import React from 'react';
import './assets/css/question.css';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

function Question3(props) {

    const history = useHistory();
    
    console.log(props.state[0]);

    const doNextBtn = () => {
        let ans = document.querySelector('input[name="answer01"]:checked').value; 
        props.dispatch({type:'ans3',ans : ans});
        history.push('./question4');
    }

    return (
        <div className="question">
            <div className="quesSet">
                <input type="radio" id="question01" name="question"/>
                <label htmlFor="question01">
                    <span>New 근무복이 ‘가벼운(경량) 타입 : 2개 1세트’일 경우 가장 원하는 세트 구성은?  </span>
                </label>
                <div className="answer">
                    <input type="radio"id="answer01_1" name="answer01" value="1"/>
                    <label htmlFor="answer01_1">경량 패딩 + 경량 플리스</label>
                    <input type="radio"id="answer01_2" name="answer01" value="2"/>
                    <label htmlFor="answer01_2">경량 플리스 + 경량 후드집업</label>
                    <input type="radio"id="answer01_3" name="answer01" value="3"/>
                    <label htmlFor="answer01_3">경량 후드집업 + 경량 패딩</label>
                </div>
            </div>
            <div className="buttonSet">
                <button onClick={doNextBtn}>다음</button>
            </div>
        </div>
    );
}


function GetStore(state){
    return {
        state : state
    }
}

export default connect(GetStore)(Question3);

