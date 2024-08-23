import React from 'react'
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

const data = useLoaderData();

//   const [data, setData] = useState([]);

// //   const url = 'https://api.github.com/users/VaibhavSharma13';
//   const url = 'https://api.github.com/users/hiteshchoudhary';

//   useEffect(()=>{
//     fetch(url)
//     .then(Response => Response.json())
//     .then(data => {
//         console.log(data);
//         setData(data.followers);
//     })
//   }, []);


  return (
    <>
        <div className='text-center bg-orange-400 p-4 m-4 text-white text-2xl'>
            <h1>Github Followers : {data.followers}</h1>
        </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const Response = await fetch('https://api.github.com/users/hiteshchoudhary')

  return Response.json();
}