import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../features/cardsSlice';

const CardForm: React.FC = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (imageUrl && description) {
      const newCard = {
        id: Date.now(),
        imageUrl,
        description
      };

      dispatch(addCard(newCard));
      setImageUrl('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default CardForm;
