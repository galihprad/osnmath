import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>
      Assalamu'alaikum, selamat datang di osnmath.online
      <br />
      Wahana belajar Olimpiade Matematika
    </p>
    <p>
      Kami menyediakan materi pembelajaran Olimpiade Matematika, <br />
      dan juga mengadakan Try Out secara berkala
    </p>
    <div style={{ marginTop: "100px" }}>
      Kontak:
      <br />
      galih.p.w.j@gmail.com
      <br />
      0858.7765.7708
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
