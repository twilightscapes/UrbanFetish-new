

import * as React from "react"
import { graphql, Link } from "gatsby"
import { Seo } from "../components/seo1"
import { Layout } from "../components/layout1"
import Image from '../components/Image'
import { ProductListing } from "../components/product-listing"
import Social from "../components/social"
import Newsignup from "../components/newssign"
import TouchUp from '../components/TouchUp'
import { RiArrowDownLine, RiArrowRightSLine, RiStarLine, RiSendPlane2Line } from "react-icons/ri"

import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

import ScrollAnimation from 'react-animate-on-scroll'
import styled from "styled-components"
const CustomBox = styled.div`










@media (min-width: 58em) {

}


`


export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "urbanfetish" }) {
      products {
        ...ProductCard
      }
    }
  }
`

export default function IndexPage({ data }) {
  return (
    <CustomBox>
    <Layout>



    <Seo title={`Welcome`} />
    {/* <Seo image={'/default-og-image.jpg'} /> */}

    <TouchUp />
    <div className="home-banner flexbutt" style={{position:'relative', height:'auto', overflow:'hidden'}}>




<div className="flexcheek" style={{padding:'1vh 3% 0 3%',}}>

  <h1 className="title1">Urban Exploration</h1>

  <p className="tagline1">
   Urban exploration photography by Todd Lambert
  </p>


      <p>Finding obscure locations and unusual subject matter, Todd has explored these fabulous, forgotten and sometimes forbidden spaces in 16 states.</p>
      <p>As a location scout and avid urban explorer, Todd learned to photograph what he sees and to bring the unique subject matter he finds to light.</p>

<div className="" style={{display:'flex'}}>

      <blockquote className="frontquote" style={{width:'60%'}}>
<p>I love the rush that you get when you're standing where someone hadn't stepped in years. Putting together the puzzle of other's lives from the remnants that have survived time. I feel sort of like an alternative-archeologist sometimes.   </p>
<div style={{textAlign:'right', marginRight:'20%', marginTop:'10px'}}> – Todd Lambert
</div></blockquote>

<div style={{width:'40%',  padding:'3vw'}}><Image alt="Todd Lambert hanging with friends" filename="todd-profile.jpg" className="" /></div>

</div>

<p>Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find.</p>

<Social />
  <br /> <br />




</div>













<div className="flexcheek" style={{position:'relative', overflow:'hidden'}}>

<div className="kenburns-right"  style={{zIndex:'-1', width:'', height:''}}><Image alt="Todd Lambert hanging with friends" filename="gallery6-abandoned27.jpg" className="featured-image kenburns-right" /></div>


<div className="abcontent" style={{position:'absolute', height:'', width:'100%', top:'50px', right:'0',}}>

<ScrollAnimation animateIn="bounceInDown" delay={1350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'0px', paddingRight:'10%', border:'0px solid yellow'}}>
<h2
  className="boom normal txtshadow-header hit-the-floor"
  style={{
    color: '#fff',
    fontSize: '60px',
   position: 'relative',
//            top: '100px',
//            right: '1%',
//            backgroundColor: '#ff0000',
    textAlign: 'right', 
    float: 'none',
    margin:'0',
    padding:'0',
    textShadow:'3px 5px 5px rgba(0, 0, 0, 0.9)',
  }}
>
  Take a walk
</h2>
</ScrollAnimation>


<ScrollAnimation animateIn="bounceInRight" delay={1400} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid red'}}>
<h2
  className="boom narrow txtshadow mobile-txt"
  style={{
   fontSize:'40px',
   color: 'white',
   position: 'relative',
    textAlign: 'right', 
    margin:'0',
    padding:'0',
    textShadow:'2px 3px 4px rgba(0, 0, 0, 0.9)',
  }}
>
  on the
</h2>
</ScrollAnimation>


<ScrollAnimation animateIn="bounceInUp" delay={1450} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid blue'}}>
<h2
  className="boom narrow txtshadow mobile-txt"
  style={{
   fontSize:'80px',
   color: 'white',
   position: 'relative',
//            top: '230px',
    textAlign: 'right',
    textTransform: 'uppercase', 
    margin:'0',
    padding:'0',
    textShadow:'3px 5px 10px rgba(0, 0, 0, 0.9)',
  }}
>
  WILD SIDE
</h2>
</ScrollAnimation>



<ScrollAnimation animateIn="bounceInUp" delay={1750} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', bottom:'0',
right:'', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center'}}>


  <Newsignup />
</ScrollAnimation>


</div>

</div>

</div>



{/* <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

<p style={{textAlign:'center', margin:'2rem 0 0 0'}}>GET ALL YOUR FAVORITES NOW</p>

<div style={{display:'flex', border:'1px solid #666', padding:'1rem', margin:'0 3% 0 3%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'800px', gap:'20px', background:''}}>

  <span style={{fontSize:'70px', color:'white', transform:'rotate()', lineHeight:'80%'}}>PICK ANY <br /><span style={{letterSpacing:''}}>THREE</span></span>

  <span style={{fontSize:'40px', color:'#FA02B7', lineHeight:'90%'}}>
  ONLY PAY<br /> FOR TWO
  </span>
</div>
</div> */}




<br /><br />
<h2 style={{display:'flex', fontSize:'30px', margin:'0 3% 2rem 3%'}}>
      Latest For Sale<span className=""> <span className="icon -right" style={{padding:'10px 0 0 1rem'}}><RiArrowDownLine /></span>
      </span>
    </h2>
      <ProductListing products={data.shopifyCollection.products} />

      <Link
              className="moreButton"
              sx={{
                cursor:'pointer',
                width:'',
                backgroundColor:'#000 !important'
              }}
              to="/vault/gallery1/"
            >
              View More {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </Link>
   </Layout></CustomBox>
    
  )
}