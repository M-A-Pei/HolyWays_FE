interface props {
    title: string,
    total: number,
    date: string
}

export default function DonationCard({ title, total, date }: props) {
    const x = new Date(date);
    const day = x.toLocaleDateString('en-GB', {
        weekday: 'long',  // "Monday"
    });

    const formattedDate = x.toLocaleDateString('en-GB', {
        day: '2-digit',   // "13"
        month: 'long',    // "October"
        year: 'numeric',  // "2024"
    });

    return (
        <div className="bg-light p-3 mb-3 rounded w-100">
            <h5 className="fw-bold">{title}</h5>
            <small className="text-secondary"> <b className="text-dark">{day}</b> {formattedDate}</small>
            <p style={{ color: "#bf2626" }} className="fw-bold mt-3">total: Rp. {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
    )
}