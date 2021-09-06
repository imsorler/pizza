import React, { memo, useState } from 'react';

const Categories = memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index)
    onClickItem(index)
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
})

export default Categories;
