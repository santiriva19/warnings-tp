import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/img/tplogomini.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import '../../assets/style.css';
import PanelResumenGen from './ResumenGen'
import InfoCampana from './InfoCampa'
import NumAlerta from './NumAlerta'
import GraficaAlertas from './GraficaAlertas'
import NumEmple from './NumEmple'
import AlerReci from './AlerReci'
import Fondo from '../../assets/img/fondoDashboard.jpg'
import SelectCamp from './SelectCamp'



export default class DashboardFullView extends Component
{
    render(){
        return(
            <div style = {styles.cuerpo} >
                <div style={styles.header}>
                    <FontAwesomeIcon style = {{ marginLeft : '1%', marginTop : '0.5%' }} icon={faInfoCircle} size="2x" color="#6E6E6E" />
                    <div style = {styles.centro}>
                        <img style = {styles.logo} src={Logo}/> 
                        <h1 className = "textoGrande" >Dashboard</h1>
                    </div>
                    <SelectCamp/>
                </div>

                {/*  Contenedor grande */}
                <div className="row" style = {styles.contColOneTwo} >

                    {/*  Contenedor de resumen general - verde  */}
                    <div className = "col" style = {styles.firstCol}>

                        {/*  Contenedor de resumen general - purpura  */}
                        <div style = {styles.contPanelResum}>
                            <PanelResumenGen/>
                        </div>

                        {/*  Contenedor de número de alertas - amarillo  */}
                        <div style = {styles.contPanelNumAlertas}>
                            <NumAlerta/>
                        </div>
                    </div>

                    {/*  Contenedor de resumen general y gráfica - azul  */}
                    <div className = "col" style = {styles.secondCol}>

                        {/*  Contenedor de resumen general - purpura  */}
                        <div style = {styles.contPanelInfoCamp}>
                            <InfoCampana/>
                        </div>

                        <div style = {styles.contPaneGraphAndEmpAndlNum}>

                            <div style = {styles.contGraph}>
                                <GraficaAlertas/>
                            </div>
    
                            <div style = {styles.contEmplAndNum}>
                                <NumEmple/>

                                <AlerReci/>
                              

                                
                            </div>
                            
                           
                        </div>
                    </div>
                </div>
            </div>
           

        );
    }
}
const styles = {
    /*
    cuerpo : 
    {
        width : '100%',
        height : '100vh',
        backgroundImage : 'url('+Fondo+')',
        backgroundSize : 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
    },
    */
    header:{
        width : '100%',
        display : 'flex',
        justifyContent: 'space-between',
        alignItems : 'center',         
    },
    centro:{
        width : '100%',
        display : 'flex',
        justifyContent: 'center',
        alignItems : 'center', 
        marginTop : '0.5%',
        paddingLeft: '24%',
    },
    logo:{
        width : 30, 
        height : 30,
    },
    contColOneTwo:{
        width: '100%', 
        height: '90vh', 
        marginLeft : '-0.5',
        //backgroundColor:'red',
        justifyContent: 'space-around',
        flexWrap : 'wrap',
        overFlowX: 'hidden',

    },
    firstCol:{
        flex : 0.37,
        height: '95vh', 
        //backgroundColor:'green',
        flexDirection : 'row',
    },
    secondCol:{
        flex : 0.63,
        height: '95vh', 
        //backgroundColor:'blue',
        width : '100%'
    },
    contPanelResum:{
        flex : 1,
        width : '104%',
        height: '60%', 
        //backgroundColor : 'purple',
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : '12%',
    },
    contPanelNumAlertas:{
        flex : 1,
        width : '104%',
        height: '40%', 
        //backgroundColor : 'yellow',
    },
    contPanelInfoCamp:{
        flex : 0.4,
        height: '30%', 
        width: '104%',
        marginLeft: '-2%',
        //backgroundColor : '#ffff8f',
        paddingTop : '7%',
        justifyContent : 'center',
        alignItems : 'center',

    },
    contPaneGraphAndEmpAndlNum:{
        flex : 0.6,
        display:'flex',
        height: '70%', 
        //backgroundColor : '#f444f8ff',
        width: '104%',
        marginLeft: '-1.6%',
        flexDirection : 'row',
        alignItems : 'center',
    },
    contGraph:{
        flex : 0.55,
        height : '100%',
        //backgroundColor : '#fe5432',
        alignItems : 'center',
        
    },
    contEmplAndNum:
    {
        flex : 0.45,
        //backgroundColor : 'red',
        height : '100%',

    }
}