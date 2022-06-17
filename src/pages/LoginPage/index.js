import { useState } from "react";

import { Content } from "./style";

import SignIn from "../../components/SignIn.js";
import Outdoor from "../../components/Outdoor.js";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Content>
            <Outdoor></Outdoor>
            <SignIn email={email} password={password} setEmail={setEmail} setPassword={setPassword} loading={loading} setLoading={setLoading} ></SignIn>
        </Content>
    )
}