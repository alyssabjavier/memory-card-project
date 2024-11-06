import { useState, useEffect } from 'react'

function Card() {
    const [AmberGif, setAmberGif] = useState(null);
    const [ZhongliGif, setZhongliGif] = useState(null);

    const characters = [
        {
          name: 'Amber',
          giphyID: 'RYP6vHsRTMA4IlpGVr',
          ID: 0 
        },
        {
          name: 'Zhongli',
          giphyID: 'GOaMRxfIqqnvbfF84h',
          ID: 1           
        },
        {
          name: 'Klee',
          giphyID: 'YNt4yT6ZMAgYrQJv6p',
          ID: 2
        }
    ]

    const API_KEY = 'hspDYagwRYACfCQ3AgzRki7BKDTHf0eY';

        // useEffect(() => {
    //   const fetchGifs = async () => {
    //     const gifURLs = characters.map(char => ({
    //       ...char,
    //       gifURL: `https://api.giphy.com/v1/gifs/${char.giphyID}?api_key=${API_KEY}`
    //     }));
    //     console.log(gifURLs);
    //     setGifs(gifURLs);
    //   };

    //   fetchGifs();
    // }, []);
  
    useEffect(() => {
      fetch(`https://api.giphy.com/v1/gifs/${char1.giphyID}?api_key=${API_KEY}`)
      .then(res => {
        return res.json()
      })
      .then((data) => {
        console.log(data);
        setAmberGif(data);
      });
    }, []);

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/${char2.giphyID}?api_key=${API_KEY}`)
        .then(res => {
          return res.json()
        })
        .then((data) => {
          console.log(data);
          setZhongliGif(data);
        });
      }, [])

    return (
    <>
        <div>
            {AmberGif && <img src={AmberGif.data.images.original.url} className="logo react" alt="React logo" />}
            <h2>Hello, I am {char1.name}!</h2>
        </div>
        <div>
            {ZhongliGif && <img src={ZhongliGif.data.images.original.url} className="logo react" alt="React logo" />}
            <h2>Hello, I am {char2.name}!</h2>
        </div>
    </>
    )
}

export default Card;