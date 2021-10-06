import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <h2>Assalamu'alaikum</h2> */}
    <p>
      Assalamu'alaikum, selamat datang di osnmath.online
      <br />
      Wahana belajar Olimpiade Matematika
    </p>
    <p>
      disini kami menyediakan materi pembelajaran Olimpiade Matematika, <br />
      dan juga mengadakan Try Out secara berkala{" "}
    </p>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
