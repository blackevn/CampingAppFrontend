import React, { useState } from 'react';

function Carousel() {
  const [position, setPosition] = useState(0);

  const handleMoveLeft = () => {
    setPosition(position + 1);
  };

  const handleMoveRight = () => {
    setPosition(position - 1);
  };

  return (
    <>
    <button onClick={handleMoveLeft} className="btn btn-primary">Move Left</button>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-items" style={{ left: `${position * -100}%` }}>
            <div className="carousel-item">
            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
            </div>
            <div className="carousel-item">
            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
            </div>
            <div className="carousel-item">
            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
            </div>
            <div className="carousel-item">
            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
            </div>
            <div className="carousel-item">
            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
            </div>
            <div className="carousel-item">
            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
            </div>
            <div className="carousel-item">
            <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
            </div>
        </div>
        </div>
        <button onClick={handleMoveRight} className="btn btn-primary">Move Right</button>
      </>
  );
}

export default Carousel
