import * as constants from './constants';

export const getTemplatesRequest = () => ({
  type: constants.TYPE_TEMPLATES_REQUEST,
});

export const getTemplates = options => {
  const { templates } = options;
  return {
    type: constants.TYPE_TEMPLATES_SUCCESS,
    templates,
  };
};

export const getPropertiesRequest = () => {
  return {
    type: constants.TYPE_PROPERTIES_REQUEST,
  };
};

export const getProperties = options => {
  const { properties } = options;
  return {
    type: constants.TYPE_PROPERTIES_SUCCESS,
    properties: properties.data,
  };
};

export const setTemplate = options => {
  const { template } = options;
  return {
    type: constants.TYPE_TEMPLATE_SET,
    template,
  };
};

export const setFilter = ({ properties, filter }) => {
  const filterLower = filter.toLowerCase()
  const filtered = properties.filter(e => 
    e.full_address.toLowerCase().includes(filterLower)
  )
  return {
    type: constants.TYPE_FILTER_SET,
    properties: filtered,
  };
};