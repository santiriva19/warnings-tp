import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style.css';
import Img from '../../assets/img/LogoCampana/bancolombia.jpg'

export default function InfoCampa()
{
    return(
        <div className="panelInfo" >
            <div className = "contCirculoFoto">
                <div className = "circuloImgInfo">
                    <div style = {styles.image}></div>
                </div>
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
const styles = {
    image : 
    {
        width : '100%',
        backgroundImage : 'url('+Img+')',
        backgroundSize : 'cover', 
        borderRadius : 300,       
    }
}
