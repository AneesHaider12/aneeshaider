import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anees Haider",
  description: "Anees Haider Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
      </head>
      <body className={inter.className}>
        <div className="container mx-auto ">
          <div className="leading-relaxed text-slate-200 antialiased selection:bg-teal-300  selection:text-teal-900">
             {children}
          </div>

        </div>
      </body>
    </html>
  );
}
