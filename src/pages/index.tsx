import image_1 from "/image_1.jpg"
import image_2 from "/image_2.jpg"
import image_3 from "/cardimage1.jpeg"
import image_4 from "/cardimage2.jpeg"
import image_5 from "/cardImage3.png"
import FundCard from '../components/FundCard';
import { useUser } from "../state/store"

export default function Index() {
    const user = useUser(state => state.user)
    console.log(user)
    return (
        <>
            <div style={{ height: "80vh", backgroundColor: "#bf2626" }} className="row m-0">
                <div className="col-lg-12 d-flex flex-wrap m-0">
                    <div className="col-lg-7 col-md-12 p-5 d-flex flex-column gap-3">
                        <h1 className="text-light fw-bold">While you are standing, try to reach out to people who are falling.</h1>
                        <p className="text-light" style={{ height: "100px", overflowY: "hidden", textOverflow: "ellipsis" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est, sapiente, facere recusandae consectetur qui vero similique blanditiis eius magni corporis autem saepe. A repellendus in itaque expedita, dignissimos repudiandae.</p>

                        <button className="btn bg-light fw-bold col-lg-3" style={{ color: "#bf2626" }} type="submit">Donate Now</button>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <img src={image_1} width="70%" style={{ marginLeft: "auto", display: "relative", transform: "translate(40%, 15%)" }} />
                    </div>
                </div>
            </div>
            <div className="row m-0 p-3 mb-5">
                <div className="col-lg-12 d-flex flex-wrap">
                    <div className="col-lg-5 col-md-12" style={{ display: "relative", transform: "translate(0%, -6%)" }}>
                        <img src={image_2} width="70%" alt="" />
                    </div>
                    <div className="col-lg-7 col-md-12 d-flex flex-column gap-3" style={{ display: "relative", transform: "translate(0%, 10%)" }}>
                        <h1 className="fw-bold">Your Fund is very helpfull for people affected by forest fires is Kalimantan</h1>
                        <div className="d-flex flex-wrap">
                            <p className="col-lg-6 col-md-12">lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos temporibus fugiat a! Atque ducimus voluptate quo accusamus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, praesentium. nostrum aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.</p>
                            <p className="col-lg-6 col-md-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis, nesciunt rerum quaerat mollitia impedit!</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center fw-bold" style={{ color: "#bf2626" }}>Donate Now</h1>
                </div>
                <div className="col-lg-12 d-flex justify-content-center p-5 flex-wrap gap-3">
                    <FundCard
                        image={image_3}
                        title="The strength of People, power of communities"
                        description="Some quick example text to build on the card title and make up the bulk of the card's content."
                        progress={25}
                        total={500000}
                    />

                    <FundCard
                        image={image_4}
                        title="empowering communities, end poverty"
                        description="Some quick example text to build on the card title and make up the bulk of the card's content."
                        progress={75}
                        total={90000}
                    />

                    <FundCard
                        image={image_5}
                        title="help our brothers and sisters in need"
                        description="Some quick example text to build on the card title and make up the bulk of the card's content."
                        progress={65}
                        total={30000}
                    />
                </div>
            </div >
        </>
    )
}
