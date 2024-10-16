import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../libs/api"
import DonationCard from "../components/DonationCard"
import DonateModal from "../components/DonateModal"
import { useUser } from "../state/store"
import ApproveModal from "../components/ApproveModal"

export default function FundDetail() {
    const { id } = useParams()
    const [data, setData] = useState<any>()
    const [donations, setDonations] = useState<object[]>([])
    const [unconfirmedDonations, setUnconfirmedDonations] = useState<object[]>([])


    const user = useUser((state) => state.user)


    async function getDetail() {
        try {
            const response = await api.get(`/fund/${id}`)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function getDonations() {
        try {
            const response = await api.get(`/donation/byFund/${id}/true`
            )
            console.log("yo", response.data)
            setDonations(response.data)
        } catch (error) {
            console.log("error in donations", error)
        }
    }

    async function getUnconfirmedDonations() {
        try {
            const response = await api.get(`/donation/byFund/${id}/false`
            )
            setUnconfirmedDonations(response.data)
        } catch (error) {
            console.log("error in donations", error)
        }
    }

    useEffect(() => {
        getDetail()
        getDonations()
        getUnconfirmedDonations()
    }, [])

    useMemo(() => { console.log("data", data) }, [donations])

    return (
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
                <div className="d-flex gap-5 p-3 col-lg-11">
                    <img src={data?.image} width={650} height={500} />
                    <div className="d-flex flex-column gap-3 w-100">
                        <h1 className="fw-bold mb-3">{data?.title}</h1>
                        <div className="d-flex flex-column">
                            <div className="d-flex gap-3">
                                <h4 className="fw-bold" style={{ color: "#bf2626" }}>Rp. {data?.currentFunds.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                <p className="text-secondary">gathered from</p>
                                <h4 className="fw-bold text-secondary">Rp. {data?.goal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                            </div>
                            <div className="progress mb-3" style={{ height: "10px", border: "solid gray 0.5px" }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: `${(data?.currentFunds / data?.goal) * 100}%` }}></div>
                            </div>
                            <div>
                                <div className="d-flex align-items-center gap-2">
                                    <h4 className="fw-bold">{donations.length ? donations.length : 0}</h4>
                                    <i className="text-secondary fw-bold">Donations</i>
                                </div>
                            </div>
                        </div>

                        <p className="text-secondary" style={{ height: 100, overflowY: "scroll" }}>
                            {data?.description}
                        </p>

                        <div>
                            <DonateModal id={String(id)} />
                        </div>




                    </div>
                </div>
            </div>

            <div className="col-lg-12 d-flex justify-content-center mt-5">
                <div className="col-lg-8 d-flex flex-column gap-2">
                    <h1>Donation List ({donations.length})</h1>
                    <div className="d-flex flex-column gap-3" style={{ height: "400px", overflowY: "scroll" }}>
                        {
                            donations.map((e: any) => {
                                return (
                                    <DonationCard
                                        title={e.donator.name}
                                        total={e.amount}
                                        date={e.date}
                                    />
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            {user?.email == data?.owner.email &&
                <div className="col-lg-12 d-flex justify-content-center mt-5">
                    <div className="col-lg-8 d-flex flex-column gap-2">
                        <h1>Donation has not been approved ({unconfirmedDonations.length})</h1>
                        <div className="d-flex flex-column gap-3" style={{ height: "400px", overflowY: "scroll" }}>
                            {
                                unconfirmedDonations.map((e: any) => {
                                    return (
                                        <ApproveModal name={e.donator.name} amount={e.amount} id={e.id} image={e.image}>
                                            <DonationCard
                                                title={e.donator.name}
                                                total={e.amount}
                                                date={e.date}
                                            />
                                        </ApproveModal>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            }

        </div>
    )
}