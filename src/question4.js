import React from 'react';
import './assets/css/question.css';
import SampleImg from './assets/images/K2Sample.png'
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Question4() {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const data = useSelector(state=>({
        ans3: state.ans3,
    }));

    console.log(data);

    
    let beforeAns = data.ans3;
    let type;

    if(beforeAns===1){
        type="경량 패딩+경량 플리스";
    }else if(beforeAns===2){
        type="경량 플리스+경량 후드집업";
    }else{
        type="경량 후드집업+경량 패딩";
    }

    const doSubmitBtn = () => {
        let select = document.querySelector('input[name="answer01"]:checked');
        if(select!==null){
            let ans = select.value; 
            dispatch({type:'ans4',ans : ans});
            alert("submit");
            history.push('./');
        }else{
            alert("1개의 항목을 선택해주시기 바랍니다.");
        }
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

export default Question4;