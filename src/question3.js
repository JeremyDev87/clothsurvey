import React from 'react';
import './assets/css/question.css';
import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';

function Question3() {

    const history = useHistory();
    const data = useSelector(state=>(state));
    const dispatch = useDispatch();

    const doNextBtn = () => {
        let select = document.querySelector('input[name="answer01"]:checked');
        if(select!==null){
            let ans = select.value; 
            dispatch({type:'ans3',ans : ans});
            history.push('./question4');
        }else{
            alert("1개의 항목을 선택해주시기 바랍니다.");
        }
    }

    return (
        <div className="question">
            <div className="quesSet">
                <input type="radio" id="question01" name="question"/>
                <label htmlFor="question01">
                    <span>3. New 근무복이 ‘가벼운(경량) 타입 : 2개 1세트’일 경우 가장 원하는 세트 구성은?</span><span>(1개 선택)</span>
                </label>
                <div className="answer">
                    <input type="radio"id="answer01_1" name="answer01" value="1"/>
                    <label htmlFor="answer01_1"><span>세트구성1</span><span>(경량 패딩점퍼 + 경량 플리스재킷)</span></label>
                    <input type="radio"id="answer01_2" name="answer01" value="2"/>
                    <label htmlFor="answer01_2"><span>세트구성2</span><span>(경량 플리스재킷 + 경량 후드집업)</span></label>
                    <input type="radio"id="answer01_3" name="answer01" value="3"/>
                    <label htmlFor="answer01_3"><span>세트구성3</span><span>(경량 후드집업 + 경량 패딩점퍼)</span></label>
                </div>
            </div>
            <div className="buttonSet">
                <button onClick={doNextBtn}>다음</button>
            </div>
        </div>
    );
}


export default Question3;

