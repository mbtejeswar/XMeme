import React from 'react';
import MemeCard from '../memeCard/memeCard';
import MemeList from '../memeList/memeList';
import MemeForm from '../memeForm/memeForm';
import {Container}  from 'semantic-ui-react';


class Main extends React.Component{

    state={

    }
    

  
        render(){

            return(
                <div>
                    <MemeForm />
                    <MemeList />
                </div>
            )

        }
    

}

export default Main;


