import React from 'react';
import './assets/css/question.css';

function Question4(props) {

    return (
        <div className="question">
            <div className="quesSet">
                <input type="radio" id="question01" name="question"/>
                <label htmlFor="question01">
                    <span>New 근무복이 ‘두꺼운(중량) 타입 -단독형’일 경우 가장 원하는 스타일은?</span>
                </label>
                <div className="answer">
                    <input type="radio"id="answer01_1" name="answer01"/>
                    <label htmlFor="answer01_1">바람막이</label>
                    <input type="radio"id="answer01_2" name="answer01"/>
                    <label htmlFor="answer01_2">패딩점퍼</label>
                    <input type="radio"id="answer01_3" name="answer01"/>
                    <label htmlFor="answer01_3">플리스자켓</label>
                </div>
            </div>
            <div className="buttonSet">
                <button>다음</button>
            </div>
        </div>
    );
}


export default Question4;
