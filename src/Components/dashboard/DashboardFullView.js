import React, {Component} from 'react';
import AlertsPopUp from './TypeOfAlerts/TypeOfAlerts';
import Registro from './Registros/Registros';
import Boxes from './Resultados/resultados'

class DashboardFullView extends Component
{
    render(){
        return(
            <div>
                <AlertsPopUp />
                {/* <Registro /> */}
            </div>

        );
    }
}
export default DashboardFullView;
