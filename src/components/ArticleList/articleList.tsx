import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/usefetch';

const ArticleList: React.FC = () => {
    const { data: articles, loading, error } = useFetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=7sMGQ4RCqXZroYrd5qA9xImUWcOyWYkY');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;
    console.log(articles);

    return (
        <div>
            {articles.hasOwnProperty('results') ? articles.results.map((article: any) => (
                <Link key={article.id} to={`/article/${article.id}`}>
                    <h2>{article.title}</h2>
                </Link>
            )) : 'Api error'}
        </div>
    );
}

export default ArticleList;
