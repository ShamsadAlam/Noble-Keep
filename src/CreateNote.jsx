import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
const CreateNote = (props) => {
  const [expand, setexpand] = useState(false);
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setnote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passnote(note);
    setnote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setexpand(true);
  };

  const backToNormal = () => {
    setexpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={backToNormal}>
        <div className="form-wrapper">
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            cols=""
            rows=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write Your Note..."
            onClick={expandIt}
          ></textarea>

          {expand ? (
            <button className="MuiButton-root" onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CreateNote;
