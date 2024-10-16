import { useState } from 'react'
import { api, setAuthToken } from '../libs/api'
import { toast } from 'react-toastify'
import { useForm, Controller } from 'react-hook-form'


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

export default function DonateModal({ id }: { id: string }) {
    const [isDropdown, setIsDropdown] = useState(false)
    const { handleSubmit, control } = useForm()

    const onDonate = async (data: any) => {
        try {
            const token = localStorage.getItem("token")
            if (token) {
                setAuthToken(token)
                const formData = new FormData()
                formData.append("amount", data.amount)
                formData.append("image", data.image[0])
                await api.post(`/donation/${id}`, formData)
                toast.success("thank you so much for your donation!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button className="btn text-light mb-3" onClick={() => setIsDropdown(!isDropdown)} style={{ backgroundColor: "#bf2626" }}>
                Donate
            </button>
            <div className={`dropdown-menu ${isDropdown ? 'show' : ''} p-4`} style={{ width: "500px" }}>
                <form onSubmit={handleSubmit(onDonate)} className="d-flex flex-column gap-3">
                    <Controller
                        name='amount'
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="number"
                                style={styles.input}
                                className="form-control"
                                placeholder="Nominal Donation"
                                required
                            />
                        )}
                    />

                    <Controller
                        name='image'
                        control={control}
                        render={({ field }) => (
                            <>
                                <input id="image" onChange={(e) => field.onChange(e.target.files)} type="file" className="d-none" required />
                                <div className="d-flex justify-content-between">
                                    <label htmlFor="image" style={styles.imageButton} className="btn text-light btn-sm d-flex align-items-center gap-2">
                                        <b className="fw-normal">Attach Payment</b> <i className="bi bi-cash-coin"></i>
                                    </label>
                                    <small className="text-secondary">*transfers can be made to HolyWays account</small>
                                </div>
                            </>
                        )}
                    />

                    <button type="submit" onClick={onDonate} style={styles.button} className="btn text-light">Donate</button>
                </form>
            </div>
        </>
    )
}
