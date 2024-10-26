import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";



class Specialty extends Component {
    render() {
        return (
            <div className='section-share section-specialty '>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Chuyên Khoa Phổ Biến</span>
                        <button className='btn-section'>Xem thêm...</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty co-xuong-khop'></div>
                                <div>Cơ Xương Khớp </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty viem-gan'> </div>
                                <div>Bệnh Viêm Gan</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty than-kinh'> </div>
                                <div>Thần Kinh</div>
                            </div >
                            <div className='section-customize'>
                                <div className='bg-img section-specialty tim-mach'> </div>
                                <div>Tim Mạch</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty tieu-hoa'> </div>
                                <div>Tiêu Hóa</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty ho-hap-phoi'> </div>
                                <div>Hô Hấp - Phổi</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty suc-khoe-tam-than'> </div>
                                <div>Sức Khỏe Tâm Thần</div>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
