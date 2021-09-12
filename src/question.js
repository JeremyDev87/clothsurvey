import React from 'react';
import './assets/css/question.css';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

function Question(props) {
    
    const history = useHistory();
    // console.log(props.state[0]);
    
    const doNextBtn = () => {
        let select = document.querySelector('input[name="answer01"]:checked');
        if(select!==null){
            let ans = select.value; 
            props.dispatch({type:'ans1',ans : ans});
            history.push('./question2');
        }else{
            alert("1개의 항목을 선택해주시기 바랍니다.");
        }
    }

    return (
        <div className="question">
            <div className="quesSet">
                <input type="checkbox" id="question01" name="question"/>
                <label htmlFor="question01">
                    <span>New 근무복이 ‘두꺼운(중량) 타입 -단독형’일 경우 가장 원하는 스타일은?</span>
                </label>
                <div className="answer">
                    <input type="radio"id="answer01_1" name="answer01" value="1"/>
                    <label htmlFor="answer01_1">바람막이</label>
                    <input type="radio"id="answer01_2" name="answer01" value="2"/>
                    <label htmlFor="answer01_2">패딩점퍼</label>
                    <input type="radio"id="answer01_3" name="answer01" value="3"/>
                    <label htmlFor="answer01_3">플리스자켓</label>
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

export default connect(GetStore)(Question);
