import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AircraftEquipmentLookup = () => {
  useEffect(() => {
    var script = document.createElement("script")
    script.src = "/js/portal.v6-uber.js"
    script.onload = function () {
      //eslint-disable-next-line
      APIMaticDevPortal.show({
        container: "apimatic-widget",
        codegenApiRoutes: {
          docsgen: "/digital-connect/docs/{template}.json",
          codegen: "/digital-connect/sdks/{template}.zip",
          transform: "/digital-connect/exports/{format}",
        },
        apiKey:
          "3PqFsCpTE9bvv6-cZoCm5_rqlSMXCnHtDUwME4vE5aadeyuIOFEDWyOFsjY_6J-g",
        baseUrl: "./../",
        enableExport: false,
        renameHttpToRest: false,
        enableConsoleCalls: true,
        useProxyForConsoleCalls: false,
        allowedLanguages: [
          "docs-http",
          "java_eclipse_jre_lib",
          "cs_net_standard_lib",
        ],
        initialPlatform: "java_eclipse_jre_lib",
        themeOverrides: {
          palette: {
            primaryColor1: "#4A5767",
            navbarBgColor: "#333333",
            codeSampleBgColor: "#222222",
          },
          injectCss: {
            main:
              "font-family: Roboto, sans-serif; color: #333333; font-size: 16px;",
            code: "font-family: 'Roboto Mono', monospace;",
            bodyText: "color: #333; font-weight: 300;",
            bodyList: "li {color: #333; font-weight: 300;}",
            bodyLink:
              "color: #006BA8 !important; text-decoration: none !important; transition: color 150ms,background-color 150ms,padding-bottom 150ms,border-bottom 150ms; &:hover { color: #005688 !important; } &:active { color: #1a4d66 !important; } ",
            heading1:
              "color: #4A5767; font-size: 43px; font-weight: 300; line-height: 48px;",
            heading2:
              "color: #4A5767; font-size: 43px; font-weight: 300; line-height: 48px;",
            heading3:
              "color: #4A5767; font-size: 31px; font-weight: 300; line-height: 36px;",
            heading4:
              "color: #4A5767; font-size: 25px; font-weight: 300; line-height: 36px;",
            heading5:
              "color: #4A5767; font-size: 20px; font-weight: 400; line-height: 24px;",
            heading6:
              "color: #4A5767; font-size: 16px; font-weight: 300; line-height: 24px; text-transform: uppercase;",
            menu: "color: #666; font-weight: 300; font-weight: 300;",
            runButton:
              "background-color: #23826f; &:hover { background-color: #207866; } &:disabled { background-color: #207866; }",
          },
          injectGoogleFonts: [
            "Roboto:300,300i,400,400i,600,700,700i",
            "Roboto Mono",
          ],
        },
      })
    }
    document.getElementsByTagName("head")[0].appendChild(script)
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <div id="apimatic-widget" className="w-full h-screen"></div>
    </Layout>
  )
}
export default AircraftEquipmentLookup
