import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

import TokenContext from '../contexts/TokenContext';

export default function SignIn() {
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const setToken = useContext(TokenContext);
    const navigate = useNavigate();

    async function handleSignin() {
        try {
            const URL = "/auth/sign-in";
            const body = {
                email: formData.email,
                password: formData.password
            }
            const response = await axios.post(URL, body);
            response.status === 200 ? handleSuccess(response.token) : handleError(response.data);
        } catch (error){
            console.log(error);
            resetAll();
        }
    }

    function handleSuccess(res) {
        setToken(res.token);
        navigate("/timeline");
    }

    function handleError(res) {
        console.log(res.error);
        resetAll();
    }

    function resetAll() {
        setHasSubmitted(false);
        setFormData({
            email: "",
            password: ""
        })
    }

    function getRandomInt(max, min) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function validateForm() {
        return formData.email?.length > 0 && formData.password?.length > 0 && !hasSubmitted ? '' : "disabled";
    }

    return (
        <RightSide>
            <form onSubmit={(e) => {
                e.preventDefault();
                setHasSubmitted(true);
                setTimeout(() => {
                    handleSignin();
                }, getRandomInt(500, 2000));
            }}>
                <input type="email" 
                placeholder="e-mail" 
                name="email"
                value={formData.email}
                onChange={handleInputChange} 
                required 
                />
                <input type="password" 
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange} 
                required   
                />
                <button type="submit" className={validateForm()}>
                    {
                        !hasSubmitted ? "Log In" :
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

const RightSide = styled.section`
    & {
        display: flex;
        height: 100vh;
        width: 40vw;
        right: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #333333;
    }

    form {
        display: flex;
        flex-direction: column;
        margin: 0 auto 22px auto;
    }

    input {
        width: 429px;
        height: 65px;
        background: #FFFFFF;
        border-radius: 6px;
        border: 1px solid #FFF;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 40px;
        color: #000000;
        margin: 0 auto 13px auto;
        padding-left: 17px;

        ::placeholder {
            color: #9F9F9F;
        } 
    }

    button {
        width: 429px;
        height: 65px;
        background: #1877F2;
        border-radius: 6px;
        border: 1px solid #1877F2;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3 {
        width: 262px;
        height: 24px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-decoration-line: underline;
        color: #FFFFFF;
    }
`