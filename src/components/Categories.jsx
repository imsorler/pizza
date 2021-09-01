import React, { useState } from 'react';

function Categories({ items, onClickItem }) {
  const [activeItem, setactiveItem] = useState(null)

  const onSelectItem = (index) => {
    setactiveItem(index)
  }

  return (
    <div>
      <div className='categories'>
        <ul>
          <li
            className={activeItem === null ? 'active': ''}
            onClick={() => onSelectItem(null)}
          >Все</li>
          {items &&
            items.map((item, index) => (
              <li
                className={activeItem === index ? 'active': ''}
                onClick={() => onSelectItem(index)}
                key={`${item}_${index}`}
              >{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Categories;
