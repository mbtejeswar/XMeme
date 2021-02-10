import React from 'react';
import MemeCard from '../memeCard/memeCard';
import MemeList from '../memeList/memeList';
import MemeForm from '../memeForm/memeForm';
import {Container}  from 'semantic-ui-react';
import classes from './styles.module.css';
import Navbar from '../common/navbar/navbar';


class Main extends React.Component{

    state={
       loading:false,
       firstHundredMemes:null
    }

    checkValidation = (error, response)=>{
        if(!error){
          return true
        }
      }
    componentDidMount(){
        this.fetchFirstHundredMemes();

     

    }

     fetchFirstHundredMemes = ()=>{
        fetch(encodeURI(`http://localhost:8080/memes`))
        .then((res)=>{
          return res.json()
        })
        .then((response)=>{
            this.setState({firstHundredMemes:response});
        })
        .catch((err)=>{
            console.log(`Error occured during fetch ${err}`);
        })

    }

    // componentDidUpdate(){
    //     this.fetchFirstHundredMemes();
    // }
    submitMeme = async (postData)=>{
     
        this.setState({loading:true});

        const memes = await fetch(encodeURI(`http://localhost:8080/memes`),{method:'post', headers:{'Content-Type': 'application/json'} ,body:JSON.stringify(postData)})
        .then((res)=>{
            return res.json();
        })
        .then((resJSON)=>{
            
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
        this.fetchFirstHundredMemes();
    }


  
        render(){

            return(
                <div className={classes['mainContainer']}>
                    <Navbar items={['Login', 'Register']} />
                    <div className={classes.container}>
                    <MemeForm submitMeme = {this.submitMeme} />
                    <div className={classes.memeListContainer}>
                    {this.state.firstHundredMemes ?  <MemeList firstHundredMemes={this.state.firstHundredMemes}/> :''}
                    </div>
                   </div>
                </div>
            )

        }
    

}

export default Main;


