import { AuthData } from "../../auth/AuthWrapper";
import { useNavigate } from 'react-router-dom'
import { useReducer, } from 'react'
import { useState } from "react";

export const Login = () => {

    const navigate = useNavigate();
    const { login } = AuthData();
    const [formData, setFormData] = useReducer((formData, newItem) => { return ({ ...formData, ...newItem }) }, { userName: "", password: "" });
    const [errorMessage,setErrorMessage] = useState("")

    const dologin = async () => {
        try {
            await login(formData.userName, formData.password);
            navigate("/account");

        } catch (error){
            setErrorMessage(error);
        }
     
    }

    return (
        <div className="page">
        <h2>Login page</h2>
            <div className="inputs">
                <div className="input">
                    <input id="userName" value={formData.userName} onChange={(e) => setFormData({ userName: e.target.value })} type="text" />

                </div>

                <div className="input">
                    <input id = "password" value={formData.password} onChange={(e)=> setFormData({password:e.target.value}) } type="password" />

                    <div className="buton">
                        <button onClick={dologin}>  Login </button>

                    </div>
                    { errorMessage ?
                        <div className="error"> {errorMessage}</div>
                        :null
                    }
                </div>
            </div>
        </div>
    )
}