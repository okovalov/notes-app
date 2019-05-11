import React from 'react'

const Header = () => (
  <nav
    className="navbar is-primary"
    role="navigation"
    aria-label="main navigation">
    <div className="navbar-brand" style={{ padding: '1rem' }}>
      <i className="fa fa-book-open fa-5x" aria-hidden="true" />

      <button
        type="button"
        className="button navbar-burger burger is-primary"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start" />

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <span className="navbar-link" href="#">More</span>

          <div className="navbar-dropdown">
            <a
              className="navbar-item"
              href="mailto:someone@yoursite.com?subject=Mail from Notes Creator App">
              Questions?
            </a>
          </div>
        </div>

        <div className="navbar-item">
          <div className="buttons">
            <a
              href="mailto:someone@yoursite.com?subject=Mail from Notes Creator App"
              className="button is-info is-rounded">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
