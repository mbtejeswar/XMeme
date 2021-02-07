import React from 'react';
import MemeCard from '../memeCard/memeCard';
import MemeList from '../memeList/memeList';
import MemeForm from '../memeForm/memeForm';
import {Container}  from 'semantic-ui-react';


class Main extends React.Component{

    state={
       loading:false
    }

    checkValidation = (error, response)=>{
        if(!error){
          return true
        }
      }
    
    submitMeme = (postData)=>{
        this.setState({loading:true});
        debugger;
        const memes = fetch(encodeURI(`http://localhost:8080/memes`),{method:'post', headers:{'Content-Type': 'application/json'} ,body:JSON.stringify(postData)})
        .then((res)=>{
            return res.json();
        })
        .then((resJSON)=>{
            this.setState({loading:false});
           let valResult =  this.checkValidation(false,resJSON)
           if(valResult){
            // clearValues()
            return resJSON
           }
          
        })
        .catch((err)=>{
            this.setState({loading:false});
          console.log(`Error occured during fetch api`)
        })
    }
  
        render(){

            return(
                <div>
                    <MemeForm submitMeme = {this.submitMeme} />
                    <MemeList />
                </div>
            )

        }
    

}

export default Main;


