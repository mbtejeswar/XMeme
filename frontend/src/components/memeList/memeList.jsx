import React, { useEffect, useState } from 'react';
import {Grid} from 'semantic-ui-react';
import MemeCard from '../memeCard/memeCard';



const MemeList = ()=>{

    const [firstHundredMemes, setFirstHundredMemes] = useState([]);

    useEffect(()=>{
        debugger;
        fetch(encodeURI(`http://localhost:8080/memes`))
        .then((res)=>{
          return res.json()
        })
        .then((response)=>{
            setFirstHundredMemes(response);
        })
        .catch((err)=>{
            console.log(`Error occured during fetch ${err}`);
        })
    }, [])

    return(
        <Grid>
       { firstHundredMemes.length > 0 ? firstHundredMemes.map((meme)=>(
       <MemeCard image={meme.url} name={meme.owner} caption={meme.caption} />
       )) :''}
        </Grid>

    )

}

export default MemeList;


