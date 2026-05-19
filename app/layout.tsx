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
          <button
            onClick={() => scrollTo("home")}
            style={btnStyle}
          >
            HOME
          </button>

          <button
            onClick={() => scrollTo("about")}
            style={btnStyle}
          >
            ABOUT
          </button>

          <button
            onClick={() => scrollTo("project")}
            style={btnStyle}
          >
            PROJECT
          </button>

          <button
            onClick={() => scrollTo("contact")}
            style={btnStyle}
          >
            CONTACT
          </button>
        </header>

        {children}
      </body>
    </html>
  );
}

const btnStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 500,
  color: "black",
};