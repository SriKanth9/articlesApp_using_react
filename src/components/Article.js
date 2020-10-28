import React from "react";
import articles from "../pages/article-content";
import ArticleLink from "./Article-link";
import Comments from "./Comments";
import PageNotFound from "./PageNotFound";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: {
        "learn-react": 0,
        "learn-node": 0,
        "my-thoughts-on-resumes": 0
      },
      comments: {
        "learn-react": [],
        "learn-node": [],
        "my-thoughts-on-resumes": []
      }
    };
  }

  voteArticle = (e) => {
    let getvotes = this.state.votes;
    getvotes[e.target.name]++;
    this.setState({
      votes: getvotes
    });
  };

  updateComment = (state, name) => {
    let stateComment = this.state.comments;
    stateComment[name].push(state);
    this.setState({
      comments: stateComment
    });
  };

  render() {
    let name = this.props.match.params.id;

    const articlesList = articles ? articles : [];

    const filterArt = articlesList.filter((article, index) => {
      return article.name === name;
    });

    if (filterArt.length < 1) {
      return <PageNotFound />;
    }

    const restArt = articlesList.filter((article, inde) => {
      return article.name !== name;
    });

    return (
      <>
        <>
          {filterArt.map((art, index) => (
            <div key={index}>
              <h1>{art.title}</h1>
              <button name={art.name} onClick={this.voteArticle}>
                Add Upvote
              </button>
              <p>
                This post has been upvoted {this.state.votes[art.name]} times
              </p>
              <p>{art.content}</p>
              <div className="show-comments">
                <ul>
                  {this.state.comments[art.name].map((comment, index) => (
                    <li>
                      <label>
                        Name:<h3>{comment.name}</h3>
                      </label>
                      <label>
                        comment:
                        <p>{comment.comment}</p>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="commentSection">
                <Comments getComments={this.updateComment} name={art.name} />
              </div>
            </div>
          ))}
        </>
        <h3>Other Articles:</h3>
        <ArticleLink article={restArt} />
      </>
    );
  }
}

export default Article;
