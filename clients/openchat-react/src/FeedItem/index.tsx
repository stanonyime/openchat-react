import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';




const StyledFeedItem = styled.div`
display: flex;
padding: 0.5em;
background-color: #fff;

`;
const size = '4em';
const AvatarItem = styled.div`
    border-radius: ${size};
    height: ${size};
    background-color: lightgray;
    margin-right: 1em;
    width: ${size};
`;

const FeedContent = styled.div`
flex:1;
  display  : flex;
  flex-direction: column;
  border-bottom: 1px solid #efefef;
  padding-bottom: 1em;
`;
const FeedHeader = styled.div`
  display  : flex;
  justify-content: space-between;
  padding-bottom:0.5em;
`;

const FeedName = styled.span`
  font-weight:600;
`;
const FeedTime = styled.span`
  font-size:12px;
  color: #666;
`;

export default () => {
    return (
        <StyledFeedItem>
            <AvatarItem />

            <FeedContent>
                <FeedHeader>
                    <FeedName>John Galt</FeedName>
                    <FeedTime>Yesterday</FeedTime>
                </FeedHeader>
                <span>What's up</span>
            </FeedContent>

        </StyledFeedItem>
    );
}
