import * as React from "react"
import { Layout } from "../components/layout"
import Image from '../components/Image'
import { RiSendPlane2Line } from "react-icons/ri"
import { Seo }from "../components/seo"


import styled from "styled-components"
const CustomBox = styled.div`

p{margin-bottom:2rem;}

.container{padding:0}



.contact-form input, .contact-form textarea{border:0px solid red !important; color:#222; !important;}





@media (max-width: 58em) {


}

@media (min-width: 58em) {
	// .textbox{padding-top:80px !important;}
}


`



export default function ContactPage() {
  return (
    <CustomBox>
    <Layout>



<Seo title={`Contact Todd Lambert Twilightscapes`} />



     
      <div className="wrapper" style={{padding:'2rem 3%'}}>

      <h1 className="title" style={{fontSize:'50px'}}>Contact Me</h1>

        <form
          className="contact-form"
          action="/thanks"
          name="ts-contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>
              Subject
              <input type="text" name="subject" required />
            </label>
          </p>
          <p>
            <label>
              Message<textarea name="message" required></textarea>
            </label>
          </p>
          <p className="text-align-right">
            <button
              className="button"
              style={{color:'#fff',
              background:'#444',
            }}
              sx={{
                // variant: "variants.button",
                
              }}
              type="submit"
            >
              Send Message {"  "}
               <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </button>
          </p>
        </form>
      </div>
    </Layout>
    </CustomBox>
  )
}