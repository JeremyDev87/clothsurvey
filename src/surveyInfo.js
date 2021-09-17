import React from 'react';
import {Link} from 'react-router-dom';
import './assets/css/surveyInfo.css';
import InfoImg from './assets/images/sample.png';

function SurveyInfo(props) {


    return (
        <div className="surveyInfo">
            투표방법 기간 등 안내 설명(이미지 삽입 예정)
            <img src={InfoImg} alt="InfoImg" />
            <Link to="/question">품평회(투표) 참여하기</Link>
        </div>
    );
}


export default SurveyInfo;
