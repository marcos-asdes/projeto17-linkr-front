import styled from "styled-components";

export default function Outdoor() {
    return (
        <LeftSide>
            <div>
                <h1>linkr</h1>
                <div>
                    <h2>save, share and discover</h2>
                    <h2>the best links on the web</h2>
                </div>
            </div>
        </LeftSide>
    )
}

const LeftSide = styled.section`
    & {
        display: flex;
        height: 100vh;
        width: calc(100% - 40vw);
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
        background-color: #151515;
        box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    }
    h1 {
        width: 233px;
        height: 117px;
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 106px;
        line-height: 117px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
    h2 {
        width: 442px;
        height: 60px;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 43px;
        color: #FFFFFF;
    }
`