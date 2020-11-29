import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function NumEmpleado()
{
    return(
        <div className="panelNumEmple">

            <FontAwesomeIcon icon={faUser} size="3x" color="#8F2A92" />
            <p className = "tituloAlerReci">Empleados</p>
            <p className = "valorAlerReci">236</p>

        </div>
    );
}