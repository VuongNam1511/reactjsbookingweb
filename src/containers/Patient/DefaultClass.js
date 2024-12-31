import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';


//Cấu trúc của 1 class Component của React:
class DefaultClass extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevPops, prevState, snapshot) { //viết trong componentDidUpdate thì react sẽ giúp phân biệt cso sự thay đổi của props
        if (this.props.language !== prevPops.language) {

        }

    }

    render() {
        return (
            <div className='default-class-container'>

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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultClass);
