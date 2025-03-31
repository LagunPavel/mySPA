import React from 'react';

interface CardProps {
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card image" />
      <p>{description}</p>
    </div>
  );
};

export default Card;
