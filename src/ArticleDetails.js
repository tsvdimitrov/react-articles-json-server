import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const ArticleDetails = () => {
    const { id } = useParams();
    const { data: article, error, isPending } = useFetch('http://localhost:8000/articles/' + id);

    return (
        <div className="article-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <img>{article.image}</img>
                <h2>{article.title}</h2>
                <h3>{article.excerpt}</h3>
                <h3>{article.category}</h3>
            </article>
        </div>
    );
}

export default ArticleDetails;