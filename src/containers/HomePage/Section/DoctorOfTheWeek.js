import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import * as actions from '../../../store/actions';
import { iteratee } from 'lodash';
import { LANGUAGES } from '../../../utils';
import { withRouter } from 'react-router';
import './DoctorOfTheWeek.scss'
class DoctorOfTheWeek extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
        }
    }

    componentDidUpdate(prevPops, prevState, snapshot) {
        if (prevPops.topDoctorsDedux !== this.props.topDoctorsDedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsDedux
            })
        }
    }
    componentDidMount() {
        this.props.loadTopDoctors();
    }

    handleViewDetailDoctor = (doctor) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`)
        }
    }

    render() {
        let arrDoctors = this.state.arrDoctors;
        let { language } = this.props;
        // arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors)

        return (
            <div className='section-share section-doctor-otw ' id='Doctors'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            <FormattedMessage id="homepage.doctor-of-the-week"></FormattedMessage>
                        </span>
                        <button className='btn-section'>
                            <FormattedMessage id="homepage.more-infor"></FormattedMessage>
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>

                            {arrDoctors && arrDoctors.length > 0 && arrDoctors.map((item, index) => {
                                console.log('check item from: DOTW: ', item)
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                }
                                let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName} `
                                let nameEn = `${item.positionData.valueEn}, ${item.lastName} ${item.firstName} `
                                return (
                                    <div className='section-customize' key={index} onClick={() => this.handleViewDetailDoctor(item)}>
                                        <div className='customize-border'>
                                            <div className='outer-bg'>
                                                <div className='bg-img section-doctor-otw' style={{ backgroundImage: `url(${imageBase64})` }}>
                                                </div>
                                                <div className='position text-center'>
                                                    <div className='name-doctor'>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                    <div className='address-doctor'>Địa chỉ: {item.address}</div>
                                                    <div className='phone-doctor'>Số điện thoại: {item.phonenumber}</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                            }

                        </Slider>
                    </div>

                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        topDoctorsDedux: state.admin.topDoctors,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DoctorOfTheWeek));
