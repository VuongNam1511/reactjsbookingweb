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
                                        <div className='bg-img section-doctor-otw'>
                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư Tiến sĩ Bác sĩ  Nguyễn Duy Hưng </div>
                                            <div>Da Liễu</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-doctor-otw bs2'> </div>
                                        <div className='position text-center'>
                                            <div>Giao sư, Tiến sĩ Cù Trọng Xoay </div>
                                            <div>Tâm Lí</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-doctor-otw bs3'> </div>
                                        <div className='position text-center'>
                                            <div>Bác sĩ Chuyên khoa II Trần Minh Khuyên </div>
                                            <div>Sức khỏe tâm thần||Tư vấn trị liệu tâm lí</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-doctor-otw bs4'> </div>
                                        <div className='position text-center'>
                                            <div>Tiến sĩ Bác sĩ Bùi Thị Phương Nga </div>
                                            <div>Sản phụ khoa</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-doctor-otw bs5'> </div>
                                        <div className='position text-center'>
                                            <div>Giao sư, Tiến sĩ Hà Văn Quyết </div>
                                            <div>Tiêu hóa-Bệnh Viêm Gan</div>
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
