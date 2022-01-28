import React from 'react';
import styled from 'styled-components';
import FeedItem from './FeedItem';
import MenuRow from './MenuRow';
import SearchBar from './SearchBar';



const Page = styled.div`
display: flex;
height: 100%;
`;

const Left = styled.div`
background-color: #f2f5f3;
flex:1;

`;

const Right = styled.div`
background-color: #daebe0;
flex:2;
`;

function App() {
  return (
    <Page>
      <Left>
        <MenuRow />
        <SearchBar />
        <FeedItem />
      </Left>
      <Right>Right column</Right>
    </Page>
  );
}

export default App;
