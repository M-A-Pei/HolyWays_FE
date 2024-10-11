
import { useMemo, useState } from 'react'
import logo from '/HolyWays.png'
import { useUser } from '../state/store'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const [isLogin, setIsLogin] = useState(false)
    const [isDropdown, setIsDropdown] = useState(false)
    const user = useUser(state => state.user)
    const clearUser = useUser(state => state.clearUser)
    const navigate = useNavigate()

    function onLogout() {
        clearUser()
        setIsLogin(false)
        localStorage.removeItem('token')
        toast.success("Logout successful")
        navigate('/')
    }

    useMemo(() => {
        if (user !== null) {
            setIsLogin(true)
        }
    }, [])
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
                    {
                        isLogin ? (
                            <div>
                                <img onClick={() => setIsDropdown(!isDropdown)} width={40} height={40} className='rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mMNz8YCBvYmnr3BQUPX__YsC_WtDuAevwg&s" alt="" />
                                <div className={`dropdown-menu ${isDropdown ? 'show' : ''}`} style={{ right: 110 }}>
                                    <a className="dropdown-item d-flex gap-2" onClick={() => navigate('/profile')}><i className="bi bi-person"></i>Profile</a>
                                    <a className="dropdown-item d-flex gap-2" href="#"><i className="bi bi-cash-coin"></i>Raise Fund</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item d-flex gap-2" onClick={onLogout}><i className="bi bi-box-arrow-left text-danger"></i>Logout</a>
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex justify-content-between px-2 gap-2 mx-3">
                                <a href='/auth/login' className="btn text-light bg-transparant fw-bold px-4" type="submit">Login</a>
                                <a href='/auth/register' className="btn bg-light fw-bold px-4" style={{ color: "#bf2626" }} type="submit">Register</a>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}
