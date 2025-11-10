import React from "react";
import Layout from "@theme/Layout";
import styles from "./portfolio.module.css";

interface Project {
  name: string;
  desc: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    name: "Vietlott Predictor",
    desc: "Mô hình Deep Learning dự đoán kết quả Vietlott 6/55 dựa trên dữ liệu lịch sử.",
    tech: ["Python", "TensorFlow", "Pandas"],
    image:
      "https://raw.githubusercontent.com/andq95/assets/main/vietlott_demo.png",
    github: "https://github.com/andq95/vietlott-predictor",
  },
  {
    name: "Fantasy RPG Game",
    desc: "Game phiêu lưu nhập vai 1–2 tiếng phát triển bằng RPG Maker MV, thế giới giả tưởng với quái vật và tiên tri.",
    tech: ["RPG Maker MV", "Pixel Art", "Story Design"],
    image:
      "https://raw.githubusercontent.com/andq95/assets/main/rpg_game_cover.png",
  },
  {
    name: "Uptime Bỉd",
    desc: "Nền tảng theo dõi uptime và đấu giá resource backend (ý tưởng kinh doanh nhỏ).",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    image:
      "https://raw.githubusercontent.com/andq95/assets/main/uptimebid_mockup.png",
  },
];

export default function PortfolioPage(): JSX.Element {
  return (
    <Layout title="Portfolio" description="Các dự án cá nhân của tôi">
      <main className={styles.container}>
        <h1 className={styles.title}>Dự án & Portfolio</h1>
        <p className={styles.subtitle}>
          Một số dự án cá nhân và sản phẩm mình đã hoặc đang phát triển.
        </p>

        <div className={styles.grid}>
          {projects.map((proj) => (
            <div key={proj.name} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={proj.image} alt={proj.name} />
              </div>
              <div className={styles.cardContent}>
                <h3>{proj.name}</h3>
                <p>{proj.desc}</p>
                <div className={styles.techList}>
                  {proj.tech.map((t) => (
                    <span key={t} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🧠 GitHub
                    </a>
                  )}
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🌐 Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
