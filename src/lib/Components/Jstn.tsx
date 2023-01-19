import "../Stylingcomponents/Test.css";
import Ttest from "./Ttest";
import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
// import Product from '../Graphql/Queries'




function Jst() {
    const [stories, setProducts] = useState(null);

    useEffect(() => {
      const fetchProducts = async () => {
        const { stories } = await request(
          'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9ocu5vw0djy01uk0jvtb81s/master',
          `
        {
            stories {
                id
                title
          }
        }
      `
        );
  
        setProducts(stories);
      };
  
      fetchProducts();
    }, []);
   
 return (
  <>
    <div className="test">
      <Ttest text="Test">
        <div>
            <div>

            </div>
            {!stories ? (
                'Loading....'
                ) : (<ul>
                    {stories.map(({ id, title, image }) => (
                        <li key={id}>
                        <p>{title}</p>
                         </li>

                    ))}

                </ul> )}
        
        </div>

      </Ttest>
    </div>
  </>
);
}
export default Jst;

// import { workoutsLatestQuery } from "../Graphql/Queries";
// import { GraphQLClient } from "graphql-request";
// import Ttest from "./Ttest";

// import React,{useState, useEffect} from 'react'
// import {graphcms, QUERY_SLUG_CATEGORIES } from "../Graphql/Queries";

// function Test({ categories }: any) {
//   return (
//     <>
//       <div className="test">
//         <Ttest text="Test">
//           {categories.map((categorie: any) => {
//             return <h2>{categorie.title}</h2>;
//           })}
//         </Ttest>
//       </div>
//     </>
//   );
// }
// export default Test;

// export async function getServerSideProps() {
//   const hygraph = new GraphQLClient(process.env.REACT_APP_API);

//   const { categories } = await hygraph.request(workoutsLatestQuery);
//   return {
//     props: {
//       categories,
//     },
//   };
// }

// import {testQuery} from "../Graphql/Queries";

// const { data} = useGQLQuery('categories', QUERY_SLUG_CATEGORIES);
//    console.log(data);
// data.map((story) =>{ return()})
// import {graphcms, QUERY_SLUG_CATEGORIES} from '../Graphql/Queries'
// export async function getServerSideProps() {
//   const hygraph = new GraphQLClient(
//     process.env.REACT_APP_API
//   )

//   const { data } = await hygraph.request(testQuery);
//   console.log(data)
//   return {
//     props: {
//       data

//     }

//   }

// }

// function Test() {
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     graphcms.request(QUERY_SLUG_CATEGORIES).then(res => setCategories(res.categories) )

//   },[])
//   return (

//     <>
//     categories?.map(category => (
//       <Ttest key={category.title}
//       />

//     ))

//     </>

//   );
// }
