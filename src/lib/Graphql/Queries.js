import { useParams } from 'react-router-dom';

function Product({ products }) {
  const { slug } = useParams();

  const product = products.find((product) => product.slug === slug);

  return <h1>{product.name}</h1>;
}

export default Product;

// import { useQuery } from 'react-query';
// import {request } from 'graphql-request';

// export const useGQLQuery = (key, query, variables, config = {}) => {
//   const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9ocu5vw0djy01uk0jvtb81s/master'

//   const fetchData = async () => await request(endpoint, query, variables)

//   return useQuery(key, fetchData, config)
// };


// export const workoutsLatestQuery = `query Qategories {
//   categories(){
//     title 
//     slug
//   }}`;
  
// import {GraphQLClient, gql}  from 'graphql-request';

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

