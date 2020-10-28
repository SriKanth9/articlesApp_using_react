import React from "react";
import { Link } from "react-router-dom";

class ArticleLink extends React.Component {
  render() {
    const article = this.props.article ? this.props.article : [];
    return (
      <ul>
        {article.map((art, index) => (
          <li key={index}>
            <Link to={`/article/${art.name}`}>{art.title}</Link>
            <p>{art.content[0].slice(0, 150)}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default ArticleLink;
