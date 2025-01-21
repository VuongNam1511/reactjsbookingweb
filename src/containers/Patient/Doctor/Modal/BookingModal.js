import React, { Component } from 'react';
import { connect } from "react-redux";
import './BookingModal.scss';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';
import { getProfileDoctorById } from '../../../../services/userService';
import _ from 'lodash';
import DatePicker from '../../../../components/Input/DatePicker';
import * as actions from '../../../../store/actions'
import { act } from 'react';
import { LANGUAGES } from '../../../../utils';
import Select from 'react-select';
import { postPatientBookingAppointment } from '../../../../services/userService';
import { toast } from 'react-toastify';
import moment from 'moment';


//Cấu trúc của 1 class Component của React:
class BookingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            phoneNumber: '',
            email: '',
            address: '',
            reason: '',
            birthDay: '',
            selectedGender: '',
            doctorId: '',
            genders: '',
            timeType: '',
        }
    }

    async componentDidMount() {
        this.props.getGenders();
    }

    buildDataGender = (data) => {
        let result = [];
        let language = this.props.language;

        if (data && data.length > 0) {
            data.map(item => {
                let object = {};
                object.label = language === LANGUAGES.VI ? item.valueVi : item.valueEn;
                object.value = item.keyMap;
                result.push(object)
            })
        }
        return result;
    }

    async componentDidUpdate(prevPops, prevState, snapshot) { //viết trong componentDidUpdate thì react sẽ giúp phân biệt có sự thay đổi của props
        if (this.props.language !== prevPops.language) {
            this.setState({
                genders: this.buildDataGender(this.props.genders)
            })
        }
        if (this.props.genders !== prevPops.genders) {
            this.setState({
                genders: this.buildDataGender(this.props.genders)
            })
        }
        if (this.props.dataTime !== prevPops.dataTime) {
            if (this.props.dataTime && !_.isEmpty(this.props.dataTime)) {
                let doctorId = this.props.dataTime.doctorId;
                let timeType = this.props.dataTime.timeType;
                this.setState({
                    doctorId: doctorId,
                    timeType: timeType
                })
            }
        }
    }

    handleOnchangeInput = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = { ...this.state };
        stateCopy[id] = valueInput;
        this.setState({
            ...stateCopy
        })
    }

    handleOnchangeDatePicker = (date) => {
        this.setState({
            birthDay: date[0]
        })
    }

    handleChangeSelect = (selectedOption) => {
        this.setState({ selectedGender: selectedOption });

    }

    buildTimeBooking = (dataTime) => {
        let { language } = this.props;
        if (dataTime && !_.isEmpty(dataTime)) {

            let time = language === LANGUAGES.VI ?
                dataTime.timeTypeData.valueVi : dataTime.timeTypeData.valueEn;
            let date = language === LANGUAGES.VI ?
                moment.unix(+dataTime.date / 1000).format('dddd - DD/MM/YYYY')//convert dữ liệu + đưa đơn vị thời gian từ ms về s /1000
                :
                moment.unix(+dataTime.date / 1000).locale('en').format('ddd - MM/DD/YYYY')//convert dữ liệu + đưa đơn vị thời gian từ ms về s /1000

            return `${time} - ${date}`
        }
        return ''
    }

    buildDoctorName = (dataTime) => {
        let { language } = this.props;
        if (dataTime && !_.isEmpty(dataTime)) {
            let name = language === LANGUAGES.VI
                ?
                `${dataTime.doctorData.lastName} ${dataTime.doctorData.firstName}`
                :
                `${dataTime.doctorData.firstName} ${dataTime.doctorData.lastName}`


            return name;
        }
        return ''
    }


    handleConfirmBooking = async () => {
        //validate input
        //if (!data.email || !data.doctorId || !data.timeType || !data.date) {

        let date = new Date(this.state.birthDay).getTime();
        let timeString = this.buildTimeBooking(this.props.dataTime);
        let doctorName = this.buildDoctorName(this.props.dataTime);

        let res = await postPatientBookingAppointment({
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            address: this.state.address,
            reason: this.state.reason,
            date: date,
            selectedGender: this.state.selectedGender.value,
            doctorId: this.state.doctorId,
            timeType: this.state.timeType,
            language: this.props.language,
            timeString: timeString,
            doctorName: doctorName,
        })

        if (res && res.errCode === 0) {
            toast.success('Booking a new appointment succeed!')
            this.props.closeBookingModal();
        } else {
            toast.error('Booking a new appointment error!')
        }
    }


    render() {
        let { isOpenModal, closeBookingModal, dataTime } = this.props;
        let doctorId = '';
        if (dataTime && !_.isEmpty(dataTime)) {
            doctorId = dataTime.doctorId
        }

        return (
            <Modal
                isOpen={isOpenModal}
                className='booking-modal-container'
                size='lg'
                centered
            >
                <div className='booking-modal-content'>
                    <div className='booking-modal-header'>
                        <span className='left'>
                            <FormattedMessage id="patient.booking-modal.title" />
                        </span>
                        <span className='right' onClick={closeBookingModal}><i className='fas fa-times'></i></span>
                    </div>
                    <div className='booking-modal-body'>
                        {/* {JSON.stringify(dataTime)} */}
                        <div className='doctor-infor'>
                            <ProfileDoctor
                                doctorId={doctorId}
                                isShowDescriptionDoctor={false}
                                dataTime={dataTime}
                            />
                        </div>
                        {/* <div className='price'>
                        </div> */}
                        <div className='row'>
                            <div className='col-6 form-group'>
                                <label>
                                    <FormattedMessage id="patient.booking-modal.fullName" />

                                </label>
                                <input className='form-control'
                                    value={this.state.fullName}
                                    onChange={(event) => this.handleOnchangeInput(event, 'fullName')}
                                >
                                </input>
                            </div>
                            <div className='col-6 form-group'>
                                <label>
                                    <FormattedMessage id="patient.booking-modal.phoneNumber" />

                                </label>
                                <input className='form-control'
                                    value={this.state.phoneNumber}
                                    onChange={(event) => this.handleOnchangeInput(event, 'phoneNumber')}
                                >
                                </input>
                            </div>
                            <div className='col-6 form-group'>
                                <label>
                                    <FormattedMessage id="patient.booking-modal.email" />

                                </label>
                                <input className='form-control'
                                    value={this.state.email}
                                    onChange={(event) => this.handleOnchangeInput(event, 'email')}
                                >
                                </input>
                            </div>
                            <div className='col-6 form-group'>
                                <label>
                                    <FormattedMessage id="patient.booking-modal.address" />

                                </label>
                                <input className='form-control'
                                    value={this.state.address}
                                    onChange={(event) => this.handleOnchangeInput(event, 'address')}
                                ></input>
                            </div>
                            <div className='col-12 form-group'>
                                <label>
                                    <FormattedMessage id="patient.booking-modal.reason" />

                                </label>
                                <input className='form-control'
                                    value={this.state.reason}
                                    onChange={(event) => this.handleOnchangeInput(event, 'reason')}
                                ></input>
                            </div>
                            <div className='col-6 form-group'>
                                <label>
                                    <FormattedMessage id="patient.booking-modal.birthDay" />

                                </label>
                                <DatePicker
                                    onChange={this.handleOnchangeDatePicker}
                                    className='form-control'
                                    value={this.state.birthDay}
                                />
                            </div>
                            <div className='col-6 form-group'>
                                <label>
                                    <FormattedMessage id="patient.booking-modal.genders" />

                                </label>
                                <Select
                                    value={this.state.selectedGender}
                                    onChange={this.handleChangeSelect}
                                    options={this.state.genders}

                                />
                            </div>
                        </div>
                    </div>
                    <div className='booking-modal-footer'>
                        <button className='btn-booking-confirm' onClick={() => this.handleConfirmBooking()}>
                            <FormattedMessage id="patient.booking-modal.btn-confirm" />
                        </button>
                        <button className='btn-booking-cancel' onClick={closeBookingModal}>
                            <FormattedMessage id="patient.booking-modal.btn-cancel" />

                        </button>

                    </div>
                </div>

            </Modal>
        );

    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genders: state.admin.genders,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenders: () => dispatch(actions.fetchGenderStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
