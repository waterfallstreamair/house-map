import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  align-items: flex-start;
  align-content: flex-start;
  overflow-y: scroll;
  margin-top: 1em;
  margin-left: 1em;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  align-items: stretch;
  align-content: stretch;
  overflow-y: hidden;
  width: 25em;
  height: 20em;
  margin-bottom: 1em;
`;

export const PriceWrapper = styled.div`
  font-weight: bold;
`;

export const AreaWrapper = styled.div`
  color: #999999;
  font-size: 0.75em
`;

export const AddessWrapper = styled.div`
  text-align: left;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: #999999;
`;