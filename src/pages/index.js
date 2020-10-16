import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-full min-h-full bg-image">
      <div className="flex flex-wrap w-full max-w-6xl mx-auto">
        <div className="w-full mt-48 text-6xl text-center text-gray-700">
          Product Catalog
        </div>
        <div className="flex flex-wrap justify-between w-full">
          <Link
            to="/advanced-calendar-search"
            className="w-1/2 h-64 max-w-lg px-5 py-4 mt-16 bg-white border cursor-pointer hover:shadow-lg border-gray"
          >
            <div className="text-2xl font-medium text-gray-700">
              Advanced Calendar Search
            </div>
            <p className="h-24 mt-4 text-base leading-tight text-gray-700">
              The Advanced Calendar Search API returns the lowest published
              fares and flight itineraries for a given city pair. The API uses
              the Travel Insight engine to retrieve up to 192 days of shopped
              fare data for a given city pair and length of stay available in
              the Sabre® cache.
            </p>
            <div className="flex w-full mt-4 space-x-4">
              <div className="px-2 py-1 bg-gray-200">Air</div>
              <div className="px-2 py-1 bg-gray-200">Search</div>
              <div className="px-2 py-1 bg-gray-200">Travel Agency</div>
            </div>
          </Link>
          <Link
            to="/aircraft-equipment-lookup"
            className="w-1/2 h-64 max-w-lg px-5 py-4 mt-16 bg-white border cursor-pointer hover:shadow-lg border-gray"
          >
            <div className="text-2xl font-medium text-gray-700">
              Aircraft Equipment Lookup
            </div>
            <p className="h-24 mt-4 text-base leading-tight text-gray-700">
              The Aircraft Equipment Lookup API returns the aircraft name
              associated with a specified IATA aircraft equipment code.
            </p>
            <div className="flex w-full mt-4 space-x-4">
              <div className="px-2 py-1 bg-gray-200">Utility</div>
              <div className="px-2 py-1 bg-gray-200">Travel Agency</div>
            </div>
          </Link>
          <div
            to="/advanced-calendar-search"
            className="w-1/2 h-64 max-w-lg px-5 py-4 mt-16 bg-white border cursor-not-allowed hover:shadow-lg border-gray"
          >
            <div className="text-2xl font-medium text-gray-700">
              Airline Alliance Lookup
            </div>
            <p className="h-24 mt-4 text-base leading-tight text-gray-700">
              The Airline Alliance Lookup API returns the airline alliance
              member information associated with a specified airline alliance
              'group code'. If no code is specified, the API returns all airline
              alliance groups and their corresponding member information.
            </p>
            <div className="flex w-full mt-4 space-x-4">
              <div className="px-2 py-1 bg-gray-200">Utility</div>
              <div className="px-2 py-1 bg-gray-200">Travel Agency</div>
            </div>
          </div>
          <div
            to="/advanced-calendar-search"
            className="w-1/2 h-64 max-w-lg px-5 py-4 mt-16 bg-white border cursor-not-allowed hover:shadow-lg border-gray"
          >
            <div className="text-2xl font-medium text-gray-700">
              Airline Lookup
            </div>
            <p className="h-24 mt-4 text-base leading-tight text-gray-700">
              The Airline Lookup API returns the airline name associated with a
              specified IATA airline code. If no code is specified, the API
              returns all codes and their corresponding names.
            </p>
            <div className="flex w-full mt-4 space-x-4">
              <div className="px-2 py-1 bg-gray-200">Air</div>
              <div className="px-2 py-1 bg-gray-200">Search</div>
              <div className="px-2 py-1 bg-gray-200">Travel Agency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
