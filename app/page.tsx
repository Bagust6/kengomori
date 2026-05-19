import Image from "next/image";

export default function Home() {
  const sectionStyle = {
    padding: "20px 20px",
    maxWidth: "720px",
    margin: "0 auto",
    fontSize: "18px",
    lineHeight: "1.8"
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    marginBottom: "20px"
  };

  return (
    <main>

      {/* ================= HOME (HERO) ================= */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          color: "white"
        }}
      >
        {/* background */}
        <Image
          src="/Hero.jpeg"
          alt="background"
          fill
          priority
          style={{
            objectFit: "cover",
            zIndex: -2
          }}
        />

        {/* overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: -1
          }}
        />

        {/* content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "52px", fontWeight: "bold", letterSpacing: "-0.03em" }}>
            KENGO MORI
          </div>

          <div style={{ fontSize: "16px", marginTop: "12px", opacity: 0.9 }}>
            Software Engineer · Tokyo
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" style={sectionStyle}>
        <h2 style={titleStyle}>About Me</h2>

        <Image
          src="/Profile.jpeg"
          alt="Kengo Mori"
          width={160}
          height={160}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}
        />

        <p>
          I’m <b>Kengo Mori (杜健豪)</b>, a software engineer based in Tokyo, Japan.
        </p>

        <p>
          I build web applications, backend systems, and practical tools.
        </p>

        <p>
          My focus is on creating simple, reliable, and maintainable software that solves real-world problems.
        </p>

        <p>
          I value clarity in both code and thinking, and prefer pragmatic solutions over unnecessary complexity.
        </p>

        <p>
          My guiding principle is <br />
          <b>論より証拠 (ron yori shōko)</b> — evidence over theory.
        </p>
      </section>

      {/* ================= DRAKE GIF ================= */}
      <div style={{ maxWidth: "980px", margin: "auto" }}>
        <img
          src="/drake-computer.gif"
          alt="Mid visual"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>

      {/* ================= PROJECTS ================= */}
      <section id="project" style={sectionStyle}>
        <h2 style={titleStyle}>My Projects</h2>

        <p>
          <a
            href="https://kengomori.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            Kengo Mori Portfolio
          </a>
        </p>
        <p>
          {/* next project */}
        </p>
      </section>

      {/* ================= MID IMAGE ================= */}
      <div style={{ maxWidth: "980px", margin: "auto", padding: "0 16px" }}>
        <Image
          src="/Mid-page.jpeg"
          alt="Mid visual"
          width={1200}
          height={800}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "12px"
          }}
        />
      </div>

      {/* ================= CONTACT ================= */}
      <section id="contact" style={sectionStyle}>
        <h2 style={titleStyle}>Contact & Socials</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <span style={{ fontWeight: 600 }}>GitHub:</span>{" "}
            <a href="https://github.com/bagust6" style={{ color: "#2563eb", textDecoration: "none" }}>
              bagust6
            </a>
          </div>

          <div>
            <span style={{ fontWeight: 600 }}>Instagram:</span>{" "}
            <a href="https://www.instagram.com/bagust129" style={{ color: "#2563eb", textDecoration: "none" }}>
              @bagust129
            </a>
          </div>

          <div>
            <span style={{ fontWeight: 600 }}>TikTok:</span>{" "}
            <a href="https://www.tiktok.com/@kengomori33" style={{ color: "#2563eb", textDecoration: "none" }}>
              @kengomori33
            </a>
          </div>

          <div>
            <span style={{ fontWeight: 600 }}>YouTube:</span>{" "}
            <a href="https://www.youtube.com/@bagust129" style={{ color: "#2563eb", textDecoration: "none" }}>
              Bagust129
            </a>
          </div>
        </div>
      </section>

      {/* ================= END IMAGE ================= */}
      <div style={{ maxWidth: "980px", margin: "auto", padding: "0 16px" }}>
        <Image
          src="/End-page.jpeg"
          alt="End visual"
          width={1200}
          height={800}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "16px"
          }}
        />
      </div>

    </main>
  );
}