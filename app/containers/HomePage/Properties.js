import React from 'react';
import PropTypes from 'prop-types';

import Item from '../../components/Item';
import Title from '../../components/Title';
import Text from '../../components/Text';
import List from '../../components/List';
import { 
  Wrapper, 
  ItemWrapper, 
  PriceWrapper,
  AreaWrapper, 
  AddessWrapper,
} from './Wrappers';

import styled from 'styled-components';

const Img = ({ source, children }) => {
  const Styled = styled.div`
    background-image: url("${source}");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 10em;
  `;
  return <Styled>{children}</Styled>
}

const Children = styled.div`
  padding-left: 1em;
  padding-top: 1em;
`;
  
const Image = ({ value, children }) =>
  <Img source={value || ''} >{children}</Img>
  
const Address = ({ value }) => 
  <AddessWrapper>{value || ''}</AddessWrapper>
  
const Price = ({ value }) => 
  <PriceWrapper>{value ? `$${value}` : ''}</PriceWrapper>
  
const Area = ({ value }) =>
  <AreaWrapper>{value ? `${value} sq.ft.` : ''}</AreaWrapper>

const ByName = ({ name, value, children }) => (
    <div>
      {name === 'IMAGE' && 
        <Image value={value && value[0]} >
          {children && <Children>{children}</Children>}
        </Image>
      }
      {name === 'ADDRESS' && <Address value={value} />}
      {name === 'PRICE' && <Price value={value} />}
      {name === 'AREA' && <Area value={value} />}
    </div>
)

const ChildrenList = ({ template, property }) => (
    <div>
      {template.map((e, i) => 
        <ByName key={`sub-byname-${i}`} name={e.component} value={property[e.field]} />
      )}
    </div>
);

const OrderedList = ({ template, property }) => (
    <div>
      {template && template.length && template.map((e, i) => 
        <ByName key={`byname-${i}`} name={e.component} value={property[e.field]} >
          {e.children && 
            <ChildrenList template={e.children} property={property} />}
        </ByName>
      )}
    </div>
);

const Properties = ({ template, properties }) => (
  <Wrapper>
    {properties.map(e => (
    <ItemWrapper key={`property-${e.id}`}>
      <Item>
        <Title>{`ID ${e.id}`}</Title>
        <OrderedList template={template && template.template} property={e} />
      </Item>
    </ItemWrapper>
    ))}
  </Wrapper>
);

Properties.propTypes = {
  template: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  properties: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
};

export default Properties;
