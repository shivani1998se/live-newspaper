/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'

// const Card = ({data}) => {
//     console.log(data);
//     const readMore = (url)=>{
//       window.open(url)
//     }
//   return (
//     // <div className='cardContainer'>
//     //  {data.map((curItem, index)=>{
//     //     return(
//     //         <div className='card'>
//     //           <img/>
//     //           <div className='cardContent'>
//     //             <a>{curItem.title}</a>
//     //             <p>{curItem.dexcription}</p>
//     //             <button>Read More</button>
//     //           </div>
//     //         </div>
//     //     )
//     <div className='cardContainer'>
//     {data.map((curItem,index)=>{
//         if(!curItem.urlToImage){
//             return null
//         }else{
//             return(
            
//                 <div className='card' key={index}>
//                  {/* <img src={curItem.urlToImage}/> */}
//                  <img src={curItem.urlToImage} alt={curItem.title || "News image"} />


//                {/* <img src="image_url" alt="image description" /> */}

//                  <div className='content'>
               
//                      <a href="https://example.com" className='title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
               
//                    <p>{curItem.description}</p>
               
//                      {/* <button onClick={()=>window.open(curItem.url)}>Read More</button> */}
//                      <button onClick={readMore(curItem.url)}>ReadMore</button>
               
//                </div>
            
//              </div>
//         )
        
//       }
         
     
//      })}
    
//     </div>
  

// )

// }

// export default Card
// // import React from 'react';

// // const Card = ({ data }) => {
// //   console.log(data);
  
// //   return (
// //     <div className='cardContainer'>
// //       {data.map((curItem, index) => {
// //         if (!curItem.urlToImage) {
// //           return null;
// //         } else {
// //           return (
// //             <div className='card' key={index}>
// //               <img src={curItem.urlToImage} alt={curItem.title || "News image"} />
// //               <div className='content'>
// //                 <a className='title' href={curItem.url} target="_blank" rel="noopener noreferrer">
// //                   {curItem.title}
// //                 </a>
// //                 <p>{curItem.description}</p>
// //                 <button onClick={() => window.open(curItem.url, '_blank')}>Read More</button>
// //               </div>
// //             </div>
// //           );
// //         }
// //       })}
// //     </div>
// //   );
// // };

// // export default Card;


import React from 'react'

const Card = ({data}) => {
     console.log(data);

    
     const readMore = (url) =>{
        window.open(url)
     }
     
  return (
    <div className='cardContainer'>
    {data.map((curItem,index)=>{
        if(!curItem.urlToImage){
            return null
        }else{
            return(
            
            <div className='card' key={index}>
                <img src={curItem.urlToImage}/>
                
                <div className='content'>
                    <a className='title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                    <p>{curItem.description}</p>
                    <button onClick={()=>window.open(curItem.url)}>Read More</button>
                </div>
            </div>
        )
        }
         
    })}
    </div>
  )
}

export default Card


