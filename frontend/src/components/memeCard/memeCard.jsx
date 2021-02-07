import React from 'react';
import {Card, Image} from 'semantic-ui-react';


const memeCard = (props)=>{

    return(
        <Card>
            <Image src={props.image}   wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>{props.caption}</Card.Meta>
            </Card.Content>
        </Card>
    )

}

export default memeCard;