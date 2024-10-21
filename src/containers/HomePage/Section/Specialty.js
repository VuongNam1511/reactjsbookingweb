import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import specialtyImg from "../../../assets/specialtyimage/co-xuong-khop.jpg"

class Specialty extends Component {
    render() {
        let setting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <div className='section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title-section'>Chuyên Khoa Phổ Biến</span>
                        <button className='btn-section'>Xem thêm...</button>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...setting}>
                            <div className='specialty-customize'>
                                <div className='bg-img'> </div>
                                <div>Cơ Xương Khớp </div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img--viemgan'> </div>
                                <div>Bệnh Viêm Gan</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img--thankinh'> </div>
                                <div>Thần Kinh</div>
                            </div >
                            <div className='specialty-customize'>
                                <div className='bg-img--timmach'> </div>
                                <div>Tim Mạch</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img--tieuhoa'> </div>
                                <div>Tiêu Hóa</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img--viemphoi'> </div>
                                <div>Hô Hấp - Phổi</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img--tamthan'> </div>
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
