import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import "./layout.css"
import Provider from "../../providers/Provider"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Provider>
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `8% 1% 0 1%`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          <div style={{ backgroundColor: 'white',padding:' 4% 2% 2% 2%',boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            {children}
          </div>
        </main>
      </div>
    </>
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
