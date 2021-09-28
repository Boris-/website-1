// Imports
import Layout from "@components/Layout"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    { name: "OpenSea", url: "" },
    { name: "Discord", url: "https://discord.gg/pDPXhd56Yr" },
    {
      name: "Twitter",
      url: "https://twitter.com/JungleFreaksNFT",
    },
    {
      name: "Contract",
      url: "",
    },
  ];
  
  return (
    <Layout>
      <div>
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>Jungle Freaks</h1>

          {/* Quicklinks */}
          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Description */}
          <p>
            We are doing some work behind the scenes
            Website will be back up soon!
          </p>
        </div>
      </div>
    </Layout>
  );
}
