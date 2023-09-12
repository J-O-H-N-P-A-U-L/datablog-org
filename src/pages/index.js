import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const blogPosts = [
  {
    title: "Unlocking Insights with Data Analysis",
    excerpt:
      "Join me on a journey through the world of data analysis, where we uncover hidden patterns and make data-driven decisions. Learn how Python, Pandas, and Matplotlib play pivotal roles in this adventure.",
    postUrl: "https://datablog.org/unlocking-insights-data-analysis",
  },
  {
    title: "Building Dynamic Web Applications with MERN Stack",
    excerpt:
      "Explore the fascinating realm of full-stack web development with me as we delve into Project A. Discover how MongoDB, Express.js, React, and Node.js come together to create powerful web applications.",
    postUrl: "https://datablog.org/mern-stack-web-development",
  },
  {
    title: "Inspire Your Day with React Native: Project C",
    excerpt:
      "Join me in exploring the world of mobile app development as we dive into Project C. This React Native-based app is designed to uplift and motivate with daily quotes and images.",
    postUrl: "https://datablog.org/inspire-your-day-react-native",
  },
];

const DatablogHomepage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Datablog.org - John Paul's Data Adventures
      </h1>
      <p className={styles.intro}>
        Welcome to Datablog.org, where I, John Paul Hunter, share my exciting adventures in the world of data. Join me on a journey filled with data analysis, web development, and mobile app creation. Explore my latest blog posts below.
      </p>
    </div>
    <ul className={styles.list}>
      {blogPosts.map((post) => (
        <li key={post.postUrl} className={styles.listItem}>
          <h2>{post.title}</h2>
          <p className={styles.listItemDescription}>{post.excerpt}</p>
          <a
            className={styles.listItemLink}
            href={post.postUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More ↗
          </a>
        </li>
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Datablog.org - John Paul's Data Adventures" />

export default DatablogHomepage;
