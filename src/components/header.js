import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"
const Header = ({ siteTitle }) => (
  <header>
    <nav className="flex items-center w-full h-16 bg-black">
      <div className="flex items-center h-full px-8 bg-red">
        <img className="w-32" src={Logo} />
      </div>
      <div className="flex flex-wrap w-full h-full">
        <div className="w-full h-1 bg-red-dark"></div>
        <div className="px-8 py-2 text-2xl text-white">Dev Studio</div>
        <div className="px-8 py-2 text-2xl text-white">Product Catalog</div>
      </div>
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
