import { Roboto } from "next/font/google";
import "./globals.css";
// import { AntdRegistry } from "@ant-design/nextjs-registry";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    absolute: "",
    default: "InfoTech Digital Learning Center ",
    template: "%s | IDLC",
  },
  description: "InfoTech Digital Learning Center Website",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/site-icon.png",
        href: "/site-icon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/site-icon.png",
        href: "/site-icon.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
