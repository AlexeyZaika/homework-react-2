import React from 'react';
import PropTypes from 'prop-types';

function Page(props) {
  return (
    <div>
      {
        props.page.map( item => {
          return (
            <div className="article__block" key={item.id}>
              <span className="article__number">{item.id}</span>
              <div className="article__top">
                <div className="article_name">User: {item.userId}</div>
                <h2 className="article__title">{item.title}</h2>
              </div>
              <p className="article__text">{item.body}</p>
            </div>
          )
        })
      }
    </div>
  );
}

Page.propTypes = {
  page: PropTypes.array.isRequired,
}

export default Page;

