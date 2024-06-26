import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications (){
    return (
    <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} 
            style={{ color: 'red'}}></li>
        </ul>
        <button aria-label="Close" style={{ position: 'absolute', right: '16px', top:"16px", cursor: 'pointer', border: 0}} onClick={() => console.log('Close button has been clicked')}>
            <img src={closeIcon} alt="icon" style={{ width: '8px', height: '8px'}} />
        </button>
    </div>
    );
}
export default Notifications;
