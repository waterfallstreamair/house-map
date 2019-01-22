import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Item from '../../components/Item';
import Title from '../../components/Title';
// import Text from '../../components/Text';
// import List from '../../components/List';
import {
  Wrapper,
  ItemWrapper,
  PriceWrapper,
  AreaWrapper,
  AddessWrapper,
} from './Wrappers';

const Img = ({ source, children }) => {
  const Styled = styled.div`
    background-image: url("${source}");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 10em;
  `;
  return <Styled>{children}</Styled>;
};

Img.propTypes = {
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  children: PropTypes.object,
};

const Children = styled.div`
  padding-left: 1em;
  padding-top: 1em;
`;

const Image = ({ value, children }) => (
  <Img source={value || ''}>{children}</Img>
);

Image.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.object,
};

const Address = ({ value }) => <AddessWrapper>{value || ''}</AddessWrapper>;

Address.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

const Price = ({ value }) => (
  <PriceWrapper>{value ? `$${value}` : ''}</PriceWrapper>
);

Price.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
};

const Area = ({ value }) => (
  <AreaWrapper>{value ? `${value} sq.ft.` : ''}</AreaWrapper>
);

Area.propTypes = {
  value: PropTypes.number,
};

const ByName = ({ name, value, children }) => (
  <div>
    {name === 'IMAGE' && (
      <Image value={value && value[0]}>
        {children && <Children>{children}</Children>}
      </Image>
    )}
    {name === 'ADDRESS' && <Address value={value} />}
    {name === 'PRICE' && <Price value={value} />}
    {name === 'AREA' && <Area value={value} />}
  </div>
);

ByName.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  children: PropTypes.object,
};

const ChildrenList = ({ template, property }) => (
  <div>
    {template.map(e => (
      <ByName
        key={`sub-byname-${e.component}`}
        name={e.component}
        value={property[e.field]}
      />
    ))}
  </div>
);

ChildrenList.propTypes = {
  template: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  property: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
};

const OrderedList = ({ template, property }) => (
  <div>
    {template &&
      template.length &&
      template.map(e => (
        <ByName
          key={`byname-${e.component}`}
          name={e.component}
          value={property[e.field]}
        >
          {e.children && (
            <ChildrenList template={e.children} property={property} />
          )}
        </ByName>
      ))}
  </div>
);

OrderedList.propTypes = {
  template: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  property: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
};

const Properties = ({ template, properties }) => (
  <Wrapper>
    {properties.map(e => (
      <ItemWrapper key={`property-${e.id}`}>
        <Item>
          <Title>{`ID ${e.id}`}</Title>
          {template && (
            <OrderedList template={template.template} property={e} />
          )}
        </Item>
      </ItemWrapper>
    ))}
  </Wrapper>
);

Properties.propTypes = {
  template: PropTypes.object,
  properties: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
};

export default Properties;
