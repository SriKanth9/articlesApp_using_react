import React from "react";
import ArticleLink from "../components/Article-link";
import ArticleContent from "./article-content";

class Articles extends React.Component {
  render() {
    return (
      <div className="articles-content">
        <ul>
          <h2>Articles</h2>
          <ArticleLink article={ArticleContent} />
        </ul>
      </div>
    );
  }
}

export default Articles;
