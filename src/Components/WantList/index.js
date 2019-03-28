import React, { Component } from "react";
import CarteLivre from "../Livre/CarteLivre";

import Nav from "../Nav";
import PopUp from "../PopUp";

class WantList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: this.props.wantList,
      showPopUp: false,
      list: "WishList"
    };
    this.popUp = this.popUp.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.readList !== prevProps.readList) {
      this.setState({
        books: this.props.wantList
      });
    }
    console.log(this.state.books);
  }

  popUp() {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  }

  updateWishList(array) {
    let books = this.state.wantList;

    books.push(array);

    this.setState({
      wantList: books
    });

    this.setState({
      list: "Wish List"
    });
  }

  render() {
    return (
      <div className="List">
        <Nav popUp={this.popUp} />
        {this.state.showPopUp ? (
          <PopUp
            text={this.state.list}
            closePopUp={this.popUp}
            List={this.updateWishList}
            currentPage="WantList"
          />
        ) : null}
        {this.state.books !== undefined ? (
          this.state.books.map((book, index) => {
            let image = book[0];
            let title = book[1];
            let author = book[2];

            return (
              <CarteLivre
                key={index}
                img={image}
                title={title}
                author={author}
              />
            );
          })
        ) : (
          <p>Nothing to show yet.</p>
        )}
      </div>
    );
  }
}

export default WantList;
