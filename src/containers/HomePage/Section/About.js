import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {
        return (
            <div className='section-share section-about '>
                <div className='section-about-header'>
                    Giới Thiệu về Website Đặt Lịch Khám Bệnh
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/xIONRxowOx4" title="Đặt Lịch Khám Bệnh: Hệ thống đặt khám trực tuyến"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>VÌ SAO ĐẶT LỊCH KHÁM VỚI WEBSITE ĐẶT LỊCH KHÁM BỆNH</p>

                        <p>
                            1. Bác sĩ uy tín
                            Bác sĩ chuyên khoa giỏi, thông tin đã xác thực, được nhiều bệnh nhân tin tưởng, đồng nghiệp đánh giá cao, có uy tín trong ngành. Đã, đang công tác tại các bệnh viện hàng đầu tại Hà Nội.
                        </p>
                        <p>
                            2. Đúng người, đúng bệnh
                            Thông tin và kinh nghiệm bác sĩ được xác thực, nội dung bài viết cẩm nang dễ hiểu cùng với sự gợi ý từ hệ thống, bệnh nhân đặt khám đúng bác sĩ chuyên khoa giỏi phù hợp với vấn đề của mình.
                        </p>
                        <p>3. Hỗ trợ chu đáo
                            Trên cơ sở hợp tác chặt chẽ với các cơ sở y tế, chúng tôi hỗ trợ bệnh nhân trước, trong và sau khi đi khám. Qua đó, giúp cho việc đi khám hiệu quả hơn và đảm bảo quyền lợi của người bệnh.
                        </p>
                        <p>4. Đặt lịch 24/7
                            Hệ thống hoạt động liên tục 24 giờ một ngày, 7 ngày/tuần, và 365 ngày/năm, kể cả ngày nghỉ và ngày lễ. Luôn sẵn sàng 24/7 để bệnh nhân đặt lịch trực tuyến.
                        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
