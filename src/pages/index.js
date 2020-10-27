import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-full h-128 bg-pagar-green">
      <div className="pt-24 text-5xl font-bold text-center text-white">
        Bem-vindo à documentação Pagar.me
      </div>
      <div className="max-w-4xl mx-auto mt-8 text-4xl leading-none text-center text-white">
        Aqui você vai encontrar guias e exemplos para te ajudar a integrar com a
        melhor API de Pagamentos do Brasil!
      </div>
      <button className="block w-40 h-12 mx-auto mt-16 text-lg font-bold bg-white rounded text-pagar-green">
        Começar
      </button>
      <div className="flex flex-wrap w-full max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between w-full">
          <Link
            to="/transactions"
            className="w-1/2 h-64 max-w-lg px-5 py-4 mt-16 bg-white border rounded-lg cursor-pointer hover:shadow-lg border-gray"
          >
            <div className="text-2xl font-medium text-gray-700">
              Transactions API
            </div>
            <p className="h-24 mt-4 text-base leading-tight text-gray-700">
              By integrating with the Pagar.me API, you can create transactions
              from orders placed on your platform. It is possible to use the
              credit card and boleto mechanisms to make payments. The following
              items explain in more detail how to create a transaction of each
              type:
            </p>
          </Link>
          <Link
            to="/payments"
            className="w-1/2 h-64 max-w-lg px-5 py-4 mt-16 bg-white border rounded-lg cursor-pointer hover:shadow-lg border-gray"
          >
            <div className="text-2xl font-medium text-gray-700">
              Payments API
            </div>
            <p className="h-24 mt-4 text-base leading-tight text-gray-700">
              The Pagar.me payment link is a tool that makes it easier to
              receive sales that are not completed on your website or app. With
              it you create a checkout link, send it to the customer and he can
              make the payment anywhere.
            </p>
          </Link>
          <Link
            to="/balance-management"
            className="w-1/2 h-64 max-w-lg px-5 py-4 mt-16 bg-white border rounded-lg cursor-pointer hover:shadow-lg border-gray"
          >
            <div className="text-2xl font-medium text-gray-700">
              Balance Management API
            </div>
            <p className="h-24 mt-4 text-base leading-tight text-gray-700">
              The balance of Pagar.me is compiled from all the amounts that
              passed through your Pagar.me account, divided into 3 amounts:
              "receivable", "available" and "transferred". The balance
              receivable refers to the amounts that will be cleared in the
              future, that is, transactions that have been approved but have not
              yet been settled. The available balance will consist of all the
              amounts that have already been settled and are available in the
              Pagar.me account. Finally, the transferred balance will represent
              the amount that has already been paid and transferred to a bank
              account.
            </p>
          </Link>
          <div className="w-1/2 h-64 max-w-lg px-5 py-4 mt-16 bg-gray-100 border rounded-lg border-gray"></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
