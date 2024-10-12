import FundCard from "../components/FundCard";
import image_3 from "/cardimage1.jpeg"
import image_4 from "/cardimage2.jpeg"
import image_5 from "/cardImage3.png"

export default function RaiseFund(){
    return(
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-between p-3 px-5">
                <h1>My Raise Fund</h1>
                <button style={{backgroundColor: "#bf2626", height: "37px"}} className="btn text-light">Make Raise Fund</button>
            </div>
            
            <div className="col-lg-12 d-flex flex-wrap justify-content-center gap-4">
                <FundCard
                    image={image_3}
                    title="The strength of People, power of communities"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    progress={25}
                    total={500000}
                    id="1"
                />

                <FundCard
                    image={image_4}
                    title="empowering communities, end poverty"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    progress={75}
                    total={90000}
                    id="1"
                />

                <FundCard
                    image={image_5}
                    title="help our brothers and sisters in need"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    progress={65}
                    total={30000}
                    id="1"
                />
            </div>
        </div>
    )
}