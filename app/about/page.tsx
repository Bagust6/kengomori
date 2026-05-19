import Image from "next/image";

export default function About() {
  return (
    <main style={{
      maxWidth: "720px",
      margin: "0 auto",
      padding: "80px 20px",
      fontSize: "18px",
      lineHeight: "1.8"
    }}>
      <h1 style={{ fontSize: "36px", marginBottom: "24px" }}>
        About Me
      </h1>

      <Image
        src="/Picture.jpeg"
        alt="Kengo Mori"
        width={160}
        height={160}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "28px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1px solid #eee"
        }}
      />

      <p>
        Hi, I’m <b>Kengo Mori (杜健豪)</b>, a software engineer based in Tokyo.
      </p>

      <p>
        I work on web applications, backend systems, and practical tools.
        My focus is building reliable, simple, and useful software while improving my full-stack engineering skills.
      </p>

      <p>
        I care about clarity in both code and thinking, and prefer building things that work in real life over over-engineered systems.
        <br />
        <b>論より証拠 (ron yori shōko)</b> — evidence over theory.
      </p>

      <p>
        Outside of engineering, I enjoy Brazilian Jiu-Jitsu, language learning, piano, driving, and sauna culture.
      </p>

      <div style={{ height: "40px" }} />

      <h2 style={{ fontSize: "26px", marginBottom: "16px" }}>
        A bit more about me
      </h2>

      <p>
        Based in Tokyo · Originally from Medan, Indonesia · Open to opportunities worldwide
      </p>

      <p>
        Languages: Japanese, English, Indonesian, Malay, Mandarin
      </p>

      <p>
        Music: Classical, J-Pop, R&B, and more
      </p>

      <p>
        Open to collaborations and interesting projects.
      </p>
    </main>
  );
}