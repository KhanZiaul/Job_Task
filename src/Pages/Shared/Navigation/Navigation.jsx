import navTitle from '../../../assets/images/nav.png'

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className='fs-2 d-flex align-items-center'>
                        <span className='text-success'>AGT</span>
                        <span>.</span>
                        <span>W</span>
                        <img style={{ width: '26px' }} src={navTitle} alt="" />
                        <span>RLD</span>
                    </div>
                    <div>
                        <form className="d-flex" role="search">
                            <input style={{ width: '360px', height: '42px' }} className="form-control me-2 rounded-pill fw-semibold" type="search" placeholder="Search for your favorite groups in AGT" aria-label="Search" />
                        </form>
                    </div>
                    <div id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">Create account</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a style={{color:'#2F6CE5'}} className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    It&apos;s free
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navigation;