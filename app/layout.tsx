"use client";

import { useCallback } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "sans-serif",
          paddingTop: "70px",
        }}
      >
        {/* HEADER */}
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
          <a onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })} style={linkStyle}>
            HOME
          </a>

          <a onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} style={linkStyle}>
            ABOUT
          </a>

          <a onClick={() => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })} style={linkStyle}>
            PROJECT
          </a>

          <a onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={linkStyle}>
            CONTACT
          </a>
        </header>

        {children}
      </body>
    </html>
  );
}

const linkStyle: React.CSSProperties = {
  cursor: "pointer",
  textDecoration: "none",
  color: "black",
  fontWeight: 500
};