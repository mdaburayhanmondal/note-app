import React from 'react';
import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <div className="mt-10 min-h-screen p-4 text-black flex flex-col gap-y-8 items-center justify-center">
      <h1 className="text-2xl font-extralight italic">📝 Note App</h1>
      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
