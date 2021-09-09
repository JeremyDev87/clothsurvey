import React from 'react';
import './assets/css/surveyInfo.css';
import InfoImg from './assets/images/sample.png';

function SurveyInfo(props) {

    return (
        <div className="surveyInfo">
            투표방법 기간 등 안내 설명(이미지 삽입 예정)
            <img src={InfoImg} alt="InfoImg" />
        </div>
    );
}


export default SurveyInfo;
