import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUser } from "../state/store";
import { useEffect } from "react";
import { api, setAuthToken } from "../libs/api";
import { toast } from "react-toastify";

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
    },
    imageButton: {
        backgroundColor: "#bf2626",
        marginBottom: "10px",
        width: "150px",
        heigth: "15px"
    }
}

export default function MakeRaiseFund(){
    const { control, handleSubmit } = useForm()
    const navigate = useNavigate()
    const user = useUser((state) => state.user)

    useEffect(()=>{
        if(user == null){
            navigate('/')
        }
    }, [])

    async function onSubmit(data: any){
        try{
            const token = localStorage.getItem("token")
            if(token){
                setAuthToken(token)
                const response = await api.post('/fund', data)
                console.log(response)
            }
            toast.success("Succesfully raised fund, we hope you the best!")
            navigate('/')
        }catch(error){
            toast.error("Failed to create fund")
        }
    }
    
    return(
        <div className="row d-flex justify-content-center">
            <div className="col-lg-9 mt-5 px-5">
                <h1 className="mb-3">Make Raise Fund</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group d-flex flex-column">
                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) =>
                            <input {...field} type="text" style={styles.input} className="form-control" placeholder="title" required />
                        }
                    />

                    <Controller
                        name="image"
                        control={control}
                        render={({ field }) =>
                            <>
                                <input {...field} id="image" type="file" className="d-none" placeholder="title" required />
                                <label htmlFor="image" style={styles.imageButton} className="btn text-light btn-sm">Attach thumbnail</label>
                            </>
                        }
                    />

                    <Controller
                        name="goal"
                        control={control}
                        render={({ field }) =>
                            <input {...field} type="number" style={styles.input} className="form-control" placeholder="Donation Goal" required />
                        }
                    />

                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) =>
                            <textarea {...field}  style={styles.input} className="form-control" rows={5} placeholder="Description" required />
                        }
                    />

                    <button type="submit" style={styles.button} className="btn text-light">Public fundraising</button>
                </div>
            </form>
            </div>
        </div>
    )
}