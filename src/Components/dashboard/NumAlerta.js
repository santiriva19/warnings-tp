import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style.css';
import {Line} from 'react-chartjs-2';

const data = {
    labels : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dec'],
    datasets : 
    [
        {
            label : 'Alertas',
            backgroundColor : '#D78BD9',
            borderColor : '#8F2A92',
            borderWidth : 2,
            hoverBackgroundColor : '#D78BD9',
            hoverBorderColor : '#06A3BF',
            data : [32,15,10,23,4,8,9,48,25,33,20,18],
            borderDashOffset: 0.0,


        }
    ]
}
const opciones = {
    mantainAspectRatio : false,
}

export default function NumAlerta(){
    return(
        <div className = "panelNumAlerta">
            <Line useRef="chart" data = {data} options = {opciones} />
        </div>
    );
}
