import React from 'react';
import './assets/css/question.css';
import {useHistory} from 'react-router-dom';
import SampleImg from './assets/images/K2Sample.png'

function Question2(props) {
    
    const history = useHistory();

    const doNextBtn = () => {
        history.push('./question3');
    }

    return (
        <div className="question">
            <div className="quesSet">
                <input type="radio" id="question01" name="question"/>
                <label htmlFor="question01">
                    <span>가장선호하는 바람막이‘제작디자인&브랜드’는?</span>
                </label>
                <div className="clothImgView">
                    <img src={SampleImg} alt="SampleImg" />
                </div>
                <div className="answer">
                    <input type="radio"id="answer01_1" name="answer01"/>
                    <label htmlFor="answer01_1">코오롱스포츠</label>
                    <input type="radio"id="answer01_3" name="answer01"/>
                    <label htmlFor="answer01_3">K2</label>
                    <input type="radio"id="answer01_4" name="answer01"/>
                    <label htmlFor="answer01_4">뉴발란스</label>
                    <input type="radio"id="answer01_5" name="answer01"/>
                    <label htmlFor="answer01_5">헤지스</label>
                    <input type="radio"id="answer01_6" name="answer01"/>
                    <label htmlFor="answer01_6">블랙야크</label>
                    <input type="radio"id="answer01_7" name="answer01"/>
                    <label htmlFor="answer01_7">네파</label>
                </div>
            </div>
            <div className="buttonSet">
                <button onClick={doNextBtn}>다음</button>
            </div>
        </div>
    );
}


export default Question2;
