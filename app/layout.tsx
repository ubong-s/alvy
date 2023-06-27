import { ClientProvider } from "@/utils/ClientProvider";
import { Header, Footer } from "./components";
import "./globals.css";

export const metadata = {
  title: "Alvy Agency",
  description: "Fashion and Branding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-4">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
