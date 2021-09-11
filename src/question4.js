import React from 'react';
import './assets/css/question.css';
import SampleImg from './assets/images/K2Sample.png'
import {connect} from 'react-redux';

function Question4(props) {

    console.log(props.state[0]);
    let beforeAns = props.state[0].ans3;
    let type="Error";

    if(beforeAns===1){
        type="경량 패딩+경량 플리스";
    }else if(beforeAns===2){
        type="경량 플리스+경량 후드집업";
    }else{
        type="경량 후드집업+경량 패딩";
    }

    const doSubmitBtn = () => {
        let ans = document.querySelector('input[name="answer01"]:checked').value; 
        props.dispatch({type:'ans4',ans : ans});
        alert("submit");
    }

    return (
        <div className="question">
            <div className="quesSet">
                <input type="radio" id="question01" name="question"/>
                <label htmlFor="question01">
                    <span>가장선호하는 세트구성1({type})‘제작디자인&브랜드’는?</span>
                </label>
                <div className="clothImgView">
                    <img src={SampleImg} alt="SampleImg" />
                </div>
                <div className="answer">
                    <input type="radio"id="answer01_1" name="answer01" value="1"/>
                    <label htmlFor="answer01_1">코오롱스포츠</label>
                    <input type="radio"id="answer01_2" name="answer01" value="2"/>
                    <label htmlFor="answer01_2">내셔널지오그래픽</label>
                    <input type="radio"id="answer01_3" name="answer01" value="3"/>
                    <label htmlFor="answer01_3">K2</label>
                    <input type="radio"id="answer01_4" name="answer01" value="4"/>
                    <label htmlFor="answer01_4">뉴발란스</label>
                    <input type="radio"id="answer01_5" name="answer01" value="5"/>
                    <label htmlFor="answer01_5">헤지스</label>
                    <input type="radio"id="answer01_6" name="answer01" value="6"/>
                    <label htmlFor="answer01_6">블랙야크</label>
                    <input type="radio"id="answer01_7" name="answer01" value="7"/>
                    <label htmlFor="answer01_7">네파</label>
                </div>
            </div>
            <div className="buttonSet">
                <button onClick={doSubmitBtn}>제출</button>
            </div>
        </div>
    );
}

function GetStore(state){
    return {
        state : state
    }
}

export default connect(GetStore)(Question4);