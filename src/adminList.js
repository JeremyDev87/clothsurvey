import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './assets/css/adminList.css';
import imgPhone from './assets/images/phone-alt-solid.svg'

function AdminList(props) {
    // console.table(props);
    const history = useHistory();
    let [partner_id,setPartner_id] = useState();
    let [partner_name,setPartner_name] = useState();
    
    useEffect(() => {
        if(props.state===undefined){
            history.push('./');
        }else{
            setPartner_id(props.state[0].ID);
            setPartner_name(props.state[0].name);
            // document.getElementById("partnerName").innerHTML=props.state[0].name;
        }
        ListCall(partner_id);
    },[props.state,history, partner_id, partner_name])

    const ListCall = () => {
        axios.get(`http://166.125.244.85:8085/api/master/list`)
        .then((result)=> {
            let rows = result.data;

            for(let i=0;i<rows.length;i++){
                let htmList ="";
                if(rows[i].DT===null ||rows[i].DT===undefined){
                    rows[i].DT="기록없음"
                }
                htmList +=`<td style="width:30%"><span>${rows[i].DT}</span></td>`;
                htmList +=`<td style=""width20%><span>${rows[i].NAME}</span></td>`;
                if(rows[i].ANSWER===0){
                    htmList +=`<td style="width30%"><span>이상없음</span></td>`;
                }else if(rows[i].ANSWER===1){
                    htmList +=`<td><span style="color:orange;width:30%;">진단필요</span></td>`;
                }else{
                    htmList +=`<td><span style="color:red;width:30%;">이상있음</span></td>`;
                }
                htmList +=`<td  style="width:20%;"><a href='tel:${rows[i].PHONE}'><img src=${imgPhone} className='phoneImg' alt='phoneCall'/></a></td>`;
                let tr = document.createElement('tr');
                tr.innerHTML = htmList;
                document.getElementById("driverList").appendChild(tr);
            }
        }).catch(()=>{
            console.log("error");
        })
    }

    return (
        <div className="adminList">
            <h1 id="partnerName">{partner_name}</h1>
            <h6>진단 결과 리스트(최근 12시간 내 결과/미이행,이상자만)</h6>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>일시</th>
                            <th>이름</th>
                            <th>진단</th>
                            <th>전화</th>
                        </tr>
                    </thead>
                    <tbody id="driverList">
                    </tbody>
                </table>
            </section>
        </div>
    );
}

function GetStore(state){
    return {
        state : state
    }
}

export default connect(GetStore)(AdminList);

