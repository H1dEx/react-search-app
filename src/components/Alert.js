import React, {useContext} from 'react';
import {AlertContext} from "../context/alert/AlertContext";

const Alert = () => {
    const {alert, hide} = useContext(AlertContext)
    if (!alert) return null
    return (
        <div className={`alert alert-${alert.type || 'info'} alert-dismissible`}>
            <button type="button" className="close" onClick={hide}>×</button>
            <strong>Warning!</strong> {alert.text}
        </div>
    );
};

export default Alert;