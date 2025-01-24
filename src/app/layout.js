import "./globals.css";
import NavBar from "../components/NavBar";
import Provider from "../context/Provider";
import { montserrat } from "./fonts";

export const metadata = {
  title: "Life Pharmacy",
  description: "More than a pharmacy your partner in wellness",
  keywords: ["life", "pharmacy", "pharma"],
}; // For SEO purpose

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${montserrat.className}`}>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
