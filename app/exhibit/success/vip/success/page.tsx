import Link from "next/link"
import style from "@/styles/Exhibit.module.css"
import { FaXTwitter, FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa6'

export default function page() {
  return (
    <div className={style.success}>
      <h1>Thank you!</h1>
      <p>Your payment has been successfully processed, and your VIP pass for the upcoming Tech Trade Show event is almost ready.</p>
      <p><b>What&apos;s Next?</b> You will receive a confirmation email shortly with all the details about your VIP pass. This will include a unique QR code that you&apos;ll need to access the event.</p>
      <p>Please check your inbox (and your spam/junk folder just in case). If you don&apos;t see the email within the next few minutes, feel free to reach out to our support team for assistance.</p>
      <p><b>Get Ready for an Exclusive Experience!</b> We&apos;re excited to welcome you to this exciting event where you&apos;ll have access to cutting-edge tech, industry leaders, and much more. Stay tuned for further details!</p>
      <p><b>Need Help?</b> If you have any questions or concerns, contact our support team at <Link href={"mailto:support@ttsglobal.tech"}>support@ttsglobal.tech</Link></p>
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
