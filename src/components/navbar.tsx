
import logo from '/HolyWays.png'
export default function Navbar() {
    return (
        <nav style={{ backgroundColor: "#bf2626" }} className="navbar navbar-expand-lg navbar-dark px-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="asdsadsad" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div className="d-flex justify-content-between px-2 gap-2 mx-3">
                        <a href='/auth/login' className="btn text-light bg-transparant fw-bold px-4" type="submit">Login</a>
                        <a href='/auth/register' className="btn bg-light fw-bold px-4" style={{ color: "#bf2626" }} type="submit">Register</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
