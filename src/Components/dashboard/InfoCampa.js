import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style.css';

export default function InfoCampa()
{
    return(
        <div className="panelInfo" >
            <div className = "contCirculoFoto">
                <div className = "circuloImgInfo"/>
            </div>

            <div className = "contTexto">
                <p className = "textos" style ={{marginBottom : '0rem'}} >
                    Esta es la campaña de Grupo Bancolombia, aquí puede tener
                    toda la información de alertas de primera mano
                </p>
            </div>
        </div>
    );
}
