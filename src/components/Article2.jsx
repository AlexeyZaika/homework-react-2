import React from 'react';
import Pagination from './Pagination';
import Page from './Page';


function Article2() {
  const [articles, setArticles] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  
  const numberOfArticles = 10;
  const numberPages = Math.ceil(articles.length / numberOfArticles);
  const lastArticlePage = currentPage * numberOfArticles;
  const firstArticlePage = lastArticlePage - numberOfArticles;
  const currentArticles = articles.slice(firstArticlePage,lastArticlePage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getArticles = () => fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());

  React.useEffect(() => {
    getArticles().then( data => {
      setArticles(data);
    });
  }, []);

  return (
    <div className="article">
      <Page page={currentArticles}/>
      <Pagination paginate={paginate} currentPage={currentPage} numberPages={numberPages}/>
    </div>
  );
}

export default Article2;

