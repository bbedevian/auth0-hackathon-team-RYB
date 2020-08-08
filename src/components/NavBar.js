import React from 'react'

export default class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar is-fixed-top is-borderless" role="navigation" aria-label="main navigation">

                <div id="navbarBasicExample" className="navbar-menu">
                    
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <h4 className='title is-4'>App Name</h4>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a className="button is-danger is-inverted" onClick={null}><strong>Logout</strong></a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}