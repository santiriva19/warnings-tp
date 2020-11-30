import React from 'react';
import './Resultados.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUsb
    
} from '@fortawesome/free-brands-svg-icons'


class Boxes extends React.Component {

    constructor() {
        super();
        this.state = {
            info: [
                {
                    icon: faUsb,
                    rate: '20%',
                    alertName: 'botellas'
                }
            ]
        }

        this.apiInfo()
    }

    apiInfo() {
        fetch('')
            .then(res => {
                return res.json();
            })
            .then(dataList => {
                this.setState({
                    info: dataList
                })

            })
    }

    boxCointainer(props) {
        return (
            <div className="box">
                 <FontAwesomeIcon icon={props.icon} size="2x" color="#8F2A92" />
                <h3><strong>rate: {props.rate}</strong></h3>
                <h4>alertName: {props.alertName}</h4>
            </div>
        )
    }


    render() {
        return (
            <div>
                {this.state.info.map(alert => (
                    <div >{this.boxCointainer(alert)}</div>
                ))}
            </div>
        )
    }
}


export default Boxes;
