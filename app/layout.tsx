import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huy Tu — Senior Software Engineer",
  description:
    "Portfolio of Huy Tu, a Senior Software Engineer with five years of experience in backend architecture, distributed systems, full-stack products, and agentic AI.",
  keywords: [
    "Huy Tu",
    "Senior Software Engineer",
    "Full-stack Engineer",
    "Software Architect",
    "Agentic AI",
    "Node.js",
    "TypeScript",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
