import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';




const StyledSearchBar = styled.div`
display: flex;
padding: 0.5em;
margin: 0.8em;
background-color: #fff;
border-radius: 20px;
`;

const Icon = styled(MdSearch)`
    padding: 0 0.5em;
    font-size: 1.5em;
    margin-right: 1em;
`

const Input = styled.input`
    border: 0;
    padding: 0.5em;
`;


const SearchBar = () => {
    return (
        <StyledSearchBar>
            <Icon />
            <Input placeholder='Search or start new search...' />


        </StyledSearchBar>
    );
}

export default SearchBar;
