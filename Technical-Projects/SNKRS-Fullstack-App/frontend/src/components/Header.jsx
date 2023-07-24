import React from 'react';

import { Link } from 'react-router-dom';

function Header() {

    return (
        <div >
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid bg-color-custom">
                    <Link class="navbar-brand bg-color-custom" to="/">SNKRS!</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/sneakers">See All Sneakers</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/sneakers/admin">Create Shoe</Link>
                            </li>
                        </ul>

                        <form class="d-flex" role="search">

                            <Link to={`/sneakers/search`} className='link-btn-desc' >
                                Search Sneakers
                            </Link>
                        </form>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;