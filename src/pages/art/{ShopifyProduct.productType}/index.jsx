import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../../components/layout1"
import { ProductListing } from "../../../components/product-listing"
import { Seo } from "../../../components/seo1"
import slugify from "@sindresorhus/slugify"
import { MoreButton } from "../../../components/more-button"
import { title } from "../index.module.css"

export default function ProductTypeIndex({
  data: { products },
  pageContext: { productType },
}) {
  return (
    <Layout>
      <Seo title={`Twilightscapes: ${productType}`} />
      <h1 className={title}>{productType}</h1>
      <ProductListing products={products.nodes} />
      {products.pageInfo.hasNextPage && (
        <MoreButton to={`/search?p=${slugify(productType)}#more`}>
          More Twilightscapes
        </MoreButton>
      )}
    </Layout>
  )
}

export const query = graphql`
  query($productType: String!) {
    products: allShopifyProduct(
      filter: { productType: { eq: $productType } }
      sort: { fields: publishedAt, order: ASC }
      limit: 64
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
