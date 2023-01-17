import gql from 'graphql-tag';
import {useGQLQuery} from '../Graphql/Queries'
// import {graphcms, QUERY_SLUG_CATEGORIES} from '../Graphql/Queries'
const QUERY_SLUG_CATEGORIES = gql`
 query{
  categories{
    title,
    slug
  }
}
`;

function Test(){
   // Fetch data from custom hook that uses React-Query
   const { data} = useGQLQuery('categories', QUERY_SLUG_CATEGORIES);
   console.log(data);
    return(
    <div>
        <h1>Test</h1>
        <section>
            {data.categories((caty) =>(
                <article key={caty.id}>
                  <h2>{caty.title}</h2>
                </article>
            ))}
        </section>
    </div>
    )
}
export default Test;
