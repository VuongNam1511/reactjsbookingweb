import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";



class HandBook extends Component {
    render() {
        return (
            <div className='section-share section-HandBook '>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm Nang</span>
                        <button className='btn-section'>Xem thêm...</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-img section-HandBook'> </div>
                                <div>Cơ Xương Khớp </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-HandBook'> </div>
                                <div>Bệnh Viêm Gan</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-HandBook'> </div>
                                <div>Thần Kinh</div>
                            </div >
                            <div className='section-customize'>
                                <div className='bg-img section-HandBook'> </div>
                                <div>Tim Mạch</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-HandBook'> </div>
                                <div>Tiêu Hóa</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-HandBook'> </div>
                                <div>Hô Hấp - Phổi</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-HandBook'> </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
