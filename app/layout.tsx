import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huy Tu — Senior Software Engineer",
  description:
    "Portfolio of Huy Tu, a Senior Software Engineer building reliable full-stack, distributed, and agentic AI systems.",
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
