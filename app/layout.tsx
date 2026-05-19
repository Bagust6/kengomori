import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        
        {/* Header */}
        <header style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "20px",
          borderBottom: "1px solid #eee",
          fontSize: "14px",
          fontWeight: 500
        }}>
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>HOME</Link>
          <Link href="/about" style={{ textDecoration: "none", color: "black" }}>ABOUT</Link>
          <Link href="/projects" style={{ textDecoration: "none", color: "black" }}>PROJECTS</Link>
          <Link href="/contact" style={{ textDecoration: "none", color: "black" }}>CONTACT</Link>
        </header>

        {/* Page content */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}