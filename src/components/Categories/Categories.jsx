import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/slices/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);
  const categoryStatus = useSelector((state) => state.categories.status);
  const categoryError = useSelector((state) => state.categories.error);

  useEffect(() => {
    if (categoryStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [categoryStatus, dispatch]);
  return (
    <div className="app__categories">
      {
        categories.map((category) => (
          <div
            key={category.id}
          >
            {category}
          </div>
        ))
      }
    </div>
  );
};

export default Categories;
