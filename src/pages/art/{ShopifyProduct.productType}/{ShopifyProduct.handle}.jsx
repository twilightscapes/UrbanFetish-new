import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../../../components/layout"
import isEqual from "lodash.isequal"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import Image from '../../../components/Image'
// import InfoMenu from '../../../components/infomenu'
import { StoreContext } from "../../../context/store-context"
import { AddToCart } from "../../../components/add-to-cart"
import { NumericInput } from "../../../components/numeric-input"
import { formatPrice } from "../../../utils/format-price"
import { Seo } from "../../../components/seo"
import { CgChevronRight as ChevronIcon } from "react-icons/cg"
import { MdBrandingWatermark, MdCropFree } from "react-icons/md"
import { RiSecurePaymentLine, RiSendPlane2Line } from "react-icons/ri"
import { BiLeftArrow } from "react-icons/bi"
import GoBack from "../../../components/goBack"
import ProductDetails from "../../../components/product-details"
// import { Link } from 'gatsby-plugin-modal-routing'


import { GiRoyalLove } from "react-icons/gi"
import { FaLockOpen } from "react-icons/fa"
import { HiBan, HiOutlineKey, HiOutlineMap, HiOutlinePhotograph, HiOutlineScale    } from "react-icons/hi"
import { CgInfo, CgRatio  } from "react-icons/cg"
import { FiCameraOff, FiCamera } from "react-icons/fi"

import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'



import {
  productBox,
  container,
  header,
  productImageWrapper,
  productImageList,
  productImageListItem,
  scrollForMore,
  noImagePreview,
  optionsWrapper,
  priceValue,
  selectVariant,
  labelFont,
  breadcrumb,
  tagList,
  addToCartStyle,
  metaSection,
  productDescription,
} from "./product-page.module.css"

import styled from 'styled-components'

const CustomBox = styled.div`


.vert{minHeight:'600px'}

@media (max-width: 48rem) {
.flexcheek{width:100% !important;}
.vert{minHeight:'inherit'}

 }

`






