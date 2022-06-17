import styled from "styled-components";

const Content = styled.main`
    & {
        height: 100vh;
        width: 100vh;
        min-width: 100vw;
        background-color: #000;
        display: flex;
    }
`
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

export { Content, LeftSide, RightSide };