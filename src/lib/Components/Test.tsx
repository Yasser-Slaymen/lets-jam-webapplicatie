import "../Stylingcomponents/Test.css";
import Ttest from './Ttest'
import React,{useState, useEffect} from 'react'
import {graphcms, QUERY_SLUG_CATEGORIES } from "../Graphql/Queries";


function Test() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    graphcms.request(QUERY_SLUG_CATEGORIES).then(res => setCategories(res.categories) )

  },[])
  return (
    
    <>
    categories?.map(category => (
      <Ttest key={category.title}
      />

    ))
  
    </>
                
    
    
  );
}

export default Test;

// function Test({ data}: any) {
//   return (
    
//    data.map((story: any) =>{
//     return (
//     <>
//     <Ttest key={story.id}>
//       <div className="test">
//       <h1>{story.id}</h1>
//       <h1>{story.title}</h1>
     
//       </div>
//     </Ttest>
//     </>
                
//       )})
    
//   );
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



