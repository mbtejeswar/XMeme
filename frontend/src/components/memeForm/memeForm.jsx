import { Button, Form } from "semantic-ui-react";
import { React, useState } from "react";

const submitMeme = () => {};

const MemeForm = () => {
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

  const submitMeme = () => {
    console.log("submit the data to backend")
  };
  return (
    <Form>
      <Form.Field>
        <label>Meme Owner</label>
        <input
          name="owner"
          onChange={setValue}
          placeholder="Enter your full name"
        />
      </Form.Field>
      <Form.Field>
        <label>Caption</label>
        <input
          name="caption"
          onChange={setValue}
          placeholder="Be Creative with caption"
        />
      </Form.Field>
      <Form.Field>
        <label>Meme URL</label>
        <input
          name="url"
          onChange={setValue}
          placeholder="Enter URL of your meme here"
        />
      </Form.Field>
      <Button onClick={submitMeme} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MemeForm;
