import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"
const Header = ({ siteTitle }) => (
  <header>
    <nav className="flex flex-wrap items-center w-full h-20 bg-white">
      <img
        className="w-32 mx-8"
        src="https://apimaticio.blob.core.windows.net/images/hosteddocs/9d8d527b-5add-4f50-83fe-289fe4f41254"
      />
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
