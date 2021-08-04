import React, { Component } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;

    const theme = isLightTheme ? light : dark;

    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Book One</li>
          <li style={{ background: theme.ui }}>Book One</li>
          <li style={{ background: theme.ui }}>Book One</li>
          <li style={{ background: theme.ui }}>Book One</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
