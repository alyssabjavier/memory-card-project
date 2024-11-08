import { useState, useEffect } from 'react'

function Card() {
    const [gifs, setGifs] = useState([]);
    const API_KEY = 'hspDYagwRYACfCQ3AgzRki7BKDTHf0eY';
    const [score, setScore] = useState(0);

    const characters = [
        {
            name: 'Amber',
            giphyID: 'RYP6vHsRTMA4IlpGVr',
            ID: 0,
            state: 'unclicked' 
        },
        {
            name: 'Zhongli',
            giphyID: 'GOaMRxfIqqnvbfF84h',
            ID: 1,
            state: 'unclicked' 
        },
        {
            name: 'Klee',
            giphyID: 'YNt4yT6ZMAgYrQJv6p',
            ID: 2,
            state: 'unclicked' 
        },
        {
            name: 'Xiao',
            giphyID: '1DUjaXwCAsSwm26jVO',
            ID: 3,
            state: 'unclicked' 
        },
        // {
        //     name: 'Keqing',
        //     giphyID: 'randomgibberish2214',
        //     ID: 4
        // }
    ];

    useEffect(() => {
      const fetchGifs = async () => {
        try {
          const gifPromises = characters.map(async (char) => {
            const response = await fetch(
              `https://api.giphy.com/v1/gifs/${char.giphyID}?api_key=${API_KEY}`
            );
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
            const gifData = await response.json();

            return {
              ...char,
              gifURL: gifData.data.images.original.url,
            };
          });

          const resolvedGifs = await Promise.all(gifPromises);
          setGifs(resolvedGifs);
        } catch (error) {
          console.error("Error fetching GIFs:", error);
        }
      };

      fetchGifs();
    }, []);

    const shuffledGifs = gifs.sort((a, b) => 0.5 - Math.random());

    const handleClick = (char) => {
      setScore(score + 1);
      char.state = 'clicked';
      console.log(`${char.state}`)
    }

    return (
      <>
        <div className="cards">
        {shuffledGifs.length > 0 ? (
          shuffledGifs.map((char) => (
            <div key={char.ID}>
              <h1>{char.name}</h1>
              <p>{char.state}</p>
              <img src={char.gifURL} alt={`${char.name} gif`} onClick={() => handleClick(char)} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        </div>
        <div>
          <h1>Scoreboard:</h1>
          <p>{score}</p>
        </div>
      </>
    );
}

export default Card;