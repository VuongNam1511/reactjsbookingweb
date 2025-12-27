import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeFooter.scss'; // Đảm bảo bạn đã import file scss

class HomeFooter extends Component {
    render() {
        return (
            <div className='home-footer-container'>
                <div className='home-footer-content'>
                    <div className='content-left'>
                        <div className='footer-logo'></div>
                        <div className='hospital-name'>BỆNH VIỆN ĐA KHOA ĐÔNG ANH</div>
                        <div className='hospital-info'>
                            <p><i className="fas fa-map-marker-alt"></i> Số 1, Cao Lỗ, Xã Đông Anh, TP Hà Nội</p>
                            <p><i className="fas fa-check"></i> ĐKKD số: 0102030405 do Sở Kế hoạch Đầu tư Hà Nội cấp</p>
                        </div>
                    </div>

                    <div className='content-center'>
                        <div className='title'>DÀNH CHO BỆNH NHÂN</div>
                        <ul>
                            <li><a href='#'>Câu hỏi thường gặp</a></li>
                            <li><a href='#'>Điều khoản sử dụng</a></li>
                            <li><a href='#'>Quy trình hỗ trợ</a></li>
                            <li><a href='#'>Chính sách bảo mật</a></li>
                        </ul>
                    </div>

                    <div className='content-right'>
                        <div className='title'>LIÊN HỆ TRỢ GIÚP</div>
                        <div className='contact-item'>
                            <div className='contact-icon'><i className="fas fa-phone"></i></div>
                            <div className='contact-text'>
                                <span>Hotline:</span>
                                <b>0123.456.789</b>
                            </div>
                        </div>
                        <div className='contact-item'>
                            <div className='contact-icon'><i className="fas fa-envelope"></i></div>
                            <div className='contact-text'>
                                <span>Email:</span>
                                <b>support@datlichkhambenh.com</b>
                            </div>
                        </div>
                        <div className='social-icons'>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <p>Copyright &copy; 2025 Bệnh viện Đa Khoa Đông Anh. All rights reserved. <a href='#'>Design by Vương Văn Nam K66CNPMA</a></p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

export default connect(mapStateToProps, null)(HomeFooter);