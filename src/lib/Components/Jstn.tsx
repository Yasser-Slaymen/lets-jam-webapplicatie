import "../Stylingcomponents/Test.css";
import Ttest from "./Ttest";
import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
// import { RichText } from "@graphcms/rich-text-react-renderer";
// import Product from '../Graphql/Queries'




function Jst() {
    const [webs, setProducts] = useState(null);

    useEffect(() => {
      const fetchProducts = async () => {
        const { webs } = await request(
          'https://api-eu-west-2.hygraph.com/v2/clcyyb4443l3q01t8hceqaruo/master',
          `
        {
            webs {
                id
                name
                text {
                  text
                }
                
          }
        }
      `
        );
  
        setProducts(webs);
      };
  
      fetchProducts();
    }, []);
   
 return (
  <>
    <div className="test">
      <Ttest>
        <div>
            <div>

            </div>
            {!webs? (
                'Loading...!'
                ) : (<ul>
                    {webs.map((web: any) => (
                        <li key={web.id}>
                        <h1>{web.name}</h1>
                        <h1>{web.text}</h1>
                        
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
