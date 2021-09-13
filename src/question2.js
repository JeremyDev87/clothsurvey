import React from 'react';
import './assets/css/question.css';
import {useHistory,useState} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import SampleImg from './assets/images/K2Sample.png'


function Question2() {
    
    const history = useHistory();
    const data = useSelector(state=>(state));
    const dispatch = useDispatch();

    let beforeAns = data.mainReducer.ans1;
    let type;

    if(beforeAns==="1"){
        type="바람막이";
    }else if(beforeAns==="2"){
        type="패딩점퍼";
    }else{
        type="플리스자켓";
    }

    const doNextBtn = () => {
        let select = document.querySelector('input[name="answer01"]:checked');
        if(select!==null){
            let ans = select.value; 
            dispatch({type:'ans2',ans : ans});
            history.push('./question3');
        }else{
            alert("1개의 항목을 선택해주시기 바랍니다.");
        }
    }

    return (
        <div className="question">
            <div className="quesSet">
                <input type="radio" id="question01" name="question"/>
                <label htmlFor="question01">
                    <span>가장선호하는 {type}‘제작디자인&브랜드’는?</span>
                </label>
                <div className="clothImgView">
                    <img src={SampleImg} alt="SampleImg" />
                </div>
                <div className="answer">
                    <input type="radio"id="answer01_1" name="answer01" value="1"/>
                    <label htmlFor="answer01_1">내셔널지오그래픽</label>
                    <input type="radio"id="answer01_2" name="answer01" value="2"/>
                    <label htmlFor="answer01_2">네파</label>
                    <input type="radio"id="answer01_3" name="answer01" value="3"/>
                    <label htmlFor="answer01_3">뉴발란스</label>
                    <input type="radio"id="answer01_4" name="answer01" value="4"/>
                    <label htmlFor="answer01_4">블랙야크</label>
                    <input type="radio"id="answer01_5" name="answer01" value="5"/>
                    <label htmlFor="answer01_5">K2</label>
                    <input type="radio"id="answer01_6" name="answer01" value="6"/>
                    <label htmlFor="answer01_6">코오롱스포츠</label>
                    <input type="radio"id="answer01_7" name="answer01" value="7"/>
                    <label htmlFor="answer01_7">헤지스</label>
                </div>
            </div>
            <div className="buttonSet">
                <button onClick={doNextBtn}>다음</button>
            </div>
        </div>
    );
}


export default Question2;
