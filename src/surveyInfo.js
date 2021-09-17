import React from 'react';
import {Link} from 'react-router-dom';
import './assets/css/surveyInfo.css';
import mainInfo from './assets/images/maininfo.jpg';

function SurveyInfo(props) {
    return (
        <div className="surveyInfo">
            <img src={mainInfo} alt="mainInfo" />
            <Link to="/question">품평회(투표) 참여하기</Link>
        </div>
    );
}


export default SurveyInfo;
