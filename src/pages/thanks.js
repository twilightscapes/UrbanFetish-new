import * as React from "react"
import { Layout } from "../components/layout"
import Image from '../components/Image'
import { RiSendPlane2Line } from "react-icons/ri"
import Seo from "../components/seo"

import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"












export default function ThanksPage({}) {
   return (


    
    <Layout className="thanks-page">


 

    
<div
      className="wrapper"
      style={{
        textAlign: "center",
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "20vw",
          color: "var(--primary-color)",
          textAlign:'center',
          border:'0px solid red',
          width:'100%'
        }}
        className="letter"
      />

      <br />
      <h1>Got your message</h1>
      <p>Thank you for getting in touch with me. I will get back to you shortly.</p>
      <Link to="/" className="moreButton">
        <RiArrowLeftSLine className="icon -left" />
        go back to homepage
      </Link>
    </div>
    
    
    </Layout>

  )
}
