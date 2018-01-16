import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavLinkBs from 'reactstrap/lib/NavLink';
import { goToPage } from '../actions';

export class NavLink extends React.Component {
    constructor(props) {
        super(props)
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    render() {
        const { label } = this.props;
        return (
            <NavLinkBs
                className="text-white"
                style={{ backgroundColor: this.active() ? "#00847F" : "", fontSize: 15, fontWeight: 500 }}
                onClick={this.handleNavClick}
                href="#"
            >
                {this.props.label}
            </NavLinkBs>
        );
    }

    active() {
        const { path, pagePath } = this.props;
        return path === pagePath;
    }

    handleNavClick() {
        const { goToPage, pageType } = this.props;
        goToPage(pageType);
    }
}


export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            goToPage: goToPage
        }, dispatch);
}
export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        path: state.location.pathname
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLink)
