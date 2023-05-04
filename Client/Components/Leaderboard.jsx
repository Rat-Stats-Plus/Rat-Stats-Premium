import React, { useState, useEffect } from 'react';

export default function Leaderboard() {
  const [ratLeaderboard, setRatLeaderboard] = useState([])
  const [ratLeaderboardComponents, setRatLeaderboardComponents] = useState([])

  useEffect(() => {
    async function getLeaderboard () {
      try {
        const rats = await fetch('/sql/rat');
        const data = await rats.json();
        setRatLeaderboard(data);
      }
      catch (err) {
        console.log(err);
      }
    }
    getLeaderboard();
  },[])

  useEffect(() => {
    if (ratLeaderboard !== []){
    const temp = ratLeaderboard.map((rat, index) => (
      <div key={index}className="flex flex-row justify-center items-center w-full">

        <h1 className="text-gray-500">{index + 1}.</h1>
        <div key={index} className="border rounded-xl shadow bg-pink-100 w-1/4 flex flex-col items-center">
          <p className="text-gray-500">Name: {rat.name}</p>
          <p className="text-gray-500">Sightings: {rat.sightings}</p>
        </div>
      </div>
    ));
    
    setRatLeaderboardComponents(temp);
    }
  }, [ratLeaderboard]);

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-4xl text-gray-500">Leaderboard: </h1>
      {ratLeaderboardComponents}
    </div>
  )
}