import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  if (!isRootPath) {
    title = "My Animals ™"
  }

  let header = (
    <div>
      <div className="navbar navbar-expand-sm navbar-light pt-0">
        <div className="container align-items-baseline">
          <Link className="header-link-home" to="/">
            <h2>{title}</h2>
          </Link>
          <span>
            <ul className="navbar-nav">
              <li className="nav-item nav-link">
                <h5 className="m-0">Home</h5>
              </li>
              <li className="nav-item nav-link">
                <h5 className="m-0">Shop</h5>
              </li>
              <li className="nav-item nav-link">
                <h5 className="m-0">Blog</h5>
              </li>
            </ul>
          </span>
        </div>
      </div>

      <div
        className="navbar navbar-expand-sm navbar-light shadow mb-5"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container align-items-baseline">
          <h2>Blog</h2>
          <span>
            <small className="text-muted">HOME / BLOG</small>
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <header classNameName="global-header">{header}</header>
      <main>{children}</main>
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <footer class="pt-4 mt-md-5 pt-md-5 container">
          <div class="row">
            <div class="col-3 col-md">
              <h3>{title}</h3>
              <ul class="list-unstyled text-small">
                <li>© 2021 Teamgeek</li>
              </ul>
            </div>
            <div class="col-3 col-md">
              <h4>About us</h4>
              <ul class="list-unstyled text-small">
                <li>
                  <h6 className="mt-3">Locations</h6>
                </li>
                <li>
                  <h6 className="mt-3">What we do</h6>
                </li>
                <li>
                  <h6 className="mt-3">How we do it</h6>
                </li>
                <li>
                  <h6 className="mt-3">Who we are</h6>
                </li>
              </ul>
            </div>
            <div class="col-3 col-md">
              <h4>Product</h4>
              <ul class="list-unstyled text-small">
                <li>
                  <h6 className="mt-3">Prints</h6>
                </li>
                <li>
                  <h6 className="mt-3">Lorem ipsum</h6>
                </li>
                <li>
                  <h6 className="mt-3">This is dummy text</h6>
                </li>
                <li>
                  <h6 className="mt-3">Hello</h6>
                </li>
              </ul>
            </div>
            <div class="col-3 col-md">
              <h4>Contact us</h4>
              <ul class="list-unstyled text-small">
                <li>work@teamgeek.io</li>
                <li>+27 64 891 2008</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
