import React from "react";
import Layout from "@theme/Layout";
import styles from "./cv.module.css";

interface Skill {
  name: string;
  level: number; // 0–100
  category: string;
}

const skills: Skill[] = [
  { name: "Node.js / Express", level: 85, category: "Backend" },
  { name: "React / Next.js", level: 80, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  {
    name: "Python / Pandas / Scikit-learn",
    level: 90,
    category: "Machine Learning",
  },
  { name: "TensorFlow / PyTorch", level: 70, category: "Machine Learning" },
  { name: "RPG Maker MV / Game Design", level: 85, category: "Game Dev" },
];

const projects = [
  {
    name: "Dự đoán kết quả Vietlott 6/55",
    desc: "Huấn luyện mô hình Deep Learning dự đoán kết quả xổ số dựa trên dữ liệu lịch sử CSV.",
    link: "https://github.com/andq95/vietlott-predictor",
  },
  {
    name: "Game RPG Maker MV",
    desc: "Game phiêu lưu nhập vai 1–2 tiếng, thế giới giả tưởng với quái vật và tiên tri.",
    link: "#",
  },
];

export default function CVPage(): JSX.Element {
  const groupedSkills = skills.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <Layout title="CV & Kỹ năng" description="CV và kỹ năng của tôi">
      <main className={styles.container}>
        <section className={styles.header}>
          <img
            src="https://avatars.githubusercontent.com/u/40834431?v=4" // đổi avatar GitHub của bạn
            alt="Avatar"
            className={styles.avatar}
          />
          <div>
            <h1>Đặng Quốc An</h1>
            <p>Lập trình viên Backend & Nhà nghiên cứu Machine Learning</p>
            <p>📍 TP. Hồ Chí Minh | 📧 dangquocan95@gmail.com</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Giới thiệu</h2>
          <p>
            Tôi là lập trình viên backend và nhà phát triển machine learning với
            niềm đam mê tạo ra các sản phẩm thông minh, sáng tạo và hữu ích.
            Ngoài ra, tôi còn yêu thích phát triển game và xây dựng trải nghiệm
            nhập vai trong thế giới giả tưởng.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Kỹ năng</h2>
          {Object.entries(groupedSkills).map(([category, list]) => (
            <div key={category} className={styles.skillGroup}>
              <h3>{category}</h3>
              {list.map((skill) => (
                <div key={skill.name} className={styles.skill}>
                  <span>{skill.name}</span>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Dự án tiêu biểu</h2>
          <div className={styles.projectGrid}>
            {projects.map((proj) => (
              <div key={proj.name} className={styles.projectCard}>
                <h3>{proj.name}</h3>
                <p>{proj.desc}</p>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    🔗 Xem chi tiết
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Học vấn & Chứng chỉ</h2>
          <ul>
            <li>🎓 Cử nhân CNTT – [Tên trường đại học của bạn]</li>
            <li>📜 Chứng chỉ Machine Learning – Coursera / DeepLearning.AI</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Liên hệ</h2>
          <p>
            💌 Email: <a href="mailto:dangquocan95@gmail.com">dangquocan95@gmail.com</a>
          </p>
          <p>
            🌐 GitHub:{" "}
            <a
              href="https://github.com/andq95"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/andq95
            </a>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/an-đặng-quốc-764a90173"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/an-đặng-quốc-764a90173
            </a>
          </p>
        </section>
      </main>
    </Layout>
  );
}
