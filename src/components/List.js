import React, { Component } from "react";

class List extends Component {
  componentDidMount = () => this.props.fetchArticles();

  render() {
    return (
      <div>
        {this.props.articles.map((a) => {
          return (
            <ul>
              <li>
                <a href={a.url}>
                  {a.title}
                  <hr />
                </a>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default List;
