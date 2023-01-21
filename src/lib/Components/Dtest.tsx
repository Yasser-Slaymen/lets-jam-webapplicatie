import "../Stylingcomponents/Test.css";
import Ttest from "./Ttest";
import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
// import Product from '../Graphql/Queries'




function Test() {
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
      <Ttest>
        <div>
            <div>

            </div>
            {!stories ? (
                'Loading....stories'
                ) : (<ul>
                    {stories.map(({ id, title}) => (
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
export default Test;






// import gql from 'graphql-tag';
// import {useGQLQuery} from '../Graphql/Queries'
// const GET_STORIES = gql`
//   query {
//     stories {
//       id
//       title
//       image
//     }
//   }
// `;


// function Test({stories}: any) {
//       // Fetch data from custom hook that uses React-Query
//    const { data } = useGQLQuery('stories', GET_STORIES);
//    console.log(data);
//   return (
//     <>
//       <div className="test">
//         <Ttest text="Test">
//             {data.stories.map((story :any) => {
//                 return (
//                 <div key={story.id}>
//                     <h2>{story.title}</h2>
//                 </div>
//                 )
//              })}

//         </Ttest>
//       </div>
//     </>
//   );
// }
// export default Test;