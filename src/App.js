import React from 'react';
import {connect} from 'react-redux';
import './assets/css/app.css';
import KolonImg from './assets/images/KolonSample.png';
import NationalImg from './assets/images/NationalSample.png';
import K2Img from './assets/images/K2Sample.png';
import NewBalanceImg from './assets/images/NewBalanceSample.png';
import HazzysImg from './assets/images/HazzysSample.png';
import BlackYarkImg from './assets/images/BlackYarkSample.png';
import NepaImg from './assets/images/NepaSample.png';

function App(props) {

  const spreadAction = (obj) => {
    const questionList = document.getElementById(`quesList${obj}`);
    const answerList = document.getElementById(`ansList${obj}`);
    questionList.classList.toggle("allRadius");
    questionList.classList.toggle("firstRadius");
    answerList.classList.toggle("hidden");
    const arrowSpan = document.getElementById(`bigQ${obj}`);
    if(arrowSpan.innerHTML === "▼"){
      arrowSpan.innerHTML = "▲";
    }else{
      arrowSpan.innerHTML = "▼";
    }
  }

  const questionMap = (obj) => {
    const questionView = document.getElementById(`quesSet${obj}`);
    questionView.classList.toggle("hidden");
  }

  const prevCloth = (obj) => {
    const clothRadio = document.getElementById("clothChkTitle").querySelectorAll("input[type=radio]");
    const clothTitle = document.getElementById("clothChkTitle").querySelectorAll("span");
    const clothImg = document.getElementById("clothImgView").querySelectorAll("img");
    const selectBtn = document.getElementById("ansSuvBtn1");
    
    for(let i=0;i<clothRadio.length;i++){
      if(clothRadio[i].checked){
        if(clothRadio[0].checked){
          clothRadio[0].checked = false;
          clothRadio[clothRadio.length-1].checked = true;
          clothTitle[0].classList.toggle("showing");
          clothTitle[clothRadio.length-1].classList.toggle("showing");
          clothImg[0].classList.toggle("showing");
          clothImg[clothRadio.length-1].classList.toggle("showing");
          selectBtn.innerHTML = clothTitle[clothRadio.length-1].innerHTML+"(으)로 선택";
          break;
        }else{
          clothRadio[i].checked = false;
          clothRadio[i-1].checked = true;
          clothTitle[i].classList.toggle("showing");
          clothTitle[i-1].classList.toggle("showing");
          clothImg[i].classList.toggle("showing");
          clothImg[i-1].classList.toggle("showing");
          selectBtn.innerHTML = clothTitle[i-1].innerHTML+"(으)로 선택";
          break;
        }
      }
    }
  }
  const nextCloth = (obj) => {
    const clothRadio = document.getElementById("clothChkTitle").querySelectorAll("input[type=radio]");;
    const clothTitle = document.getElementById("clothChkTitle").querySelectorAll("span");
    const clothImg = document.getElementById("clothImgView").querySelectorAll("img");
    const selectBtn = document.getElementById("ansSuvBtn1");
    for(let i=0;i<clothRadio.length;i++){
      if(clothRadio[i].checked){
        if(clothRadio[clothRadio.length-1].checked){
          clothRadio[0].checked = true;
          clothRadio[clothRadio.length-1].checked = false;
          clothTitle[0].classList.toggle("showing");
          clothTitle[clothRadio.length-1].classList.toggle("showing");
          clothImg[0].classList.toggle("showing");
          clothImg[clothRadio.length-1].classList.toggle("showing");
          selectBtn.innerHTML = clothTitle[0].innerHTML+"(으)로 선택";
          break;
        }else{
          clothRadio[i].checked = false;
          clothRadio[i+1].checked = true;
          clothTitle[i].classList.toggle("showing");
          clothTitle[i+1].classList.toggle("showing");
          clothImg[i].classList.toggle("showing");
          clothImg[i+1].classList.toggle("showing");
          selectBtn.innerHTML = clothTitle[i+1].innerHTML+"(으)로 선택";
          break;
        }
      }
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="q_main allRadius" id="quesList1" onClick={()=>{spreadAction(1)}}>
          <label htmlFor="bigQ1">New 근무복이 ‘두꺼운(중량) 타입 -단독형’일 경우 가장 원하는 스타일은?</label>
          <span id="bigQ1">▼</span>
        </div>
        <div className="a_main hidden" id="ansList1">
          <input type="radio" id="ansID1_1" name="ans_1" onClick={()=>{questionMap(11)}}/>
          <label htmlFor="ansID1_1">1. 바람막이</label>
          <input type="radio" id="ansID1_2" name="ans_1" />
          <label htmlFor="ansID1_2">2. 패딩점퍼</label>
          <input type="radio" id="ansID1_3" name="ans_1" />
          <label htmlFor="ansID1_3" className="lastRadius">3. 플리스자켓</label>
        </div>
        <section id="quesSet11" className="hidden">
          <div className="q_suv allRadius" id="quesList11" onClick={()=>{spreadAction(11)}}>
            <label htmlFor="suvQ1_1">가장선호하는 바람막이 ‘제작디자인&브랜드’는?</label>
            <span id="bigQ11">▼</span>
          </div>
          <div className="a_suv hidden" id="ansList11">
            <div className="clothTitleDiv">
              <div className="prevnext" onClick={prevCloth}>
                <span>←</span>
              </div>
              <div id="clothChkTitle">
                <input type="radio" id="KolonChk" name="clothChk" defaultChecked/>
                <label htmlFor="KolonChk">
                  <span className="titleView showing">코오롱스포츠</span>
                </label>
                <input type="radio" id="NationalChk" name="clothChk" />
                <label htmlFor="NationalChk">
                  <span className="titleView">내셔널지오그라피</span>
                </label>
                <input type="radio" id="K2Chk" name="clothChk" />
                <label htmlFor="K2Chk">
                  <span className="titleView">K2</span>
                </label>
                <input type="radio" id="NewBalanceChk" name="clothChk"/>
                <label htmlFor="NewBalanceChk">
                  <span className="titleView">뉴발란스</span>
                </label>
                <input type="radio" id="HazzysChk" name="clothChk"/>
                <label htmlFor="HazzysChk">
                  <span className="titleView">헤지스</span>
                </label>
                <input type="radio" id="BlackYarkChk" name="clothChk" />
                <label htmlFor="BlackYarkChk">
                  <span className="titleView">블랙야크</span>
                </label>
                <input type="radio" id="NepaChk" name="clothChk"/>
                <label htmlFor="NepaChk">
                  <span className="titleView">네파</span>
                </label>
              </div>
              <div className="prevnext" onClick={nextCloth}>
                <span>→</span>
              </div>
            </div>
            <div id="clothImgView">
              <img className ="imgView showing" src={KolonImg} alt="KolonImg" />
              <img className ="imgView" src={NationalImg} alt="NationalImg" />
              <img className ="imgView" src={K2Img} alt="K2Img" />
              <img className ="imgView" src={NewBalanceImg} alt="NewBalanceImg" />
              <img className ="imgView" src={HazzysImg} alt="HazzysImg" />
              <img className ="imgView" src={BlackYarkImg} alt="BlackYarkImg" />
              <img className ="imgView" src={NepaImg} alt="NepaImg" />
            </div>
            <button className="suvSelBtn" id="ansSuvBtn1">선택</button>
          </div>
        </section>
        <div className="q_main allRadius" id="quesList2" onClick={()=>{spreadAction(2)}}>
          <label htmlFor="bigQ2">New 근무복이 ‘가벼운(경량) 타입 : 2개 1세트’일 경우 가장 원하는 세트 구성은?  </label>
          <span id="bigQ2">▼</span>
        </div>
        <div className="a_main hidden" id="ansList2">
          <input type="radio" id="ansID2_1" name="ans_2" />
          <label htmlFor="ansID2_1">1. 바람막이</label>
          <input type="radio" id="ansID2_2" name="ans_2" />
          <label htmlFor="ansID2_2">2. 패딩점퍼</label>
          <input type="radio" id="ansID2_3" name="ans_2" />
          <label htmlFor="ansID2_3" className="lastRadius">3. 플리스자켓</label>
        </div>
      </div>
    </div>
  );
}

function GetStore(state){
  return {
      state : state
  }
}

export default connect(GetStore)(App);
