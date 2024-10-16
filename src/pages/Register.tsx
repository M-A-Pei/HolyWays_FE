import { Controller, useForm } from "react-hook-form"
import { api, setAuthToken } from "../libs/api"
import { toast } from "react-toastify"
import { useUser } from "../state/store"
import { useNavigate } from "react-router-dom"

const styles = {
    input: {
        width: "100%",
        padding: "12px 20px",
        backgroundColor: "#f1f1f1",
        marginBottom: "10px",
        border: "solid 2px #ccc",
    },
    button: {
        width: "100%",
        padding: "12px 20px",
        backgroundColor: "#bf2626",
        marginTop: "20px"
    }
}

export default function Register() {
    const { control, handleSubmit } = useForm()
    const setUser = useUser(state => state.setUser)
    const navigate = useNavigate();

    async function onSubmit(data: any) {
        try {
            const response = await api.post('/auth/register', data)
            const token = response.data
            setAuthToken(token)
            const user = await api.get("/auth/me");
            setUser({ name: user.data.name, email: user.data.email, phone: user.data.phone })
            localStorage.setItem("token", token)
            toast.success("Login successful")
            navigate("/")
        } catch (error) {
            toast.error("Invalid email or password")
            console.log(error)
        }
    }

    return (
        <div>
            <h1 className="mb-4">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) =>
                            <input {...field} type="email" style={styles.input} className="form-control" placeholder="email" required />
                        }
                    />

                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) =>
                            <input {...field} type="password" style={styles.input} className="form-control" placeholder="password" required />
                        }
                    />

                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) =>
                            <input {...field} type="text" style={styles.input} className="form-control" placeholder="Full Name" required />
                        }
                    />

                    <button type="submit" style={styles.button} className="btn text-light">Register</button>
                </div>
            </form>
        </div>
    )
}
