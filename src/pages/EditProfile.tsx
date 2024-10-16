import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUser } from "../state/store";
import { useEffect, useMemo, useState } from "react";
import { api, setAuthToken } from "../libs/api";
import { toast } from "react-toastify";
import EditPfpModal from "../components/EditPfpModal";

const styles = {
    input: {
        width: "100%",
        padding: "12px 20px",
        backgroundColor: "#e1e1e1",
        marginBottom: "10px",
        border: "solid 2px #ccc",
    },
    button: {
        width: "260px",
        backgroundColor: "#bf2626",
        marginTop: "20px",
        marginLeft: "auto",
        heigth: "15px"
    }
}

export default function EditProfile() {
    const navigate = useNavigate()
    const user = useUser((state) => state.user)
    const [userFromEmail, setUserFromEmail] = useState<any>({})

    async function getUserFromEmail() {
        try {
            const response = await api.get(`/users/email/${user?.email}`)
            setUserFromEmail(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function onEdit(data: any) {
        try {
            const token = localStorage.getItem("token")
            if (token) {
                setAuthToken(token)
                const response = await api.patch(`/users`, data)
                console.log(response.data)
                toast.success("Profile edited successfully")
                navigate("/profile")
            }
        } catch (error) {
            toast.error("Failed to edit profile")
            console.log(error)
        }
    }
    useEffect(() => {
        if (user == null) {
            navigate('/')
        }
        getUserFromEmail()

    }, [])

    const { control, handleSubmit, setValue } = useForm()

    useMemo(() => {
        setValue("name", userFromEmail?.name)
        setValue("email", userFromEmail?.email)
        setValue("phone", userFromEmail?.phone)
    }, [userFromEmail])


    return (
        <div className="row d-flex justify-content-center">
            <div className="col-lg-6 mt-4 px-5 border border-secondary p-3 rounded">
                <h1 className="mb-3 text-center">Edit Your Profile</h1>
                <form onSubmit={handleSubmit(onEdit)} encType="multipart/form-data">
                    <div className="form-group d-flex flex-column">
                        <div className="relative mb-3 align-self-center" style={{ width: "200px", height: "200px" }}>
                            <img
                                className="rounded-circle w-100 h-100 border border-secondary object-fit-cover"
                                src={userFromEmail?.image ? userFromEmail?.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt=""
                            />
                            <EditPfpModal image={userFromEmail?.image} />
                        </div>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) =>
                                <input {...field} type="text" style={styles.input} className="form-control" placeholder="name" required />
                            }
                        />

                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) =>
                                <input {...field} type="email" style={styles.input} className="form-control" placeholder="email" required />
                            }
                        />

                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) =>
                                <input {...field} type="text" style={styles.input} className="form-control" placeholder="phone" required />
                            }
                        />

                        <button type="submit" style={styles.button} className="btn text-light">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}