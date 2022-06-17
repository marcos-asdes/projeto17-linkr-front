import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { RightSide } from "../pages/LoginPage/style.js";

export default function SignIn({email, password, setPassword, setEmail, loading, setLoading}) {
    function Login(e) {
        setLoading(true);
        e.preventDefault();
        // continue

    }
    return (
        <RightSide>
            <form onSubmit={Login}>
                <input type="email" 
                placeholder="e-mail" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                disabled={loading ? "disabled" : ""} 
                />
                <input type="password" 
                placeholder="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                disabled={loading ? "disabled" : ""}  
                />
                <button type="submit">
                    {
                        !loading ? "Log In" :
                        <ThreeDots color="#FFFFFF" height="15px" /> 
                    }
                </button>
            </form>
            <Link to={"/sign-up"} style={{ textDecoration: 'none' }}>
                <h3>First time? Create an account!</h3>
            </Link>
        </RightSide>
    )
}