import { AuthData } from "../../auth/AuthWrapper"

export const Account = () => {
    const { user } = AuthData();
    return (
        <div className="page">
            <h2> Acount page</h2>
            <p> Bienvenue : {user.name} </p>
        </div>
    )

}