import { useEffect, useMemo, useState } from "react"
import { useUser } from "../state/store"
import { useNavigate } from "react-router-dom"
import { api, setAuthToken } from "../libs/api"
import DonationCard from "../components/DonationCard"

export default function Profile() {
    const navigate = useNavigate()
    const user = useUser((state) => state.user)
    const [donations, setDonations] = useState<object[]>([])

    async function getDonations() {
        try {
            const token = localStorage.getItem("token")
            if (token) {
                setAuthToken(token)
                const response = await api.get('/donation/ByDonator/' + user?.email)
                setDonations(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user == null) {
            navigate('/')
        }
        getDonations()
    }, [])

    useMemo(() => {
        console.log("donation", donations)
    }, [donations])

    return (
        <div className="row mt-5">
            <div className="col-lg-6 d-flex justify-content-center mb-5">
                <div className="p-2">
                    <h1 className="mb-4">My Profile</h1>
                    <div className="d-flex gap-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mMNz8YCBvYmnr3BQUPX__YsC_WtDuAevwg&s" alt="" />
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-column">
                                <h5 className="fw-bold" style={{ color: "#bf2626" }}>Full Name</h5>
                                <p className="text-secondary">{user?.name}</p>
                            </div>

                            <div className="d-flex flex-column">
                                <h5 className="fw-bold" style={{ color: "#bf2626" }}>Email</h5>
                                <p className="text-secondary">{user?.email}</p>
                            </div>

                            <div className="d-flex flex-column">
                                <h5 className="fw-bold" style={{ color: "#bf2626" }}>Phone</h5>
                                <p className="text-secondary">{user?.phone ? user?.phone : "----------"}</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn text-light mt-3 w-100" style={{ backgroundColor: "#bf2626" }}>Edit Profile</button>
                </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
                <div className="p-3 w-100">
                    <h1 className="mb-3">History Donations</h1>
                    <div style={{ height: 400, overflowY: "scroll" }}>
                        {
                            donations.map((e: any) => {
                                return (
                                    <DonationCard
                                        title={e.fund.title}
                                        total={e.amount}
                                        date={e.date}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
