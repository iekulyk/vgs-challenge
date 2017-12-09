import React from 'react';
import { Button } from  'elemental';
import { actionTypes, urgencyRowType } from "../../constants"
import moment from 'moment';

class DataTableRowView extends React.Component {

    constructor(){
        super();
        this.callModal = this.callModal.bind(this);
        this.increment = this.increment.bind(this);
        this.interval
        this.state = {
            timeFrom: '',
        };
    }

    componentDidMount(){
        this.interval =  setInterval(this.increment, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    increment(){
        var ms = moment(Date.now()).diff(this.props.timestamp);
        var d = moment.duration(ms);
        var dif = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

        this.setState({ timeFrom: dif})
    }

    callModal(actionType){
        this.props.onModalCall(this.props.incident_key);
    }

    render() {
        return (
            <tr>
                <td>
                    <label>
                        { this.props.incident_key }
                    </label>
                </td>
                <td>
                    { this.props.customer }
                </td>
                <td>
                    {moment.utc(this.props.timestamp).format("MM/DD/YYYY, HH:mm")}
                </td>
                <td>
                    { this.state.timeFrom }
                </td>
                <td>
                    <Button type="link-primary"
                            onClick={e => this.callModal(actionTypes.SHOW_INCIDENT_INFO_MODAL, this.props.incident_key)}>Info</Button>
                </td>
            </tr>
        );
    }
}

DataTableRowView.PropTypes = {
    incident_key: React.PropTypes.string.isRequired,
    customer: React.PropTypes.string.isRequired,
    timestamp: React.PropTypes.number.isRequired,
    urgency: React.PropTypes.string.isRequired
};

export default DataTableRowView;