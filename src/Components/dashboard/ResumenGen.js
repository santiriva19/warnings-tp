import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style.css';


export default function ResumenGen()
{
    return(

        <div className="panelResumen">

            <p className="tituloResumen">
                Resumen General 2020
            </p>
 
            <div  style = {styles.renglon}>

                <p className="textosResumen">
                    Smart phone
                </p>

                <p className="textoNumeroAlertas">
                    32
                </p>
            </div>

            <div style = {styles.renglon}>
                <p className="textosResumen">
                    Libros o cuadernos
                </p>

                <p className="textoNumeroAlertas">
                    32
                </p>
            </div>
            
            <div style = {styles.renglon}>
                <p className="textosResumen">
                    Envaces no transparentes
                </p>

                <p className="textoNumeroAlertas">
                    32
                </p>
            </div>
            
            <div style = {styles.renglon}>
                <p className="textosResumen">
                    USB
                </p>

                <p className="textoNumeroAlertas">
                    32
                </p>
            </div>

            <div className="row" style = {styles.renglon}>
                <p className="textosResumen">
                    Lapiceros
                </p>

                <p className="textoNumeroAlertas">
                    32
                </p>
            </div>

        </div>
    );
}
const styles = {
    renglon :{
        //backgroundColor : 'red',
        display : 'flex',
        width : '100%',
        height : '15%',
        justifyContent : 'space-between',
        flexDirection : 'row'

    },

}