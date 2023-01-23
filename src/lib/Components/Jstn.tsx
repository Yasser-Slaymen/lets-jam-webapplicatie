import "../Stylingcomponents/Test.css";
import Ttest from "./Ttest";
import { useEffect, useState } from "react";
import { request } from "graphql-request";
import { RichText } from '@graphcms/rich-text-react-renderer';


function Jst() {
  const [testes, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { testes } = await request(
        "https://api-eu-west-2.hygraph.com/v2/clcyyb4443l3q01t8hceqaruo/master",
        `
        {
          testes {
               id
               nametest
               img {
                url
               }
               richText {
                html
               }
                
          }
        }
      `
      );

      setProducts(testes);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="test">
        <Ttest>
          <div>
            {!testes ? ( 
              "Loading... Oops somthing went wrong!"
            ) : (
              <ul>
                {testes.map((test: any) => (
                  <div key={test.id}>
                    <h1>{test.nametest}</h1>
                    <img src={test.img.url} alt="img" />
                    <RichText
  
                   
                     
                    />
                                        
                  </div>
                ))}
              </ul>
            )}
          </div>
        </Ttest>
      </div>
    </>
  );
}
export default Jst;

// {!webs ? (
//   "Oopss somthing going wrong"
//   ) : (
//     <>
//     {webs.map((web: any) => ())}
//     </>
//     )}


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
