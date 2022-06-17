import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";

import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";

import { getUsersByName } from "../services/api";

const MIN_LENGTH_SEARCH = 3;
const DEBOUNCE_TIME = 300;

export default function SearchBar() {
    const [filteredData, setFilteredData] = useState([]);

    async function handleFilter(event) {
        const searchWord = event.target.value;

        if (searchWord.length < MIN_LENGTH_SEARCH) {
            hideResults();
        }
        else {
            try {
                const response = await getUsersByName(searchWord);
                const users = response.data;
                setFilteredData(users);
            } catch (error) {
                alert(
                    "An error occured while trying to fetch the users, please refresh the page."
                );
            }
        }
    };

    function hideResults() {
        setFilteredData([]);
    };

    const searchResults = filteredData.map((user, index) => {
        return (
            <User key={index}>
                <img src={user.pictureURL} alt="user icon" />
                <span>{user.name}</span>
            </User>
        );
    });

    return (
        <Content className="search">
            <SearchInputs>
                <DebounceInput
                    type="text"
                    placeholder="Search for people"
                    minLength={MIN_LENGTH_SEARCH}
                    debounceTimeout={DEBOUNCE_TIME}
                    onChange={handleFilter}
                    onFocus={handleFilter}
                    onBlur={hideResults}
                />
                <IconContext.Provider value={{ className: "icon" }}>
                    <AiOutlineSearch />
                </IconContext.Provider>
            </SearchInputs>
            {
                filteredData.length !== 0 && (
                    <SearchResults>
                        {searchResults}
                    </SearchResults>
                )
            }
        </Content>
    )
};

const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E7E7E7;
    border-radius: 8px;
    max-width: 563px;

    z-index: 1;
`;

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

        @media (max-width: 613px) {
            font-size: 17px;
            line-height: 20px;
        }
    };

    input::placeholder{
        color: #C6C6C6;
    };

    input:focus{
        outline: none;
    };

    .icon{
        position: absolute;
        top: 9px;
        right: 23px;
        
        font-size: 27px;
        color: #C6C6C6;
    };
`;

const SearchResults = styled.div`
    width: 100%;
    height: fit-content;
    max-height: 135px;
    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar{
        display: none;
    };
`;

const User = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;

    cursor: pointer;
    
    img {
        width: 39px;
        height: 39px;
        border-radius: 50%;
        margin-left: 17px;
    }

    span {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: #515151;
        margin-left: 12px;
    }

    &:hover{
        background-color: lightgrey;
    }
`;