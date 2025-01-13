import Link from "next/link"
import style from "@/styles/Exhibit.module.css"
import { FaXTwitter, FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa6'

export default function page() {
  return (
    <div className={style.success}>
      <h1 className="text-2xl mb-5">Oops! Something Went Wrong with Your Payment</h1>
      <p>We&apos;re sorry, but it seems there was an issue processing your payment for the VIP pass to the Tech Trade Show event. Don&apos;t worry, we&apos;re here to help!</p>
      <h1 className="text-xl my-3">What to Do Next:</h1>
      <ol className="mb-5">
        <li>1. Please check your payment details and try again.</li>
        <li>2. If you used a credit/debit card, ensure there are sufficient funds and the card information is entered correctly.</li>
        <li>3. If the issue persists, you can contact your payment provider or try an alternate payment method.</li>
      </ol>

      <p>If you believe this is an error or need further assistance, please reach out to our support team at <Link href={"mailto:support@ttsglobal.tech"}>support@ttsglobal.tech</Link></p>

      <p>We want to ensure you don&apos;t miss out on this exciting event, so please complete your purchase as soon as possible.</p>
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
