import React from 'react';

const Button = ({btn}) => {
  const {id, btime} = btn;
    return (
        <div>
            <button>{btime}</button>
        </div>
    );
};

export default Button;