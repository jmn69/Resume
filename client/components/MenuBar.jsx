import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Collapse from 'reactstrap/lib/Collapse';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import NavLinkRedux from './NavLink';
import { signOut } from '../actions';

export class MenuBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleSignOutClick = this.handleSignOutClick.bind(this);
        this.state = {}
    }

    render() {
        return (
            <Navbar style={{lineHeight: 2.7}} color="primary">
                <NavbarBrand href="/">JM LOGO</NavbarBrand>
                {this.renderGuestBar()}
                <Nav className="d-flex justify-content-center">
                    {this.renderSignOut()}
                    <NavItem>
                        <NavLink href="https://github.com/jmn69">
                            Github
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }

    renderGuestBar() {
        return <Nav id="adminBar">
                <NavItem>
                    <NavLinkRedux
                        pagePath='/'
                        pageType='HOME'
                        label='Home'
                    />
                </NavItem>
                <NavItem>
                    <NavLinkRedux
                        pagePath='/skills'
                        pageType='SKILLS'
                        label='Skills'
                    />
                </NavItem>
                <NavItem>
                    <NavLinkRedux
                        pagePath='/experiences'
                        pageType='EXPERIENCES'
                        label='Experiences'
                    />
                </NavItem>
                <NavItem>
                    <NavLinkRedux
                        pagePath='/projets'
                        pageType='PROJETS'
                        label='Projets'
                    />
                </NavItem>
                <NavItem>
                    <NavLinkRedux
                        pagePath='/contact'
                        pageType='CONTACT'
                        label='Contact'
                    />
                </NavItem>
            </Nav>;
    }

    renderSignOut() {
        const { loggedIn, signOut } = this.props;
        return loggedIn
            ? <NavItem>
                <NavLink
                    id='signout-link'
                    href="#"
                    onClick={this.handleSignOutClick}
                >
                    Sign out
                </NavLink>
            </NavItem>
            : null;
    }

    handleSignOutClick() {
        this.props.signOut();
    }
}


export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            signOut: signOut
        }, dispatch);
}
export const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: state.app.loggedIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar)
