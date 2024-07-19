import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/main.scss";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Generate Strong Password",
  description: "Upgrade the security of your online accounts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
