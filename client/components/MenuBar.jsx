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
import Media from 'react-media';

export class MenuBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleSignOutClick = this.handleSignOutClick.bind(this);
        this.state = {}
    }

    render() {
        return (
            <nav style={{ lineHeight: 2.7 }} className="navbar navbar-expand-md navbar-dark bg-primary">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavbarBrand
                    href="/"
                    className="text-white"
                >
                    JM LOGO
                </NavbarBrand>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto w-100 justify-content-center">
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
                    </ul>
                </div>
                <Nav className="d-flex justify-content-center">
                    {this.renderSignOut()}
                    <NavItem>
                        <NavLink
                            href="https://github.com/jmn69"
                            className="text-white"
                        >
                            Github
                            </NavLink>
                    </NavItem>
                </Nav>
            </nav>

            // <Media defaultMatches query="(max-width: 1024px)">
            //     {matches => matches ? (
            //         this.renderMobileMenu()
            //     ) : (
            //             this.renderDesktopMenu()
            //         )}
            // </Media>
        );
    }

    renderDesktopMenu() {
        return <Navbar style={{ lineHeight: 2.7 }} color="primary">
            <NavbarBrand
                href="/"
                className="text-white"
            >
                JM LOGO
                </NavbarBrand>
            {this.renderGuestBar()}
            <Nav className="d-flex justify-content-center">
                {this.renderSignOut()}
                <NavItem>
                    <NavLink
                        href="https://github.com/jmn69"
                        className="text-white"
                    >
                        Github
                        </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    }

    renderMobileMenu() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-xs-1 p-l-0 p-r-0 collapse in" id="sidebar">
                    <div className="list-group panel">
                        <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-film"></i> <span className="hidden-sm-down">Item 2</span></a>
                        <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-film"></i> <span className="hidden-sm-down">Item 2</span></a>
                        <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-film"></i> <span className="hidden-sm-down">Item 2</span></a>
                        <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-film"></i> <span className="hidden-sm-down">Item 2</span></a>
                        <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-film"></i> <span className="hidden-sm-down">Item 2</span></a>
                    </div>
                </div>
                <main className="col-md-9 col-xs-11 p-l-2 p-t-2">
                    <a href="#sidebar" data-toggle="collapse"><i className="fa fa-navicon fa-lg"></i></a>
                    <hr />
                    <div className="page-header">
                        <h1>Bootstrap 4 Sidebar Menu</h1>
                    </div>
                    <p className="lead">A responsive, multi-level vertical accordion.</p>
                </main>
            </div>
        </div>
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
                    className="text-white"
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
