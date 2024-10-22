import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";


class DoctorOfTheWeek extends Component {

    render() {

        return (
            <div className='section-share section-doctor-otw '>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác Sĩ Nổi Bật Tuần Qua</span>
                        <button className='btn-section'>Xem thêm...</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-doctor-otw'> </div>
                                        <div className='position text-center'>
                                            <div>Giao sư, Tiến sĩ Cù Trọng Xoay </div>
                                            <div>Cơ xương khớp 1</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-doctor-otw'> </div>
                                        <div className='position text-center'>
                                            <div>Giao sư, Tiến sĩ Cù Trọng Xoay </div>
                                            <div>Cơ xương khớp 1</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-doctor-otw'> </div>
                                        <div className='position text-center'>
                                            <div>Giao sư, Tiến sĩ Cù Trọng Xoay </div>
                                            <div>Cơ xương khớp 1</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-doctor-otw'> </div>
                                        <div className='position text-center'>
                                            <div>Giao sư, Tiến sĩ Cù Trọng Xoay </div>
                                            <div>Cơ xương khớp 1</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-doctor-otw'> </div>
                                        <div className='position text-center'>
                                            <div>Giao sư, Tiến sĩ Cù Trọng Xoay </div>
                                            <div>Cơ xương khớp 1</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-doctor-otw'> </div>
                                        <div className='position text-center'>
                                            <div>Giao sư, Tiến sĩ Cù Trọng Xoay </div>
                                            <div>Cơ xương khớp 1</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-doctor-otw'> </div>
                                        <div className='position text-center'>
                                            <div>Giao sư, Tiến sĩ Cù Trọng Xoay </div>
                                            <div>Cơ xương khớp 1</div>
                                        </div>
                                    </div>

                                </div>
                            </div>





                        </Slider>
                    </div>

                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorOfTheWeek);
