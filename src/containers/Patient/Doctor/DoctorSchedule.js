import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorSchedule.scss';
import moment, { lang } from 'moment';
import localization from 'moment/locale/vi';
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService'
class DoctorSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDays: [],
            allAvailableTime: []
        }
    }

    async componentDidMount() {
        let { language } = this.props;

        console.log('moment vi: ', moment(new Date()).format('dddd - DD/MM'));
        console.log('moment en: ', moment(new Date()).locale('en').format('ddd - DD/MM'));
        this.setArrDays(language);
    }

    //viết hoa chữ đầu tiên của từ đầu tiên
    capitalizeFirstletter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    setArrDays = (language) => {
        let allDays = []
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (language === LANGUAGES.VI) {
                let labelVi = moment(new Date()).add(i, 'days').format('dddd - DD/MM ');

                object.label = this.capitalizeFirstletter(labelVi)
            } else {
                object.label = moment(new Date()).add(i, 'days').locale('en').format('ddd - DD/MM');

            }
            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();

            allDays.push(object);
        }

        this.setState({
            allDays: allDays,
        })

    }

    componentDidUpdate(prevPops, prevState, snapshot) {
        if (this.props.language !== prevPops.language) {
            this.setArrDays(this.props.language);
        }
    }


    handleOnChangSelect = async (event) => {
        if (this.props.doctorIdFromParent && this.props.doctorIdFromParent !== -1) {
            let doctorId = this.props.doctorIdFromParent;
            let date = event.target.value
            let res = await getScheduleDoctorByDate(doctorId, date);

            if (res && res.errCode === 0) {
                this.setState({
                    allAvailableTime: res.data ? res.data : []
                })
            }

            console.log('check res from #75', res)
        }
    }
    render() {
        let { allDays, allAvailableTime } = this.state;
        let { language } = this.props;

        return (
            <div className='doctor-schedule-container'>
                <div className='all-schedule'>
                    <select onChange={(event) => this.handleOnChangSelect(event)}>
                        {allDays && allDays.length > 0 && allDays.map((item, index) => {
                            return (
                                <option value={item.value} key={index} >{item.label}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='all-available-time'>
                    <div className='text-calendar'>
                        <i className='fas fa-calendar-alt'> <span>Lịch Khám</span></i>
                    </div>
                    <div className='time-content'>
                        {allAvailableTime && allAvailableTime.length > 0 ?
                            allAvailableTime.map((item, index) => {
                                let timeDisplay = language === LANGUAGES.VI ? item.timeTypeData.valueVi : item.timeTypeData.valueEn;
                                return (
                                    <button key={index}>{timeDisplay}</button>
                                )
                            })

                            :
                            <div>
                                Bác Sĩ hiện không có lịch hẹn khám bệnh trong khoảng thời gian này, vui lòng chọn lịch khám trong thời gian khác !
                            </div>
                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
