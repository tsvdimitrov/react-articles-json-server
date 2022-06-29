import { Link } from 'react-router-dom';

const ArticleList = ({ articles, image, title, excerpt, category }) => {

    return (
        <div className="article-list">
            <img>{image}</img>
            <h2>{title}</h2>
            <h3>{excerpt}</h3>
            <h3>{category}</h3>
            {articles.map(article => (
                <div className="article-preview" key={article.id}>
                    <Link to={`/articles/${article.id}`}>
                        <img>{article.image}</img>
                        <h2>{article.title}</h2>
                        <h3>{article.excerpt}</h3>
                        <h3>{article.category}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ArticleList;