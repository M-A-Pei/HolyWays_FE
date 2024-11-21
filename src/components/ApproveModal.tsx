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
            <div data-bs-toggle="modal" data-bs-target={`#Approve${id}Modal`}>
                {children}
            </div>

            <div className="modal fade" id={`Approve${id}Modal`} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="d-flex flex-column gap-3">
                            <h5 className="fw-bold">{name}</h5>
                            <input type="text" value={amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} className="form-control" placeholder="Nominal Donation" disabled />
                            <img src={image} alt="" height={`400`} width={`400`} />
                            <button onClick={onApprove} className="btn text-light" data-bs-dismiss="modal" style={{ backgroundColor: "#bf2626" }}>Approve</button>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ApproveModal
