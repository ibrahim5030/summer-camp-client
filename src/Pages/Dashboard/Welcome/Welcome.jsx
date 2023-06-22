import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Welcome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="text-5xl font-bold text-center">
            <h3>Welcome Back {user.displayName}</h3>
        </div>
    );
};

export default Welcome;