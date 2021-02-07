import { Button, Form , Message} from "semantic-ui-react";
import { React, useState } from "react";

const submitMeme = () => {};

const MemeForm = () => {
  const [memeOwner, setMemeOwner] = useState("");
  const [caption, setMemeCaption] = useState("");
  const [memeUrl, setmemeUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const setValue = (event) => {
    switch (event.target.name) {
      case "owner":
        setMemeOwner(event.target.value);
        break;
      case "caption":
        setMemeCaption(event.target.value);
        break;
      case "url":
        setmemeUrl(event.target.value);
        break;
    }
  };

  const checkValidation = (error, response)=>{
    if(!error){
      return true
    }
  }

  const clearValues = ()=>{
    setMemeOwner('')
    setMemeCaption('')
    setmemeUrl('')
  }
  const submitMeme = () => {
    let postData = {owner:memeOwner, url:memeUrl,caption:caption}
    debugger;
    console.log(postData);
    setLoading(true);
    const memes = fetch(encodeURI(`http://localhost:8080/memes`),{method:'post', headers:{'Content-Type': 'application/json'} ,body:JSON.stringify(postData)})
    .then((res)=>{
        return res.json();
    })
    .then((resJSON)=>{
      setLoading(false);
        console.log(resJSON);
       let valResult =  checkValidation(false,resJSON)
       if(valResult){
        clearValues()
        return resJSON
       }
      
    })
    .catch((err)=>{
      setLoading(false);
      console.log(`Error occured during fetch api`)
    })
  };
  return (
    <Form>
  
      <Form.Field>
        <label>Meme Owner</label>
        <input
          value={memeOwner}
          name="owner"
          onChange={setValue}
          placeholder="Enter your full name"
        />
        
      </Form.Field>
      <Form.Field>
        <label>Caption</label>
        <input
          value={caption}
          name="caption"
          onChange={setValue}
          placeholder="Be Creative with caption"
        />
      </Form.Field>
      <Form.Field>
        <label>Meme URL</label>
        <input
          value={memeUrl}
          name="url"
          onChange={setValue}
          placeholder="Enter URL of your meme here"
        />
      </Form.Field>
      <Message
      warning
      header='Could you check something!'
      list={[
        'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.',
      ]}
    />
      <Button onClick={submitMeme} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MemeForm;
