interface props{
    title: string,
    total: number,
    date: string
}

export default function DonationCard({title, total, date}: props) {
    return (
            <div className="bg-light p-3 mb-3">
                <h5 className="fw-bold">{title}</h5>
                <small className="text-secondary">{date}</small>
                <p style={{color: "#bf2626"}} className="fw-bold mt-3">total:{total}</p>
            </div>
        )
}