export default function Product({ data: { product, suggestions } }) {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    images,
    images: [firstImage],
  } = product
  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const checkAvailablity = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? []

        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  const handleOptionChange = (index, event) => {
    const value = event.target.value

    if (value === "") {
      return
    }

    const currentOptions = [...variant.selectedOptions]

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    }

    const selectedVariant = variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions)
    })

    setVariant({ ...selectedVariant })
  }

  React.useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    variant.price
  )

  const hasVariants = variants.length > 1
  const hasImages = images.length > 0
  const hasMultipleImages = true || images.length > 1

  return (

    <Layout>
      <CustomBox>
      {firstImage ? (
        <Seo
          title={title}
          description={description}
          image={getSrc(firstImage.gatsbyImageData)}
        />
      ) : undefined}
      <div className={container} style={{paddingTop:'0 !important', marginTop:'0'}}>
        <div className="dd">
          {hasImages && (
            <div className={productImageWrapper}>
              <div
                role="group"
                aria-label="gallery"
                aria-describedby="instructions"
              >
                <ul className={productImageList} style={{height:'100%'}}>
                  {images.map((image, index) => (
                    <li
                      key={`product-image-${image.id}`}
                      className={productImageListItem}
                      style={{display:'flex', alignContent:'center', justifyContent:'center', position:'relative'}}
                    >
                      

                      <div className="vert" style={{ position:'relative', background:'#000', border:'0px solid yellow', }}>
                        
                        <InnerImageZoom src={getSrc(firstImage.gatsbyImageData)} objectFit="contain" loading={index === 0 ? "eager" : "lazy"} />

                      {/* <img className="spinned" src={spinner} alt="Twilightscapes" style={{height:'100%', width:'100%', position:'fixed', top:'0', left:'0',  zIndex:'-1', border:'1px solid yellow', display:'block'}} /> */}

                      </div>

                      {/* <GatsbyImage
                        objectFit="contain"
                        loading={index === 0 ? "eager" : "lazy"}
                        alt={
                          image.altText
                            ? image.altText
                            : `Product Image of ${title} #${index + 1}`
                        }
                        image={image.gatsbyImageData}
                      /> */}
                    </li>
                  ))}
                </ul>
              </div>
              {hasMultipleImages && (
                <div className={scrollForMore} id="instructions">
                  <span aria-hidden="true">←</span> scroll for more{" "}
                  <span aria-hidden="true">→</span>
                </div>
              )}
            </div>
          )}
          {!hasImages && (
            <span className={noImagePreview}>No Preview image</span>
          )}



          
<div className="mobile" style={{}}>
<GoBack />
</div>

<div className="flexbutt" style={{display:'flex', gap:'30px'}}>

<div className="flexcheek" style={{width:'70%'}}>
            <div className={breadcrumb}>
              {/* <Link to={product.productTypeSlug}>{product.productType}</Link> */}
              {/* <ChevronIcon size={12} /> */}
            </div>
            <h1 className={header} style={{margin:'1rem 0 2rem 0'}}>{title}</h1>
            <p className={productDescription}>{description}</p>



            <span className="print">
            <h2 className={priceValue}>
             <strong style={{fontSize:'30px'}}>{price}</strong> <br /> High-Res Print Ready Art
            </h2>
         

            


            <fieldset className={optionsWrapper}>
              {hasVariants &&
                options.map(({ id, name, values }, index) => (
                  <div className={selectVariant} key={id}>
                    <select
                      aria-label="Variants"
                      onChange={(event) => handleOptionChange(index, event)}
                      style={{border:'1px solid #555'}}
                    >
                      <option value="">{`Select ${name}`}</option>
                      {values.map((value) => (
                        <option value={value} key={`${name}-${value}`}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
            </fieldset>
            <div className={addToCartStyle}>
              {/* <NumericInput
                aria-label="Quantity"
                onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                onChange={(event) => setQuantity(event.currentTarget.value)}
                value={quantity}
                min="1"
                max="20"
              /> */}
              <AddToCart
                variantId={productVariant.storefrontId}
                quantity={quantity}
                available={available}
              />
            </div>
            <div className="taggage" style={{display:'flex', flexWrap:'wrap !important', maxWidth:'100vw', margin:'3rem 0 2rem 0', overflow:'hidden'}}> 
              {/* <span className={labelFont}>Type</span>
              <span className={tagList}>
                <Link to={product.productTypeSlug}>{product.productType}</Link>
              </span> */}


              <span className={labelFont}>Tags</span>
              <span className={tagList}>
                {product.tags.map((tag) => (
                  <Link to={`/search?t=${tag}`}>{tag}</Link>
                ))}
              </span>
            </div>
            </span>
            

<ProductDetails />

</div>

            <div className="flexcheek sidebart" style={{border:'0px solid yellow', width:'30%'}}>

            <div style={{textAlign:'center', margin:'10px 0 30px 0'}}>
           <GoBack />
            </div>

            <p style={{fontSize:'100%', margin:'4rem 0.8rem 0', padding:'0', lineHeight:'auto', textAlign:'center', fontWeight:'bold'}}>Turn this into a great print here:</p>
            
            <div style={{display:'flex', gap:'10px',padding:'0 ', margin:'0 0 2rem 0', justifyContent:'center' }}>

<div style={{width:'100%', maxWidth:'200px'}}><a href="https://www.bayphoto.com" target="_blank" rel="noopener noreferrer nofollow"><Image className="" alt="" filename="bayphoto-logo.png" /></a></div>

<div style={{width:'100%', maxWidth:'200px'}}><a href="https://www.printique.com" target="_blank" rel="noopener noreferrer nofollow"><Image className="" alt="" filename="printique-logo.png" /></a></div>

</div>


<div style={{ border:'0px solid red', overflow:'hidden', position:'relative', zIndex:'0'}}>

  <h3 style={{fontSize:'130%', fontWeight:'bold', textAlign:'center'}}>About the photographer</h3>

  <Link key="All" to="/about/" >
  <div className="" style={{position:'absolute', display:'flex', zIndex:"1", justifyContent:'center', textAlign:'center', top:'30%', width:'90%',background:'#111',
          color:'#fff',
          padding:'12px 15px',
          margin:'0 5%',
          borderRadius:'7px',}}>
  
        Hi, I'm Todd Lambert
      
    </div>

  
        
        <Image className="" alt="" filename="todd-horizons.jpg" /></Link>
</div>

<br />
<br />
<h3 style={{fontSize:'130%', fontWeight:'bold', textAlign:'center'}}>Other projects by Todd</h3>

<a href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit', lineHeight:'1.7rem'}}>
 


 <Image className="slider" alt="Twilightscapes photos" filename="twilightscapes-button.jpg" />
 <br />
 
 Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the Western States like you've never seen them before.




 
 <h5 style={{textAlign:'center',}}>Visit Twilightscapes.com</h5></a>


            </div>

            

            


          </div>


          

        </div>





        <div style={{textAlign:'center', margin:'20px'}}>
          
    

<GoBack />


            
            </div>



      </div>
      </CustomBox>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $productType: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description
      productType
      productTypeSlug: gatsbyPath(
        filePath: "/art/{ShopifyProduct.productType}"
      )
      tags
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      storefrontId
      images {
        # altText
        id
        gatsbyImageData(layout: CONSTRAINED, width: 2600,)
      }
      variants {
        availableForSale
        storefrontId
        title
        price
        selectedOptions {
          name
          value
        }
      }
      options {
        name
        values
        id
      }
    }
    suggestions: allShopifyProduct(
      limit: 3
      filter: { productType: { eq: $productType }, id: { ne: $id } }
    ) {
      nodes {
        ...ProductCard
      }
    }
  }
`
