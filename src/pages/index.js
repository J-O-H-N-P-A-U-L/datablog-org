import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const projects = [
  {
    name: "Jupyter Code Llama Project",
    description:
      "Step into the world of Jupyter notebooks with the Jupyter Code Llama Project. Explore my data analysis and coding skills as I work on various projects using Jupyter notebooks and Python. Get ready to code like a pro!",
    repositoryUrl: "https://github.com/J-O-H-N-P-A-U-L/jupyter-code-llama",
  },
  {
    name: "AIPND Project",
    description:
      "Bringing AI to life with the AIPND Project! Dive into the world of artificial intelligence as I tackle a fascinating project. Explore the code and see how I navigate the complexities of AI and machine learning.",
    repositoryUrl: "https://github.com/J-O-H-N-P-A-U-L/aipnd-project",
  },
  {
    name: "R Shiny NYPD Felonies Project",
    description:
      "Explore crime data like never before with the R Shiny NYPD Felonies Project. This project demonstrates my data analysis and visualization skills using R Shiny. Dive into crime statistics in an interactive way.",
    repositoryUrl: "https://github.com/J-O-H-N-P-A-U-L/r-shiny-nypd-felonies",
  },
  {
    name: "Flood Forecasting Project",
    description:
      "Join me on a mission to save lives and properties! The Flood Forecasting Project is my contribution to mitigating flood risks. I've leveraged data analysis and predictive modeling to build a tool that can help forecast potential flood events.",
    repositoryUrl: "https://github.com/J-O-H-N-P-A-U-L/Flood_forecasting",
  },
]

const IndexPage = () => (
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
        Discover My World of Coding Adventures!
      </h1>
      <p className={styles.intro}>
        Hey there! I'm John Paul, and I thrive in the realm of code. Join me on a journey through some of my most exciting GitHub projects. From dynamic web apps to data wizardry, Jupyter notebooks, interactive crime data visualization, and even flood forecasting, it's all here.
      </p>
    </div>
    <ul className={styles.list}>
      {projects.map((project) => (
        <li key={project.repositoryUrl} className={styles.listItem}>
          <h2>{project.name}</h2>
          <p className={styles.listItemDescription}>{project.description}</p>
          <a
            className={styles.listItemLink}
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Dive In ↗
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
export const Head = () => <Seo title="John Paul Hunter's Projects" />

export default IndexPage
