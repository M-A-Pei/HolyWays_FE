import image_3 from "/cardimage1.jpeg"
import { useParams } from "react-router-dom"

export default function FundDetail(){
    const {id} = useParams()

    return(
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
                <div className="d-flex gap-5 p-3 col-lg-11">
                    <img src={image_3} width={650} height={500} />
                    <div className="d-flex flex-column gap-3">
                        <h1 className="fw-bold mb-3">the strength of people power communities</h1>
                        <div className="d-flex flex-column">
                            <div className="d-flex gap-3">
                                <h4 className="fw-bold" style={{color: "#bf2626"}}>Rp. 20.000</h4>
                                <p className="text-secondary">gathered from</p> 
                                <h4 className="fw-bold text-secondary">Rp. 900.000</h4>
                            </div>
                            <div className="progress mb-3" style={{ height: "10px", border: "solid gray 0.5px" }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: `10%` }}></div>
                            </div>
                            <div>
                                <div className="d-flex align-items-center gap-2">
                                    <h4 className="fw-bold">200</h4>
                                    <i className="text-secondary fw-bold">Donations</i>
                                </div>
                            </div>
                        </div>

                        <p className="text-secondary" style={{height: 100, overflowY: "scroll"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore voluptates et ad esse optio minima placeat commodi, fugiat veniam quam voluptatem libero similique doloribus quisquam explicabo excepturi dolore expedita?
                        </p>
                        
                        <button className="btn text-light" style={{backgroundColor:"#bf2626"}}>
                            Donate
                        </button>
                            
                            
                        
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