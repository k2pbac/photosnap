import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <Image
          src="/assets/shared/desktop/logo-footer.svg"
          alt="logo"
          width={160}
          height={16}
        ></Image>
        <div className="icons">
          <Image
            src="/assets/shared/desktop/facebook.svg"
            alt="facebook-icon"
            width={20}
            height={20}
          ></Image>
          <Image
            src="/assets/shared/desktop/youtube.svg"
            alt="youtube-icon"
            width={20}
            height={20}
          ></Image>
          <Image
            src="/assets/shared/desktop/twitter.svg"
            alt="twitter-icon"
            width={20}
            height={20}
          ></Image>
          <Image
            src="/assets/shared/desktop/pinterest.svg"
            alt="pinterest-icon"
            width={20}
            height={20}
          ></Image>
          <Image
            src="/assets/shared/desktop/instagram.svg"
            alt="instagram-icon"
            width={20}
            height={20}
          ></Image>
        </div>
      </div>
      <div className="page-links">
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/STORIES">STORIES</Link>
          </li>
          <li>
            <Link href="/FEATURES">FEATURES</Link>
          </li>
          <li>
            <Link href="/PRICING">PRICING</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
