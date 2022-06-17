import { ContentLP } from "./style";

import SignIn from "../../components/SignIn.js";
import Outdoor from "../../components/Outdoor.js";

export default function LoginPage() {
    return (
        <ContentLP>
            <Outdoor></Outdoor>
            <SignIn></SignIn>
        </ContentLP>
    )
}