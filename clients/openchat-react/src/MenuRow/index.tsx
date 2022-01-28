import React from 'react';
import styled from 'styled-components';
import { MdAutorenew, MdCircle } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';



const StyledMenuRow = styled.div`
display: flex;
justify-content: space-between;
padding: 1em;
background-color: #ebeef2;
`;

const Icon = styled.span`
    padding: 0 0.5em;
`


const MenuRow = () => {
    return (
        <StyledMenuRow>
            <div>
                <Icon><MdCircle /></Icon>
            </div>
            <div>
                <Icon><MdAutorenew /></Icon>
                <Icon><AiOutlinePlus /></Icon>
                <Icon><BsThreeDots /></Icon>
            </div>

        </StyledMenuRow>
    );
}

export default MenuRow;
