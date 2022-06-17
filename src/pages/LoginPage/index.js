import { Content } from "./style";

import SignIn from "../../components/SignIn.js";
import Outdoor from "../../components/Outdoor.js";

export default function LoginPage() {
    return (
        <Content>
            <Outdoor></Outdoor>
            <SignIn></SignIn>
        </Content>
    )
}