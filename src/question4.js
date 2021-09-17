import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './assets/css/question.css';
import './assets/css/modal.css';
import doubleSample from './assets/images/doubleSample.jpg';
import SampleImg2 from './assets/images/sampleImg2-2.png';

function Question4() {
    
    const history = useHistory();
    const data = useSelector(state=>(state));
    const dispatch = useDispatch();
    let [viewSample,setViewSample] = useState('male');

    let beforeAns = data.mainReducer.ans3;
    let type;
    if(beforeAns==="1"){
        type="경량 패딩+경량 플리스";
    }else if(beforeAns==="2"){
        type="경량 플리스+경량 후드집업";
    }else{
        type="경량 후드집업+경량 패딩";
    }

    const doSubmitBtn = () => {
        let select = document.querySelector('input[name="answer01"]:checked');
        if(select!==null){
            let ans = select.value; 
            dispatch({type:'ans4',ans : ans});

            axios.post("http://166.125.244.71:9999/api/submit",{
                "emp_id":data.mainReducer.userInfo.ID,
                "emp_name":data.mainReducer.userInfo.name,
                "ans1":data.mainReducer.ans1,
                "ans2":data.mainReducer.ans2,
                "ans3":data.mainReducer.ans3,
                "ans4":ans
            }).then((result)=>{
                // alert("품평회를 완료하였습니다.");
                let modal = document.getElementById("modal");
                modal.style.display="flex";
                console.log(modal);
                // history.push("./");
            })
            .catch((result)=>{
                alert("품평 등록에 실패하였습니다.");
            });

            }else{
                alert("1개의 항목을 선택해주시기 바랍니다.");
            }
        }

        const doEnd = () => {
            history.push("./");
        }
        const openClothModal = (gender) => {
            let clothModal = document.getElementById("clothmodal");
            setViewSample(gender);
            clothModal.style.display="block";
        }
    
    return (
        <div className="question">
            <div className="quesSet">
                <input type="radio" id="question01" name="question"/>
                <label htmlFor="question01">
                    <span>4. 가장선호하는 세트구성1({type})‘제작디자인&브랜드’는?</span><span>(1개 선택)</span>
                </label>
                <div className="answer">
                    <input type="radio"id="answer01_1" name="answer01" value="1"/>
                    {
                        beforeAns!=="1"
                        ?null
                        :<label htmlFor="answer01_1">내셔널지오그래픽</label>
                    }
                    <input type="radio"id="answer01_2" name="answer01" value="2"/>
                    <label htmlFor="answer01_2">네파</label>
                    <input type="radio"id="answer01_3" name="answer01" value="3"/>
                    {
                        beforeAns==="1"
                        ?null
                        :<label htmlFor="answer01_3">뉴발란스</label>
                    }
                    <input type="radio"id="answer01_4" name="answer01" value="4"/>
                    <label htmlFor="answer01_4">블랙야크</label>
                    <input type="radio"id="answer01_5" name="answer01" value="5"/>
                    <label htmlFor="answer01_5">K2</label>
                    <input type="radio"id="answer01_6" name="answer01" value="6"/>
                    {
                        beforeAns!=="1"
                        ?null
                        :<label htmlFor="answer01_6">코오롱스포츠</label>
                    }
                    <input type="radio"id="answer01_7" name="answer01" value="7"/>
                    <label htmlFor="answer01_7">헤지스</label>
                </div>
            </div>
            <div className="buttonSet">
                <button onClick={doSubmitBtn}>제출</button>
            </div>
            <div className="completeDiv" id="modal">
                <span>제출 완료</span>
                <span>온라인 품평회에 <br/>참여해 주셔서 감사합니다.</span>
                <span>최종 투표 결과는 <br/>10월초에 별도 공지 예정입니다.</span>
                <button onClick={doEnd}>나가기</button>
            </div>
            <div className="genderDiv">
                <button onClick={()=>{openClothModal("male")}}><b>남성</b> 근무복 디자인 보기</button>
                <button onClick={()=>{openClothModal("female")}}><b>여성</b> 근무복 디자인 보기</button>
            </div>
            <div className="clothDiv" id="clothmodal">
                <img src={viewSample==='male'?doubleSample:SampleImg2} alt="SampleImg" />
            </div>
        </div>
    );
}

export default Question4;