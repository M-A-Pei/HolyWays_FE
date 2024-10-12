import { useEffect, useState } from "react"
import image_3 from "/cardimage1.jpeg"
import { useParams } from "react-router-dom"
import { api } from "../libs/api"

const styles = {
    input: {
        width: "100%",
        backgroundColor: "#e1e1e1",
        border: "solid 2px #ccc",
    },
    button: {
        backgroundColor: "#bf2626",
        marginTop: "20px",
        heigth: "15px"
    },
    imageButton: {
        backgroundColor: "#bf2626",
        marginBottom: "10px",
        width: "150px",
        heigth: "15px"
    }
}

export default function FundDetail(){
    const {id} = useParams()
    const [isDropdown, setIsDropdown] = useState(false)
    const [data, setData] = useState<any>()

    async function getDetail(){
        try {
            const response = await api.get(`/fund/${id}`)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getDetail() 
    }, [])

    return(
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
                <div className="d-flex gap-5 p-3 col-lg-11">
                    <img src={image_3} width={650} height={500} />
                    <div className="d-flex flex-column gap-3 w-100">
                        <h1 className="fw-bold mb-3">{data?.title}</h1>
                        <div className="d-flex flex-column">
                            <div className="d-flex gap-3">
                                <h4 className="fw-bold" style={{color: "#bf2626"}}>Rp. {data?.currentFunds}</h4>
                                <p className="text-secondary">gathered from</p> 
                                <h4 className="fw-bold text-secondary">Rp. {data?.goal}</h4>
                            </div>
                            <div className="progress mb-3" style={{ height: "10px", border: "solid gray 0.5px" }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: `10%` }}></div>
                            </div>
                            <div>
                                <div className="d-flex align-items-center gap-2">
                                    <h4 className="fw-bold">{data?.donations ? data?.donations.length : 0}</h4>
                                    <i className="text-secondary fw-bold">Donations</i>
                                </div>
                            </div>
                        </div>

                        <p className="text-secondary" style={{height: 100, overflowY: "scroll"}}>
                            {data?.description}
                        </p>
                        
                        <div>
                            <button className="btn text-light mb-3" onClick={() => setIsDropdown(!isDropdown)} style={{backgroundColor:"#bf2626"}}>
                                Donate
                            </button>
                            <div className={`dropdown-menu ${isDropdown ? 'show' : ''} p-4`} style={{width: "500px"}}>
                                <div className="d-flex flex-column gap-3">
                                    <input type="number" style={styles.input} className="form-control" placeholder="Nominal Donation" required />
                                    <input id="image" type="file" className="d-none" required />
                                    <div className="d-flex justify-content-between">
                                        <label htmlFor="image" style={styles.imageButton} className="btn text-light btn-sm d-flex align-items-center gap-2">
                                            <b className="fw-normal">Attach Payment</b> <i className="bi bi-cash-coin"></i>
                                        </label>
                                        <small className="text-secondary">*transfers can be made to HolyWays account</small>
                                    </div>
                                    <button type="submit" style={styles.button} className="btn text-light">Donate</button>
                                </div>
                            </div>
                        </div>
                        
                            
                            
                        
                    </div>
                </div>
            </div>

            <div className="col-lg-12 d-flex justify-content-center mt-5">
                <div className="col-lg-8 d-flex flex-column gap-2">
                    <h1>Donation List (200)</h1>
                    <div className="d-flex flex-column gap-3" style={{height: "400px", overflowY: "scroll"}}>
                        <div className="bg-light p-3">
                            <h5>Andi</h5>
                            <div className="d-flex gap-2">
                                <b className="fw-bold">Saturday</b>
                                <p>12 april 2024</p>
                            </div>
                            <h5 className="fw-bold" style={{color: "#bf0000"}}>Rp. 50000</h5>
                        </div>

                        <div className="bg-light p-3">
                        <h5>Andi</h5>
                        <div className="d-flex gap-2">
                            <b className="fw-bold">Saturday</b>
                            <p>12 april 2024</p>
                        </div>
                        <h5 className="fw-bold" style={{color: "#bf0000"}}>Rp. 50000</h5>
                        </div>

                        <div className="bg-light p-3">
                        <h5>Andi</h5>
                        <div className="d-flex gap-2">
                            <b className="fw-bold">Saturday</b>
                            <p>12 april 2024</p>
                        </div>
                        <h5 className="fw-bold" style={{color: "#bf0000"}}>Rp. 50000</h5>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}