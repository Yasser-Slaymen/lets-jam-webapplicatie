import {GraphQLClient, gql}  from 'graphql-request';

export const graphcms = new GraphQLClient(process.env.REACT_APP_API)
const category =`
id,
title,
slug
`
export const QUERY_SLUG_CATEGORIES = gql`
{
  categories(){
    title,
    slug
  }
}




// export const testQuery = query Workouts 
//   workouts() {
//     id
//     title,
//     slug
  
// }}`;

// import { useQuery } from 'react-query';
// import {request}  from 'graphql-request';

// export const useGQLQuery = (key, query, variables, config = {}) => {
//   const endpoint = 'https://api-eu-west-2.hygraph.com/v2/clcyyb4443l3q01t8hceqaruo/master';

//   const fetchData = async () => await request(endpoint, query, variables)

//   return useQuery(key, fetchData, config)
// };

// import {GraphQLClient, gql, request}  from 'graphql-request';

// export const graphcms = new GraphQLClient(process.env.REACT_APP_API)
// const category =`
// id,
// title,
// slug
// `
// export const QUERY_SLUG_CATEGORIES = gql`
// {
//   categories(){
//     title,
//     slug
//   }
// }
// `

