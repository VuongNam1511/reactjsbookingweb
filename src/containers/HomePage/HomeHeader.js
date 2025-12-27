import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/images/BVDKDA.png'
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';
import { withRouter } from 'react-router';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModal: false, // Trạng thái đóng mở modal
        }
    }

    // Hàm đóng/mở modal
    toggleSupportModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        });
    }

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }

    render() {
        let language = this.props.language;
        let { isOpenModal } = this.state;

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <img className='header-logo' src={logo} onClick={() => this.returnToHome()} alt="logo" />
                        </div>


                        <div className='center-content'>
                            <div className='child-content'>
                                <div><a href='#Specialty'> <FormattedMessage id="home-header.special" /></a></div>
                                <div className='sub-title'><FormattedMessage id="home-header.finddoctor" /> </div>

                            </div>
                            <div className='child-content'>
                                <div><a href='#Facilities'><FormattedMessage id="home-header.facility" /></a></div>
                                <div className='sub-title'><FormattedMessage id="home-header.select-room" /></div>

                            </div>
                            <div className='child-content'>
                                <div><a href='#Doctors'><FormattedMessage id="home-header.doctor" /></a></div>
                                <div className='sub-title'><FormattedMessage id="home-header.select-doctor" /></div>

                            </div>
                            <div className='child-content'>
                                <div><a href='#Handbooks'><FormattedMessage id="home-header.hand-book" /></a></div>
                                <div className='sub-title'><FormattedMessage id="home-header.general" /></div>

                            </div>
                        </div>

                        <div className='right-content'>
                            {/* THÊM SỰ KIỆN ONCLICK TẠI ĐÂY */}
                            <div className='support' onClick={() => this.toggleSupportModal()}>
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="home-header.support-lan" />
                            </div>

                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}>
                                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
                            </div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}>
                                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MODAL THÔNG TIN HỖ TRỢ */}
                {isOpenModal && (
                    <div className="support-modal-overlay" onClick={this.toggleSupportModal}>
                        <div className="support-modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <h3><FormattedMessage id="home-header.support-lan" /></h3>
                                <span className="close-icon" onClick={this.toggleSupportModal}>&times;</span>
                            </div>
                            <div className="modal-body">
                                <div className="contact-item">
                                    <i className="fas fa-phone"></i>
                                    <span><strong>Hotline:</strong> 0123 456 789</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-envelope"></i>
                                    <span><strong>Email:</strong> support@datlichkhambenh.com</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span><strong>Địa chỉ:</strong> Số 1, Cao Lỗ, Xã Đông Anh, TP Hà Nội</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {this.props.isShowBanner === true && (
                    <div className='home-header-banner'>
                        <div className='content-top'>
                            <div className='title-1 '><FormattedMessage id="banner.title-1" /></div>
                            <div className='title-2 '><FormattedMessage id="banner.title-2" /></div>
                            {/* <div className='search '>
                                <i className="fas fa-search"></i>
                                <input type='text' placeholder='Tìm chuyên Khoa khám bệnh'></input>
                            </div> */}
                        </div>

                        <div className='content-bottom'>
                            <div className='options '>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-notes-medical" ></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child-1" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="far fa-hospital"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child-2" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-user-md"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child-3" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-id-card-alt"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child-4" /></div>
                                </div>

                            </div>

                        </div>

                    </div>
                )}
            </React.Fragment>
        );
    }
}

// ... Giữ nguyên mapStateToProps và mapDispatchToProps ...

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
