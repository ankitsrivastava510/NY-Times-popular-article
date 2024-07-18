import React from 'react';
import useFetch from '../../hooks/usefetch';

const ArticleDetail: React.FC = () => {
  const { data: articles, loading, error } = useFetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=7sMGQ4RCqXZroYrd5qA9xImUWcOyWYkY`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
            {articles.hasOwnProperty('results') ? articles.results.map((article: any) => (
               <>
               <img src={article.media[0]["media-metadata"][0].url} />
               <h2>{article.title}</h2>

               </>
            )) : 'Api error'}
        </div>
  );
}

export default ArticleDetail;
