/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/slices/categories';
import { fetchJokesByCategory } from '../../redux/slices/jokesSlice';

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);
  const categoryStatus = useSelector((state) => state.categories.status);
  const categoryError = useSelector((state) => state.categories.error);
  const jokesStatus = useSelector((state) => state.jokes.status);

  const [categoryJokes, setCategoryJokes] = useState({});

  // Fetch categories when the component mounts
  useEffect(() => {
    if (categoryStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [categoryStatus, dispatch]);

  // Fetch jokes for each category after categories are loaded
  useEffect(() => {
    if (categories.length > 0) {
      categories.forEach((category) => {
        dispatch(fetchJokesByCategory(category))
          .unwrap()
          .then((jokes) => {
            setCategoryJokes((prev) => ({
              ...prev,
              [category]: jokes,
            }));
          })
          .catch((error) => {
            console.error(`Error fetching jokes for category "${category}":`, error);
          });
      });
    }
  }, [categories, dispatch]);

  return (
    <div className="app__categories">
      {categoryStatus === 'loading' && <p>Loading categories...</p>}
      {categoryError && <p>Error loading categories: {categoryError}</p>}

      {jokesStatus === 'loading' && <p>Loading jokes...</p>}

      <div>
        {categories.map((category) => (
          <div
            key={category}
            className="category-card"
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '16px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3>{category}</h3>
            <div>
              {categoryJokes[category]?.length > 0 ? (
                categoryJokes[category].map((joke, index) => (
                  <div key={index}>
                    <img src={joke.icon_url} alt="icon name" />
                    <p style={{ margin: '8px 0' }}>
                      {joke.value}
                    </p>
                  </div>
                ))
              ) : (
                <p>No jokes available for this category.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
