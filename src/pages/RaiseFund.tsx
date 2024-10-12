import { useNavigate } from "react-router-dom";
import FundCard from "../components/FundCard";
import image_3 from "/cardimage1.jpeg"
import { useUser } from "../state/store";
import { useEffect, useState } from "react";
import { api } from "../libs/api";

export default function RaiseFund(){
    const navigate = useNavigate()
    const user = useUser((state) => state.user)
    const [funds, setFunds] = useState<object[]>([])

    async function getFunds(){
        try{
            const response = await api.get(`/fund/ByUserEmail/${user?.email}`)
            console.log(response.data)
            setFunds([...response.data])
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getFunds()
        if(user == null){
            navigate('/')
        }
    }, [])
    return(
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-between p-3 px-5">
                <h1>My Raise Fund</h1>
                <button style={{backgroundColor: "#bf2626", height: "37px"}} onClick={() => navigate('/makeRaiseFund')} className="btn text-light">Make Raise Fund</button>
            </div>
            
            <div className="col-lg-12 d-flex flex-wrap justify-content-center gap-4">
                    {
                         funds.map((e: any)=>
                            <FundCard
                                image={image_3}
                                title={e.title}
                                description={e.description}
                                progress={(e.currentFunds/e.goal)*100}
                                total={e.goal}
                                id={e.id}
                            />
                        )
                    } 
            </div>
        </div>
    )
}