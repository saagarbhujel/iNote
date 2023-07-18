import { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import PropTypes from "prop-types";

const NoteItem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const [deleteModal, setDeleteModal] = useState(false);

  const noteDelete = () => {
    deleteNote(note._id);
  };

  const deleteModalOpen = () => {
    setDeleteModal(true);
  };

  const deleteModalClose =()=>{
    setDeleteModal(false)
  }

  return (
    <>
      {/* CONFORMATION MODAL FOR DELETING NOTE */}

      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          deleteModal ? "" : "hidden"
        }`}
      >
        <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
        <div className=" bg-white rounded shadow-lg p-4 max-w-sm w-full z-10">
          <h3 className=" text-xl mb-4">Delete Conformation</h3>
          <p className="mb-6">Are you sure you want to delete note?</p>
          <div className="flex justify-end">
            <button className="px-4 py-2 text-white bg-purple-900 hover:bg-purple-600 rounded mr-2 " onClick={noteDelete}>
              Delete
            </button>
            <button className="px-4 py-2 text-gray-260 bg-gray-200 hover:bg-gray-300 rounded" onClick={deleteModalClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* {note.title}
      {note.description} */}
      <div className="card border rounded-lg shadow-md hover:shadow-lg m-4 p-4  columns-md ">
        <div className="card-body ">
          <div className="flex justify-between items-center card-title font-bold text-xl mb-2">
            {note.title}
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer hover:stroke-purple-700"
                onClick={() => {
                  updateNote(note);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer hover:stroke-purple-700"
                onClick={deleteModalOpen}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
          <div className="card-description text-gray-700">
            {note.description}
          </div>
        </div>
      </div>
    </>
  );
  
};

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  updateNote: PropTypes.func.isRequired,
}
export default NoteItem;