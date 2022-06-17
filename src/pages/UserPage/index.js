import { useParams } from "react-router-dom";

export default function UserPage() {
    const { id: userId } = useParams();
    console.log()
    return (
        <>
            <h1>Exibindo as informações do usuário {userId}</h1>
        </>
    )
};