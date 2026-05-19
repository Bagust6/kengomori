export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "sans-serif",
          paddingTop: "70px",
          scrollBehavior: "smooth",
        }}
      >
        <header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            height: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            fontSize: "14px",
            fontWeight: 500,
            background: "white",
            borderBottom: "1px solid #eee",
            zIndex: 1000,
          }}
        >
          <a href="#home" style={{ textDecoration: "none", color: "black" }}>
            HOME
          </a>
          <a href="#about" style={{ textDecoration: "none", color: "black" }}>
            ABOUT
          </a>

          <a href="#project" style={{ textDecoration: "none", color: "black" }}>
            PROJECT
          </a>
          <a href="#contact" style={{ textDecoration: "none", color: "black" }}>
            CONTACT
          </a>
        </header>

        {children}
      </body>
    </html>
  );
}