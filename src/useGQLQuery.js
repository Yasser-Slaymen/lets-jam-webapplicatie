import { useQuery } from 'react-query';
import {request}  from 'graphql-request';

export const useGQLQuery = (key, query, variables, config = {}) => {
  const endpoint = 'https://api-eu-west-2.hygraph.com/v2/clcyyb4443l3q01t8hceqaruo/master';

  const fetchData = async () => await request(endpoint, query, variables)

  return useQuery(key, fetchData, config)
};