import { useState } from "react"
import { api } from "../libs/api";
import { toast } from "react-toastify";

type WrapperComponentProps = {
    name: string
    children: React.ReactNode;
    amount: number
    id: string
    image: string
};
const ApproveModal: React.FC<WrapperComponentProps> = ({ children, name, amount, id, image }) => {
    const [isDropdown, setIsDropdown] = useState(false)

    async function onApprove() {
        try {
            await api.patch(`/donation/${id}`)
            toast.success("Donation approved!")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div onClick={() => setIsDropdown(!isDropdown)}>
                {children}
            </div>
            <div className={`dropdown-menu ${isDropdown ? 'show' : ''} p-4`} style={{ width: "500px" }}>
                <div className="d-flex flex-column gap-3">
                    <h5 className="fw-bold">{name}</h5>
                    <input type="text" value={amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} className="form-control" placeholder="Nominal Donation" disabled />
                    <img src={image} alt="" height={`400`} width={`400`} />
                    <button onClick={onApprove} className="btn text-light" style={{ backgroundColor: "#bf2626" }}>Approve</button>
                </div>
            </div>
        </>
    )
}

export default ApproveModal
