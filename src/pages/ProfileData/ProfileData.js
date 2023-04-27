import React, { useEffect, useState } from "react";
import "./PropfileData.css";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { getuserData } from "../../ServerAPI/UserDataAPI";
import UserEventData from "./UserEventData/UserEventData";
import userImage from "./img/profile.png";
import graf from "./img/graf.png";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

export default function ProfileData() {
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    getuserData().then((listsEvents) => setUserEvents(listsEvents.data));
    console.log("ProfileData");
  }, []);

  return (
    <div className="page profilePage">
      <div className="cardProfile">
        <div className="userSection">
      <ButtonBack/>
          <ManageAccountsIcon fontSize="large" className="icon"/>
          <h4>אזור אישי</h4>
        </div>
        <div className="box-divs">
          <div className="userDetails">
            <img src={userImage} />
            <div>
              <h3>שם משתמש: <span>{localStorage.getItem("userName")}</span></h3>
              <h3>סוג משתמש: <span>{userEvents[0] ? "מנהל" : "רגיל"}</span></h3>
              <h3> סטטוס:<span>פעיל</span> </h3>
              <h3> מספר מופעים שפעילים: <span>{userEvents.length}</span></h3>
              <h3> סכום הכנסות: <span>{10} </span></h3>
            </div>
            <div>
              <img  src={graf}/>
            </div>
          </div>
          <div>
            <div className="eventDataSection">
              <h3>ארועים פעילים</h3>
            </div>
            <div className="listsEvents">
              {userEvents.map((eventData) => (
                <UserEventData eventData={eventData} key={eventData._id}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
