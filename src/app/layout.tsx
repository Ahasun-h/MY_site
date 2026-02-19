import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahasun_H | Web Developer Portfolio",
  description:
    "I'm Md.Ahasun Habib, a Full Stack Software Engineer proficient in Laravel, WordPress, Vue.js, and JavaScript.",
  icons: {
    icon: "/assets/img/root/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="/assets/css/framework/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/assets/css/vlt-plugins.min.css" />
        <link rel="stylesheet" href="/assets/css/vlt-main.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body style={{ scrollBehavior: "smooth" }}>
        {children}
      </body>
    </html>
  );
}
