import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {
    render() {
        let setting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className='section-specialty'>
                <div className='specialty-content'>
                    <Slider {...setting}>
                        <div className='img-customize'>
                            <img src="https://static.wixstatic.com/media/d7b33b_5e70ab116039449eacf86128ea83e742~mv2.png/v1/fill/w_256,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7b33b_5e70ab116039449eacf86128ea83e742~mv2.png" />
                        </div>
                        <div className='img-customize'>
                            <img src="https://static.wixstatic.com/media/d7b33b_5e70ab116039449eacf86128ea83e742~mv2.png/v1/fill/w_256,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7b33b_5e70ab116039449eacf86128ea83e742~mv2.png" />
                        </div>
                        <div className='img-customize'>
                            <img src="https://static.wixstatic.com/media/d7b33b_5e70ab116039449eacf86128ea83e742~mv2.png/v1/fill/w_256,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7b33b_5e70ab116039449eacf86128ea83e742~mv2.png" />
                        </div >
                        <div className='img-customize'>
                            <img src="https://static.wixstatic.com/media/d7b33b_5e70ab116039449eacf86128ea83e742~mv2.png/v1/fill/w_256,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7b33b_5e70ab116039449eacf86128ea83e742~mv2.png" />
                        </div>
                    </Slider>
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
