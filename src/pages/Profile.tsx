import { useEffect, useState } from "react"
import { useUser } from "../state/store"
import { useNavigate } from "react-router-dom"
import { api, setAuthToken } from "../libs/api"

export default function Profile() {
    const navigate = useNavigate()
    const user = useUser((state) => state.user)
    const [donations, setDonations] = useState<object[]>([])

    async function getDonations(){
        try {
            const token = localStorage.getItem("token")
            if(token){
                setAuthToken(token)
                const response = await api.get('/donation/ByDonator/' + user?.email)
                setDonations(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(user == null){
            navigate('/')
        }
        getDonations()
    }, [])

    return (
        <div className="row mt-5">
            <div className="col-lg-6 d-flex justify-content-center mb-5">
                <div className="p-2">
                    <h1 className="mb-4">My Profile</h1>
                    <div className="d-flex gap-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mMNz8YCBvYmnr3BQUPX__YsC_WtDuAevwg&s" alt="" />
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-column">
                                <h5 className="fw-bold" style={{color: "#bf2626"}}>Full Name</h5>
                                <p className="text-secondary">{user?.name}</p>
                            </div>

                            <div className="d-flex flex-column">
                                <h5 className="fw-bold" style={{color: "#bf2626"}}>Email</h5>
                                <p className="text-secondary">{user?.email}</p>
                            </div>

                            <div className="d-flex flex-column">
                                <h5 className="fw-bold" style={{color: "#bf2626"}}>Phone</h5>
                                <p className="text-secondary">{user?.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
                <div className="p-3">
                    <h1 className="mb-3">History Donations</h1>
                    <div style={{height: 400, overflowY: "scroll"}}>
                        <div className="bg-light p-3 mb-3">
                            <h5 className="fw-bold">The strength of people empower communities</h5>
                            <small className="text-secondary"><b className="fw-bold text-dark">Saturday:</b> 12 april 2024</small>
                            <p style={{color: "#bf2626"}} className="fw-bold mt-3">total: 4000000</p>
                        </div>
                        <div className="bg-light p-3 mb-3">
                            <h5 className="fw-bold">The strength of people empower communities</h5>
                            <small className="text-secondary"><b className="fw-bold text-dark">Saturday:</b> 12 april 2024</small>
                            <p style={{color: "#bf2626"}} className="fw-bold mt-3">total: 4000000</p>
                        </div>
                        <div className="bg-light p-3 mb-3">
                            <h5 className="fw-bold">The strength of people empower communities</h5>
                            <small className="text-secondary"><b className="fw-bold text-dark">Saturday:</b> 12 april 2024</small>
                            <p style={{color: "#bf2626"}} className="fw-bold mt-3">total: 4000000</p>
                        </div>
                        <div className="bg-light p-3 mb-3">
                            <h5 className="fw-bold">The strength of people empower communities</h5>
                            <small className="text-secondary"><b className="fw-bold text-dark">Saturday:</b> 12 april 2024</small>
                            <p style={{color: "#bf2626"}} className="fw-bold mt-3">total: 4000000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
