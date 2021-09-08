import React, { memo, useState } from 'react';
import ProptTypes from 'prop-types';

const Categories = memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div>
      <div className='categories'>
        <ul>
          <li
            className={activeCategory === null ? 'active' : ''}
            onClick={() => onClickCategory(null)}>
            Все
          </li>
          {items &&
            items.map((item, index) => (
              <li
                className={activeCategory === index ? 'active' : ''}
                onClick={() => onClickCategory(index)}
                key={`${item}_${index}`}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
});

Categories.proptTypes = {
  activeCategory: ProptTypes.oneOf([ProptTypes.number, null]),
  items: ProptTypes.arrayOf(ProptTypes.object).isRequired,
  onClickCategory: ProptTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
