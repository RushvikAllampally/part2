import React, { Component } from 'react'

export class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <h2 >
                <a href='https://www.phenom.com/'>Employee Management Section</a>
            </h2>
            </nav>
        </header>
      </div>
    )
  }
}

export default HeaderComponent