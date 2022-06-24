import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (<>
        <header className={'bg-dark'}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="logo">
                        <Link to={'/'}>
                            LOGO
                        </Link>
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                        <nav className={'header__menu__nav'}>
                            <NavLink to={'/'}
                                     className={'m-3 text-decoration-none fw-bold'}>Home</NavLink>
                            <NavLink to={'/popular'}
                                     className={'m-3 text-decoration-none fw-bold'}>Popular</NavLink>
                            <NavLink to={'/top-rated'}
                                     className={'m-3 text-decoration-none fw-bold'}>TopRated</NavLink>
                            <NavLink to={'/latest'}
                                     className={'m-3 text-decoration-none fw-bold'}>Latest</NavLink>
                        </nav>
                        <div className="d-flex align-items-center">
                            <input type="text" className={'m-3'}/>
                            <button className="btn btn-success">search</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>);
};

export default Header;