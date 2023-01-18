import "../Stylingcomponents/Test.css";
import { GraphQLClient } from "graphql-request";
import {testQuery} from "../Graphql/Queries";
import Ttest from './Ttest'


// import {graphcms, QUERY_SLUG_CATEGORIES} from '../Graphql/Queries'
export async function getServerSideProps() {
  const hygraph = new GraphQLClient(
    process.env.REACT_APP_API
  )

  const { data } = await hygraph.request(testQuery);
  console.log(data)
  return {
    props: {
      data

    }

  }

}


function Test({ data}: any) {
  return (
    
   data.map((story: any) =>{
    return (
    <>
    <Ttest key={story.id}>
      <div className="test">
      <h1>{story.id}</h1>
      <h1>{story.title}</h1>
     
      </div>
    </Ttest>
    </>
                
      )})
    
  );
}
export default Test;
// const { data} = useGQLQuery('categories', QUERY_SLUG_CATEGORIES);
//    console.log(data);
// data.map((story) =>{ return()})



