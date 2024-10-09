import { Controller, useForm } from "react-hook-form"
import { api } from "../libs/api"

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

async function onSubmit(data: any) {
    try {
        await api.post('/auth/register', data)
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}

export default function Register() {
    const { control, handleSubmit } = useForm()

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
