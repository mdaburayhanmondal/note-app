import React from 'react';

const Note = ({ note, deleteNote, key }) => {
  return (
    <>
      <li
        style={{
          borderLeftColor:
            note.priority === 'Hard'
              ? 'red'
              : note.priority === 'Medium'
              ? 'orange'
              : 'green',
        }}
        key={key}
        className="w-full grid grid-cols-[2fr_2fr_2fr_4fr_1fr] px-2 py-1 items-center bg-green-100 border-l-4"
      >
        <span className="text-md font-medium">{note.title}</span>
        <span className="text-sm italic">{note.category}</span>
        <span className="text-sm font-light">{note.priority}</span>
        <span className="text-xs font-extralight">{note.description}</span>
        <button
          style={{
            backgroundColor:
              note.priority === 'Hard'
                ? 'red'
                : note.priority === 'Medium'
                ? 'orange'
                : 'green',
          }}
          className="cursor-pointer shadow-sm hover:shadow-2xl shadow-amber-800 rounded-full"
          onClick={() => deleteNote(note.id)}
        >
          🧹
        </button>
      </li>
    </>
  );
};

export default Note;
