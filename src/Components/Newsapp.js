/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from 'react'
// import Card from './Card'

// const Newsapp = () => {
//     // const[search, setSearch] = useState("india")
//     const [search, setSearch] = useState("india");
//     const [newsData, setNewsData] =useState(null);
//     const API_KEY="9c3ed8ee95884dec979460a60f96675b";
  
//     const getData= async()=>{
//         //  const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
//         const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);

        
//           const jsonData= await response.json();
//           console.log(jsonData.articles);
//           setNewsData(jsonData.articles);
//     }

//       const handleInput = (e) =>{
//         console.log(e.target.value)
//         setSearch(e.target.value);
         
//       }  





//   return (
//     <div>
//         <nav>
//             <div>
//                 <h1>Trendy News</h1>
//             </div>
//             <ul>
               
//                 <a href="https://example.com">All News</a>
//                <a href="https://example.com">Trending</a>
                
//             </ul>
//             <div className='searchBar'>
//                  <input type='text'placeholder='Search News' onChange={handleInput} />
//                  <button onClick={getData}>Search</button>
//             </div>
//         </nav>
//         <div>
//             <p className='head'>Stay Update with Trending</p>
//         </div>
//          <div className='categoryBtn'>
//             <button>Sports</button>
//             <button>Politics</button>
//             <button>Entertainment</button>
//             <button>Health</button>
//             <button>Fitness</button>
            
//          </div>
//          <div>
//           {newsData?<Card data={newsData }/> : null}
      
            
//          </div>
//     </div>
//   )
// }

// export default Newsapp


import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "9c3ed8ee95884dec979460a60f96675b";

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0,10)
        setNewsData(dt)
        
    }

    useEffect(()=>{
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)
        
    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul style={{display:"flex", gap:"11px"}}>
                <a style={{fontWeight:600, fontSize:"17px"}}>All News</a>
                <a style={{fontWeight:600, fontSize:"17px"}}>Trending</a>

            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay Update with TrendyNews</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>

        <div>
        {newsData?  <Card data={newsData}/> : null}
            
        </div>
    </div>
  )
}

export default Newsapp


