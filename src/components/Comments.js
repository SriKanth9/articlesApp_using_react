import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitData = (e) => {
    e.preventDefault();
    this.props.getComments(this.state, this.props.name);
    this.setState({
      name: "",
      comment: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitData}>
        <label htmlFor="name">
          Name:
          <input
            name="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <label htmlFor="comment">
          Comment:
          <input
            name="comment"
            type="text"
            onChange={this.handleChange}
            value={this.state.comment}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Comments;
