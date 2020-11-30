import React, {Component} from 'react';
import AlertsPopUp from './TypeOfAlerts/TypeOfAlerts';
import Registro from './Registros/Registros';

class DashboardFullView extends Component
{
    render(){
        return(
            <div>
                <Registro />
            </div>

        );
    }
}
export default DashboardFullView;
