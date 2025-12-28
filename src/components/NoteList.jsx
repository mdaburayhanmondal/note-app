import Note from './Note';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <>
      {notes.length === 0 ? (
        <p className="text-gray-500 italic">No notes yet! Add one above. 📝</p>
      ) : (
        <ul className="flex flex-col items-center gap-y-2 w-lg bg-green-200 p-2 rounded-lg">
          {notes.map((note) => {
            return <Note note={note} deleteNote={deleteNote} key={note.id} />;
          })}
        </ul>
      )}
    </>
  );
};

export default NoteList;
