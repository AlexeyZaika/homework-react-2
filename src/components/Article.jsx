import React from 'react';

function Article() {
  const [articles, setArticles] = React.useState([]);
  const [numberPage, setPage] = React.useState(1);

  const getArticles = (numberPage) => fetch(`https://jsonplaceholder.typicode.com/posts?_page=${numberPage}&_limit=10`).then(response => response.json());

  const isDisabled = numberPage - 1 > articles.length / 10;

  React.useEffect(() => {
    getArticles(numberPage).then( data => {
      setArticles(data);
      setPage(numberPage => numberPage + 1);
    });
  }, []);

  const onClickHandler = () => {
    getArticles(numberPage).then( data => {
      setArticles([...articles, ...data]);
      setPage(numberPage => numberPage + 1);
    });
  }

  return (
    <div className="article">
      {
        articles.map( item => {
          return (
            <div className="article__block" key={item.id}>
              <span className="article__number">{item.id}</span>
              <h2 className="article__title">{item.title}</h2>
              <p className="article__text">{item.body}</p>
            </div>
          )
        })
      }
      <div className="article__button-block">
        <button disabled={isDisabled} type="button" onClick={onClickHandler}>Show more</button>
      </div>
    </div>
  );
}

export default Article;

