import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfor.scss';
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService'
import { FormattedMessage } from 'react-intl';


class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false
        }
    }

    async componentDidMount() {

    }



    async componentDidUpdate(prevPops, prevState, snapshot) {
        if (this.props.language !== prevPops.language) {

        }
    }

    ShowHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }

    render() {
        let { isShowDetailInfor } = this.state;

        return (
            <div className='doctor-extra-infor-container'>
                <div className='content-up'>
                    <div className='text-address'>ĐỊA CHỈ KHÁM BỆNH</div>
                    <div className='name-clinic'>Phòng Khám Đa Khoa An Bình</div>
                    <div className='detail-address'>168 Cao Lỗ - Uy Nỗ - Đông Anh - Hà Nội</div>
                </div>
                <div className='content-down'>
                    {isShowDetailInfor === false &&
                        <div className='showMore'>
                            <span onClick={() => this.ShowHideDetailInfor(true)}> Xem chi tiết</span>
                        </div>
                    }

                    {isShowDetailInfor === true &&
                        <>
                            <div className='title-price'>GIÁ KHÁM: .</div>
                            <div className='detail-infor'>
                                <div className='price'>
                                    <span className='left'>Giá khám</span>
                                    <span className='right'>250.000đ</span>
                                </div>
                                <div className='note'>
                                    Được ưu tiên khám trước khi đặt khám qua bookingcare. Giá khám cho người nước ngoài là 250.000đ
                                </div>
                            </div>
                            <div className='payment'>Người bệnh có thể thanh toán bằng hình thức chuyển khoản hoặc tiền mặt</div>
                            <div className='hide-price'>
                                <span onClick={() => this.ShowHideDetailInfor(false)}> Ẩn bảng giá</span>
                            </div>
                        </>
                    }


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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
