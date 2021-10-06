import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>
      Assalamu'alaikum, selamat datang di{" "}
      <span
        style={{
          color: `#009688`,
        }}
      >
        osnmath.online
      </span>
      <br />
      Wahana belajar Olimpiade Matematika
    </p>
    <p>
      Kami menyediakan{" "}
      <Link
        to="/tryout"
        style={{
          color: `#009688`,
        }}
      >
        materi
      </Link>{" "}
      pembelajaran Olimpiade Matematika, <br />
      dan juga mengadakan{" "}
      <Link
        to="/tryout"
        style={{
          color: `#009688`,
        }}
      >
        TryOut
      </Link>{" "}
      secara berkala
    </p>
    <div style={{ marginTop: "50px" }}>
      Salam,
      <br />
      Author{" "}
    </div>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
  </Layout>
)

export default IndexPage
