import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default function NumEmpleado()
{
    return(
        <div className="panelNumAlerReci">
            <FontAwesomeIcon icon={faExclamationTriangle} size="3x" color="#8F2A92" />
            <p className = "tituloAlerReci">Alertas en 2020</p>
            <p className = "valorAlerReci">131</p>
        </div>
    );
}