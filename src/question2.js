import React from 'react';
import './assets/css/question.css';
import {useHistory,useState} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import SampleImg1 from './assets/images/sampleImg1-1.png';
import SampleImg2 from './assets/images/sampleImg1-2.png';
import SampleImg3 from './assets/images/sampleImg1-3.png';


function Question2() {
    
    const history = useHistory();
    const data = useSelector(state=>(state));
    const dispatch = useDispatch();
    let type;

    let beforeAns = data.mainReducer.ans1;

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
    const openClothModal = (gender) => {
        console.log(gender);
        let clothModal = document.getElementById("clothmodal");
        clothModal.style.display="block";
    }
    const closeClothModal = () => {
        let clothModal = document.getElementById("clothmodal");
        clothModal.style.display="none";
    }
    return (
        <div className="question">
            <div className="quesSet">
                <input type="radio" id="question01" name="question"/>
                <label htmlFor="question01">
                    <span>2. 가장선호하는 {type}‘제작디자인&브랜드’는?</span><span>(1개 선택)</span>
                </label>
                {/* <div className="clothImgView">
                    <img src={beforeAns==="1"?SampleImg1:beforeAns==="2"?SampleImg2:SampleImg3} alt="SampleImg" />
                </div> */}
                <div className="genderDiv">
                    <button onClick={()=>{openClothModal("male")}}>남성복 보기</button>
                    <button onClick={()=>{openClothModal("female")}}>여성복 보기</button>
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
            <div className="clothDiv" id="clothmodal">
                <button onClick={closeClothModal}>X</button>
                <img src={beforeAns==="1"?SampleImg1:beforeAns==="2"?SampleImg2:SampleImg3} alt="SampleImg" />
            </div>
        </div>
    );
}


export default Question2;
