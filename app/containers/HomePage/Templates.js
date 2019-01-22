import React from 'react';
import PropTypes from 'prop-types';

import Item from '../../components/Item';
import Title from '../../components/Title';
import Text from '../../components/Text';
import List from '../../components/List';

import styled from 'styled-components';

const Subitems = styled.div`
  margin-left: 2em;
`;

const Templates = ({ templates, onClick }) =>
  templates ? (
    <List>
      {templates.map(e => (
        <Item key={`template-${e.id}`} onClick={() => onClick({ template: e }) } >
          <Title>{`Template ${e.id}`}</Title>
          <Text>
            {e.template.map((v, j) => 
              <div key={`template-${j}`}>
                {v.component}
                <Subitems>
                  {v.children && v.children.map((c, i) => 
                    <div key={`subitem-${i}`}>{c.component}</div>
                  )}
                </Subitems>
              </div>
            )}
          </Text>
        </Item>
      ))}
    </List>
  ) : (
    ''
  );

Templates.propTypes = {
  templates: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Templates;
