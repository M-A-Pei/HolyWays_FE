import { useState } from "react";
import { api } from "../libs/api";
import { toast } from "react-toastify";

export default function EditPfpModal({ image }: { image: string }) {
    const [showModal, setShowModal] = useState(false);
    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const [pfp, setPfp] = useState<FileList | null>(null);

    async function handleEditPfp() {
        try {
            const formData = new FormData();
            formData.append("image", pfp![0]);
            await api.patch("/users/pfp", formData);
            handleClose();
            toast.success("Profile picture updated successfully");
        } catch (error) {
            toast.error("Failed to update profile picture");
            console.log(error);
        }
    }

    return (
        <>
            <i className="bi bi-camera-fill position-absolute"
                style={{
                    fontSize: "50px",
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -45%)'
                }}
                onClick={handleOpen}
            ></i>

            {/* Modal */}
            {showModal && (
                <div className="modal show fade d-block" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Profile Picture</h5>
                                <button type="button" className="btn-close" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="image" className="d-flex justify-content-center">
                                    <img
                                        className="rounded-circle w-50 h-50 border border-secondary object-fit-cover"
                                        src={image ? image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt=""
                                    />
                                </label>

                                <input type="file" id="image" className="d-none" onChange={(e) => setPfp(e.target.files)} />

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                    Cancel
                                </button>
                                <button type="button" className="btn text-light" style={{ backgroundColor: "#bf2626" }} onClick={handleEditPfp}>
                                    Save Picture
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal backdrop to close modal when clicking outside */}
            {showModal && <div className="modal-backdrop fade show" onClick={handleClose}></div>}
        </>
    )
}
