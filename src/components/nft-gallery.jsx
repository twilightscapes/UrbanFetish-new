import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "./layout"
import { ProductListing } from "./product-listing"
import { Seo } from "./seo"
import { MoreButton } from "../components/more-button"
import { title } from "../pages/index.module.css"

export default function nfts({ data: { products } }) {
  return (
    <Layout>
      <Seo title="All Twilightscapes" />
      <h1 className={title}>Print Ready Art </h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ea aliquid, fuga quam dolores veniam? Voluptas est officiis quas. Recusandae, dolores ipsa? Totam illum officiis dolor quisquam vel, beatae maxime!

      <ProductListing products={products.nodes} />
      {products.pageInfo.hasNextPage && (
        <MoreButton to={`/search#more`}>More Twilightscapes</MoreButton>
      )}

      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, in quae? Libero aliquam quibusdam nostrum error optio, ad animi dolore est iusto assumenda molestiae doloremque facere unde fugiat expedita. Nobis?</h2>
    </Layout>
  )
}

export const query = graphql`
  {
    products: allShopifyProduct(
      sort: { fields: publishedAt, order: ASC }
      limit: 14
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
