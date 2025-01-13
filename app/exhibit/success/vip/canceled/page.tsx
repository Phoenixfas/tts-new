import Link from "next/link"
import style from "@/styles/Exhibit.module.css"
import { FaXTwitter, FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa6'

export default function page() {
  return (
    <div className={style.success}>
      <h1 className="text-2xl mb-5">Your Payment Has Been Canceled</h1>
      <p>We regret to inform you that your payment for the VIP pass to the Tech Trade Show event has been canceled. This could be due to a variety of reasons, such as an issue with your payment method or a request from your payment provider.</p>
      <h1 className="text-xl my-3">What You Can Do:</h1>
      <ol className="mb-5">
        <li>1. <b>Review Your Payment Method:</b> Check your payment details and ensure everything is correct.</li>
        <li>2. <b>Try Again:</b> You can attempt the payment again by visiting the &apos;upgrade to vip&apos; link in the initial Free pass email.</li>
        <li>3. <b>Contact Your Payment Provider:</b> If the payment was canceled by your provider, please reach out to them for more information.</li>
      </ol>

      <p>If you need assistance or have any questions, our support team is ready to help. Please contact us at <Link href={"mailto:support@ttsglobal.tech"}>support@ttsglobal.tech</Link></p>

      <p>We hope to see you at the event soon!</p>
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
