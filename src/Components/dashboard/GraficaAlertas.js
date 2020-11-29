import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style.css';
import {Doughnut} from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPercentage } from '@fortawesome/free-solid-svg-icons'

const data = {
    labels : ['Book','Lapicero','Envace','Smart phone','USB', 'No aplica'],
    datasets : 
    [
        {
            backgroundColor : ['#BF86C1', '#DB00E2', '#760079', '#DD1C80', '#1BA9C2', 'white'],
            borderWidth : 2,
            data : [12,24,23,16,6,3],
        }
    ]
}
const opciones = {
    mantainAcpectRatio : false,
    responsive : true,
}

export default function GraficaAlerta(){
    return(
        <div className = "panelGrafica">
            <p className = "tituloAlertasSem">Alertas semanales</p>
            <div className="contGra">
                <Doughnut height = "0.1%" data = {data} options = {opciones} />
            </div>
            <FontAwesomeIcon  className = "iconoPerc" icon={faPercentage} size="2x" color="#6E6E6E" />

        </div>
    );
}