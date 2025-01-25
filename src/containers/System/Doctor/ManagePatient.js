import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ManagePatient.scss'
import DatePicker from '../../../components/Input/DatePicker';

//Cấu trúc của 1 class Component của React:
class ManagePatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevPops, prevState, snapshot) { //viết trong componentDidUpdate thì react sẽ giúp phân biệt cso sự thay đổi của props
        if (this.props.language !== prevPops.language) {

        }
    }

    handleOnchangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        })
    }

    render() {
        return (
            <div className='manage-patient-container'>
                <div className='manage-patient-title'>
                    Quản Lý Bệnh Nhân Khám Bệnh
                </div>
                <div className='manage-patient-body row'>
                    <div className='col-4 form-group'>
                        <label>Chọn ngày khám</label>
                        <DatePicker
                            onChange={this.handleOnchangeDatePicker}
                            className='form-control'
                            value={this.state.currentDate}
                        />
                    </div>
                    <div className='col-12 manage-patient-table'>
                        <table style={{ width: '100%' }} >
                            <tr>
                                <th>AAAAA</th>
                                <th colSpan={2}>AAAA</th>
                            </tr>
                            <tr>
                                <td>AAAA</td>
                                <td>AAAA</td>
                                <td>AAAA</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
