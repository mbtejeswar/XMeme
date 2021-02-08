import { Button, Form , Message} from "semantic-ui-react";
import { React, useState } from "react";

// const submitMeme = () => {};

const MemeForm = (props) => {
  const [memeOwner, setMemeOwner] = useState("");
  const [caption, setMemeCaption] = useState("");
  const [memeUrl, setmemeUrl] = useState("");

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
    let postData = {name:memeOwner, url:memeUrl,caption:caption}
    props.submitMeme(postData);
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
