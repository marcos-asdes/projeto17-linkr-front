import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";

import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
//import { AiOutlineClose } from "react-icons/ai";

export default function SearchBar() {
    return (
        <div className="search">
            <SearchInputs>
                <DebounceInput
                    type="text"
                    placeholder="Search for people"
                />
                <IconContext.Provider value={{ className: "searchIcon" }}>
                    <AiOutlineSearch />
                </IconContext.Provider>
            </SearchInputs>
        </div>
    )
};

const SearchInputs = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    input {
        width: 100%;
        height: 45px;

        display: flex;
        align-items: center;
        padding-left: 17px;
        
        font-family: 'Lato';
        font-size: 19px;
        line-height: 23px;

        background: #FFFFFF;
        border: none;
        border-radius: 8px; 
    };

    input::placeholder{
        color: #C6C6C6;
    };

    input:focus{
        outline: none;
    };

    .searchIcon{
        position: absolute;
        top: 9px;
        right: 23px;
        
        font-size: 27px;
        color: #C6C6C6;
    };
`;