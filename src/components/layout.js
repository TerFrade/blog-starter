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
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
