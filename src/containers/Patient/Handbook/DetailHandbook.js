import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../../HomePage/HomeHeader';
import { getDetailHandBookById } from '../../../services/userService'
import _, { iteratee } from 'lodash';
import './DetailHandbook.scss'

//Cấu trúc của 1 class Component của React:
class DetailHandbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDetailHandBook: {},

        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;

            let res = await getDetailHandBookById({
                id: id,
            });

            console.log('check markdown: ', res)
            if (res && res.errCode === 0) {

                this.setState({
                    dataDetailHandBook: res.data,
                })

            }

        }
    }

    async componentDidUpdate(prevPops, prevState, snapshot) { //viết trong componentDidUpdate thì react sẽ giúp phân biệt cso sự thay đổi của props
        if (this.props.language !== prevPops.language) {

        }

    }

    render() {
        let { dataDetailHandBook } = this.state;

        console.log('check state from DetailHandBook: ', this.state)
        let { language } = this.props;
        return (
            <div className='detail-handbook-container'>
                <HomeHeader />
                <div className='detail-handbook-body'>

                    <div className='description-handbook'>
                        {dataDetailHandBook && !_.isEmpty(dataDetailHandBook)
                            &&
                            <div dangerouslySetInnerHTML={{ __html: dataDetailHandBook.descriptionHTML }}></div>
                        }

                    </div>
                </div>
            </div>


        )
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailHandbook);
