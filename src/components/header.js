import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#9575cd`,
      marginBottom: `1.45rem`,
      fontFamily: "Montserrat",
      // position: "fixed",
      // width: "100%",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
          osnmath<span style={{ fontWeight: "400" }}>online</span>
        </Link>
      </h1>
      <div
        style={{ color: "#FFFFFF", display: "flex", justifyContent: "center" }}
      >
        <div style={{ margin: "10px" }}>About</div>
        <div style={{ margin: "10px" }}>TryOut</div>
        <div style={{ margin: "10px" }}>Materi</div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
