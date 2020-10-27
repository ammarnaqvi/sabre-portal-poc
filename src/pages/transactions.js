import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Transactions = () => {
  useEffect(() => {
    var script = document.createElement("script")
    script.src = "https://dxjs.apimatic.io/static/js/portal.v6.js"
    script.onload = function () {
      //eslint-disable-next-line
      APIMaticDevPortal.show({
        container: "apimatic-widget",
        codegenApiRoutes: {
          docsgen:
            "/api/api-entities/pMkapXUu7IMXCoDM2X2wtDuSobuKpOXVBt2mRou3tcXvKTYevckPgei9Sdxoh9tS/published-artifacts/docs-generations/generated-file?template={template}",
          codegen:
            "/api/api-entities/pMkapXUu7IMXCoDM2X2wtDuSobuKpOXVBt2mRou3tcXvKTYevckPgei9Sdxoh9tS/published-artifacts/code-generations/generated-file?template={template}",
          transform:
            "/api/api-entities/pMkapXUu7IMXCoDM2X2wtDuSobuKpOXVBt2mRou3tcXvKTYevckPgei9Sdxoh9tS/published-artifacts/transformations/generated-file?format={format}",
        },

        apiKey:
          "8bt0WJD4Z596xsB-lb8SOLG-UBfJrUcHMjR5VFT-cWSYFZmJlixqBRgYp8rikbJhRLnlIawV6hTXM0e1alun-w**",
        baseUrl: "https://www.apimatic.io",
        enableExport: true,
        renameHttpToRest: false,
        enableConsoleCalls: true,
        useProxyForConsoleCalls: true,
        languageSettings: {
          http_curl_v1: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          cs_net_standard_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          cs_portable_net_lib: {
            disableSdkDownload: false,
          },
          java_gradle_android_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          objc_cocoa_touch_ios_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          java_eclipse_jre_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          php_generic_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          python_generic_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          ruby_generic_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          angular_javascript_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          node_javascript_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          go_generic_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
        },
        themeOverrides: {
          themeType: "cool",
          palette: {
            primaryColor: "#4a852d",
          },
          fontSources: [],
          cssStyles: {
            headings: {
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              h1: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "24px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "0.9",
              },
              h2: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "23px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "0.82",
              },
              h3: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "19px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1",
              },
              h4: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "17px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.17",
              },
              h5: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "15",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.26",
              },
              h6: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.35",
              },
            },
            body: {
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              text1: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.78",
              },
              text2: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "13px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.5",
              },
              text3: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "12px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.66",
              },
            },
            code: {
              fontFamily:
                "'SFMono-400', Consolas, 'Liberation Mono', Menlo, Courier",
              blockCode: {
                fontFamily:
                  "'SFMono-400', Consolas, 'Liberation Mono', Menlo, Courier",
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.66",
              },
              inlineCode: {
                fontFamily:
                  "'SFMono-400', Consolas, 'Liberation Mono', Menlo, Courier",
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.66",
              },
            },
          },
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
export default Transactions
