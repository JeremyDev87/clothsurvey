import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './assets/css/question.css';
import SampleImg1 from './assets/images/sampleImg2-1.png';
import SampleImg2 from './assets/images/sampleImg2-2.png';
import SampleImg3 from './assets/images/sampleImg2-3.png';

function Question4() {
    
    const history = useHistory();
    const data = useSelector(state=>(state));
    const dispatch = useDispatch();

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

            axios.post("http://172.20.30.219:9998/api/submit",{
                "emp_id":data.mainReducer.userInfo.ID,
                "emp_name":data.mainReducer.userInfo.name,
                "ans1":data.mainReducer.ans1,
                "ans2":data.mainReducer.ans2,
                "ans3":data.mainReducer.ans3,
                "ans4":ans
            }).then((result)=>{
                alert("품평회를 완료하였습니다.");
                history.push("./");
            })
            .catch((result)=>{
                alert("품평 등록에 실패하였습니다.");
            });

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
                <img src={beforeAns==="1"?SampleImg1:beforeAns==="2"?SampleImg2:SampleImg3} alt="SampleImg" />
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
                <button onClick={doSubmitBtn}>제출</button>
            </div>
        </div>
    );
}

export default Question4;