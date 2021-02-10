import React, { useEffect, useState } from 'react';
import {Grid} from 'semantic-ui-react';
import MemeCard from '../memeCard/memeCard';



const MemeList = (props)=>{

    const {firstHundredMemes} = props;



    return(
        
        <Grid>
       { firstHundredMemes.length > 0 ? firstHundredMemes.map((meme)=>(
       <MemeCard image={meme.url} name={meme.owner} caption={meme.caption} />
       )) :''}
        </Grid>

    )

}

export default MemeList;


