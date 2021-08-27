import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Officelite Sign Up</title>
      </Head>
      <h1>Work smarter. Save time.</h1>
      <p>
        Easily manage your projects. Get on the list and receive in-app perks
        available only to early subscribers. We are moving into final
        development and getting ready for official launch soon.
      </p>
      <div>
        {/* If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page */}
        <p>Coming 4 Nov 2020</p>

        {/* If you're choosing to make this timer dynamic, have it countdown from the date you set above */}
        <div>
          <div>47 Days</div>
          <div>07 Hours</div>
          <div>56 Min</div>
          <div>14 Sec</div>
        </div>
      </div>

      <div>
        <div>Name</div>
        <div>Email Address</div>
        <div>
          <div>
            <span>Basic</span> Pack Free
          </div>
          <div>
            <div>
              <span>Basic</span> Pack Free
            </div>
            <div>
              <span>Pro</span> Pack $9.99
            </div>
            <div>
              <span>Ultimate</span> Pack $19.99
            </div>
          </div>
        </div>
        <div>Phone Number</div>
        <div>Company</div>
        <div>Get on the list</div>
      </div>
    </>
  );
}
