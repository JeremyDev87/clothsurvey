import React,{useState,useRef} from 'react';
import './assets/css/question.css';
import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import SingleMale1 from './assets/images/singlemale1.jpg';
import SingleFemale1 from './assets/images/singlefemale1.jpg';
import SingleMale2 from './assets/images/singlemale2.jpg';
import SingleFemale2 from './assets/images/singlefemale2.jpg';
import SingleMale3 from './assets/images/singlemale3.jpg';
import SingleFemale3 from './assets/images/singlefemale3.jpg';
import direction from './assets/images/arrow-alt-circle-down-regular.svg';


function Question2() {
    
    const history = useHistory();
    const data = useSelector(state=>(state));
    const dispatch = useDispatch();
    const scrollRef = useRef();

    let type;

    let beforeAns = data.mainReducer.ans1;
    let [viewSample,setViewSample] = useState('male');

    if(beforeAns==="1"){
        type="바람막이재킷";
    }else if(beforeAns==="2"){
        type="다운패딩점퍼";
    }else{
        type="플리스재킷";
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
        setViewSample(gender,beforeAns);
        let clothModal = document.getElementById("clothmodal");
        let directionImg = document.getElementById("directionImg");
        clothModal.style.display="block";
        directionImg.style.display="none";
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }

    return (
        <div className="question">
            <div className="quesSet">
                <input type="radio" id="question01" name="question"/>
                <label htmlFor="question01">
                    <span>1-1. 아래 '{type}' 중 가장 마음에 드는 ‘New 근무복 제작디자인&브랜드’는?</span><span>(1개만 선택)</span>
                </label>
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
            <div className="directionDiv">
                <img src={direction} alt="direction" id="directionImg"/>
            </div>
            <div className="genderDiv">
                <button id="maleBtn" onClick={()=>{openClothModal("male")}}><span><b>남성</b> 근무복 디자인 보기</span></button>
                <button id="femaleBtn" onClick={()=>{openClothModal("female")}}><span><b>여성</b> 근무복 디자인 보기</span></button>
            </div>
            <div className="clothDiv" id="clothmodal" ref={scrollRef}>
                <img src={
                    beforeAns==="1"
                    ?viewSample==='male'
                        ?SingleMale1
                        :SingleFemale1
                    :beforeAns==="2"
                        ?viewSample==='male'
                            ?SingleMale2
                            :SingleFemale2
                    :viewSample==='male'
                        ?SingleMale3
                        :SingleFemale3
                    } alt="SampleImg" />
            </div>
        </div>
    );
}


export default Question2;