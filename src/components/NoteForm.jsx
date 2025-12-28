import React from 'react';
import { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

const NoteForm = ({ notes, setNotes }) => {
  const categoryArray = [
    { value: 'Development', label: '💻 Dev' },
    { value: 'Personal', label: '🏠 Personal' },
    { value: 'Ideas', label: '💡 Ideas' },
    { value: 'Tasks', label: '✅ Tasks' },
    { value: 'Health', label: '🍎 Health' },
  ];
  const priorityArray = [
    { value: 'Hard', label: '🔥 Critical' },
    { value: 'Medium', label: '⚡ Important' },
    { value: 'Low', label: '🌲 Casual' },
  ];

  const [isFormVisible, setIsFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: 'Work',
    priority: 'Medium',
    description: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      ...formData,
    };
    setNotes([newNote, ...notes]);
    setFormData({
      title: '',
      category: 'Work',
      priority: 'Medium',
      description: '',
    });
    setIsFormVisible(false);
  };

  return (
    <>
      <button
        style={{ backgroundColor: isFormVisible ? '#f87171' : '#fff085' }}
        onClick={() => {
          setIsFormVisible(!isFormVisible);
        }}
        className="text-xs px-3 py-1 rounded-lg shadow-sm hover:shadow-md cursor-pointer shadow-yellow-300"
      >
        {isFormVisible ? 'Hide Form' : 'Show Form'}
      </button>
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="rounded-lg bg-white p-4 flex flex-col gap-y-4 items-center"
        >
          <TextInput
            label={'Title'}
            name={'title'}
            value={formData.title}
            onChange={handleChange}
            required
            placeHolder="Enter title..."
          />
          <SelectInput
            name={'category'}
            value={formData.category}
            onChange={handleChange}
            label={'Category'}
            options={categoryArray}
          />
          <SelectInput
            name={'priority'}
            value={formData.priority}
            onChange={handleChange}
            label={'Category'}
            options={priorityArray}
          />

          <TextAreaInput
            label={'Description'}
            placeholder={'Enter description...'}
            value={formData.description}
            onChange={handleChange}
            name={'description'}
            required
          />
          <button
            className="bg-white w-fit px-2 py-1 rounded-md cursor-pointer hover:bg-green-200 shadow-md hover:shadow-sm duration-300 ease-in"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
