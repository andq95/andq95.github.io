import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";

export default function HomePage(): JSX.Element {
  return (
    <Layout title="Trang chủ" description="Portfolio & Blog của Đặng Quốc An">
      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>
              👋 Xin chào, tôi là <span>Đặng Quốc An</span>
            </h1>
            <p>
              Lập trình viên <strong>Backend</strong> & nhà phát triển{" "}
              <strong>Machine Learning</strong>, đam mê sáng tạo sản phẩm thông
              minh và game phiêu lưu.
            </p>

            <div className={styles.buttons}>
              <Link className={styles.btnPrimary} to="/cv">
                Xem CV & Kỹ năng
              </Link>
              <Link className={styles.btnSecondary} to="/portfolio">
                Xem Portfolio
              </Link>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img
              src="https://avatars.githubusercontent.com/u/40834431?v=4"
              alt="Quốc An Avatar"
            />
          </div>
        </section>

        <section className={styles.about}>
          <h2>💡 Về tôi</h2>
          <p>
            Tôi yêu thích công nghệ, đặc biệt là <b>AI</b> và{" "}
            <b>Game Development</b>. Tôi thường thử nghiệm các mô hình học máy,
            huấn luyện mô hình dự đoán dữ liệu thực tế như Vietlott, đồng thời
            phát triển game nhập vai bằng RPG Maker MV.
          </p>
        </section>

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <h3>⚙️ Backend & Web</h3>
            <p>
              Phát triển hệ thống backend với Node.js, Express, PostgreSQL, REST
              API, và Next.js.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>🧠 Machine Learning</h3>
            <p>
              Xây dựng mô hình dự đoán, phân tích dữ liệu với TensorFlow,
              Scikit-learn, Pandas.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>🎮 Game Development</h3>
            <p>
              Tạo thế giới nhập vai, thiết kế cốt truyện, và phát triển gameplay
              bằng RPG Maker MV.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
