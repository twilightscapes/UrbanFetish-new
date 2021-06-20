import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo1"
import 'fontsource-hammersmith-one'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
import twLogo from "../icons/urban-fetish-logo-pink.svg"
import { StoreContext } from "../context/store-context"
import { Toast } from "./toast"
import { ImArrowRight } from "react-icons/im"
import { CartButton } from "./cart-button"
import SearchIcon from "../icons/search"
import Consent from '../components/Consent'
import Install from '../components/install-discount'


export function Layout({ children }) {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <div style={{background:'#111'}}> 
<>
      <Seo />
      <SkipNavLink />

      <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <>
          <div style={{position:'fixed', right:'6vw', padding:'10px', fontSize:'40px'}}>
          <Link to={closeTo}>
            <AiOutlineClose />
          </Link>
          </div>
          </>
        ) : (
<></>
        )}

      </div>
    )}
  </ModalRoutingContext.Consumer>


      {/* <Header /> */}

      
      

<header>

<Link to="/"><img id="logo" className="twlogo1" src={twLogo} alt="Urban Fetish Logo" style={{margin:'16px 0 40px 4vw', minWidth:'100px', maxWidth:'100px', height:'auto', padding:'0', border:'0px solid red', position:'fixed', zIndex:'2'}} /></Link>







      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
  {/* <span className="txtshadow" style={{textShadow:'2px', color:'#fff',}}>MENU</span> */}
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>


  <div className="backdrop1" ></div>


   <div id="sidebarMenu">
  

   
   <div style={{display:'flex', justifyContent:'flex-start', color:'#fff', paddingLeft:'20px'}}>
   
   <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>

  <div style={{marginTop:'5px'}}><CartButton quantity={quantity} /></div>
     </div>

    <ul className="sidebarMenuInner">

    {/* <li>
              <a className="navbar-item txtshadow" href="https://twilightscapes.com/">
                Home <span>Return to home</span>
              </a>
      </li> */}

      <li>
              <Link className="navbar-item txtshadow" to="/art/">
                Gallery <span>View Photos</span>
              </Link>
      </li>

      <li>
              <Link className="navbar-item txtshadow" to="/vault/gallery1/">
                The Vault <span>View the full archives</span>
              </Link>
      </li>


      <li>
              <Link className="navbar-item txtshadow" to="/about/">
                About Me <span>Learn All About Me</span>
              </Link>
      </li>

      <li>
      <Link className="navbar-item txtshadow" to="/gear/">Gear Talk<span>What tools I use</span></Link>
       </li>

       <li>
              <Link className="navbar-item txtshadow" to="/contact/">
                Contact <span>Ask me anything!</span>
              </Link>
      </li>

      {/* <li>
      <Link to="/search" >
          <span>Search Catalog <SearchIcon /></span>
        </Link>
        </li> */}

    

    </ul>

 <div className="has-app promocode">
30% OFF CODE: <span style={{color:'#FA02B7', fontWeight:'bold'}}>LoveTheNight</span>
</div>


  </div>










      <Toast show={loading || didJustAddToCart} >
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <div style={{fontSize:'30px', marginLeft:'10px'}}><ImArrowRight /></div>
          </>
        )}
      </Toast>
 



      {/* <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>

  <div style={{marginTop:'5px'}}><CartButton quantity={quantity} /></div> */}
     


     

</header>



<div className="toppad" style={{display:'block', height:'70px', border:'0px solid yellow'}}></div>



      <SkipNavContent>{children}</SkipNavContent>
      
      <br /><br />
      <Consent />
     <Install />
      <Footer />
      </>
    </div>
    
  )
}
