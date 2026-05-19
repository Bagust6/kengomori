export default function Contact() {
  return (
    <main style={{
      maxWidth: "700px",
      margin: "0 auto",
      padding: "80px 20px",
      fontSize: "18px",
      lineHeight: "1.8"
    }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Contact
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        
        <div>
          <span style={{ fontWeight: 600 }}>Email:</span>{" "}
          <a href="mailto:kengomori33@gmail.com" style={{ color: "#2563eb" }}>
            kengomori33@gmail.com
          </a>
        </div>

        <div>
          <span style={{ fontWeight: 600 }}>Instagram:</span>{" "}
          <a href="https://www.instagram.com/bagust129" style={{ color: "#2563eb" }}>
            @bagust129
          </a>
        </div>

        <div>
          <span style={{ fontWeight: 600 }}>TikTok:</span>{" "}
          <a href="https://www.tiktok.com/@kengomori33" style={{ color: "#2563eb" }}>
            @kengomori33
          </a>
        </div>

        <div>
          <span style={{ fontWeight: 600 }}>YouTube:</span>{" "}
          <a href="https://www.youtube.com/@bagust129" style={{ color: "#2563eb" }}>
            Bagust129
          </a>
        </div>

      </div>
    </main>
  );
}