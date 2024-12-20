import Link from "next/link"
import style from "@/styles/Exhibit.module.css"
import { FaXTwitter, FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa6'

export default function page() {
  return (
    <div className={style.success}>
      <h1>Thank you!</h1>
      <p>Thank you for your interest in Tech Trade Show. A member of our event team will be in touch with you shortly to address your requirements.</p>
      <p>Below are the contact details for the respective teams should you require direct communication with them.</p>
      <p><b>Sales & Sponsorship Enquiries:</b> <Link href={"mailto:sales@ttsglobal.tech"}>sales@ttsglobal.tech</Link></p>
      <p>Follow us on social media to stay in the loop with the latest industry insights and explore all that Tech Trade Show has to offer.</p>
      <div className={style.success__socials}>
        <Link href={"https://twitter.com/"}><FaXTwitter /></Link>
        <Link href={"https://www.facebook.com/"}><FaFacebook /></Link>
        <Link href={"https://www.linkedin.com/company/"}><FaLinkedin /></Link>
        <Link href={"https://www.instagram.com/"}><FaInstagram /></Link>
      </div>
      <h2 style={{marginTop: "20px"}}><Link href={"/files/Lorem_ipsum.pdf"} download={true} className="dropdown__item">Download the Brochure</Link></h2>
    </div>
  )
}
