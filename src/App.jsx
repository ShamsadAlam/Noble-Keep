import React, { useState } from "react";
import Header from "./Header.jsx";
import CreateNote from "./CreateNote";
import Note from "./Note";
const App = () => {
  const [addItem, setaddItem] = useState([]);

  const addNote = (note) => {
    setaddItem((prevData) => {
      return [...prevData, note];
    });

    console.log(note);
  };

  const onDelete = (id) => {
    setaddItem((oldData) =>
      oldData.filter((currData, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passnote={addNote} />

      {addItem?.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
    </>
  );
};

export default App;
