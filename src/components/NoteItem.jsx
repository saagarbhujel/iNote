import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <>
      {/* {note.title}
      {note.description} */}
      <div className="card border rounded-lg shadow-md hover:shadow-lg m-4 p-4  columns-md ">
        <div className="card-body ">
          <div className="card-title font-bold text-xl mb-2">{note.title}</div>
          <div className="card-description text-gray-700">
            {note.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
