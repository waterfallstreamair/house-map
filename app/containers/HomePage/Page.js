/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Column from '../../components/Column';
import H3 from '../../components/H3';
import Content from '../../components/Content';
import Search from '../../components/Search';
//import Head from '../../components/Head';
import Templates from './Templates';
import Properties from './Properties';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getTemplatesRequest();
   // this.props.getPropertiesRequest();
  }

  setFilter = ({ event, properties }) => {
    this.props.setFilter({ properties, filter: event.target.value })
  };
  
  setTemplate = ({ template }) => {
    this.props.setTemplate({ template })
  }
  
  render() {
    const { templates, properties, template, filtered } = this.props;
    const selected = template || (templates && templates[0]) || false
    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="A House map application" />
        </Helmet>
        <Content>
          <Column key="templates">
            <H3>Templates</H3>
            <Search
              placeholder="Search address..."
              onKeyUp={e => this.setFilter({ event: e, properties })}
            />
            <Templates templates={templates} onClick={this.setTemplate} />
          </Column>
          {     
            properties && (
              <Properties 
                template={selected} 
                properties={filtered || properties} />
            )
          }
        </Content>
      </article>
    );
  }
}

HomePage.propTypes = {
  templates: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  properties: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  getTemplatesRequest: PropTypes.func.isRequired,
  getPropertiesRequest: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  template: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  filtered: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
};

export default HomePage;
