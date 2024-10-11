interface props {
    title: string,
    description: string,
    image: string,
    progress: number,
    total: number,
}

export default function FundCard({ title, description, image, progress, total }: props) {
    return (
        <div className="card col-lg-3 col-sm-12">
            <img className="card-img-top" width={"100%"} height={"200px"} src={image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title fw-bold ">{title}</h5>
                <p className="card-text text-muted" style={{ height: "100px", overflowY: "scroll", textOverflow: "ellipsis" }}>{description}</p>

                <div className="progress mb-3" style={{ height: "8px" }}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="d-flex justify-content-between">
                    <p className="text-muted fw-bold">Rp. {total}</p>
                    <a href="#" className="btn text-light" style={{ backgroundColor: "#bf2626" }} >Donate</a>
                </div>
            </div>
        </div>
    )
}