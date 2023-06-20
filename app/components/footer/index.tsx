import { CompanyInfo } from "./CompanyInfo";
import { Copyright } from "./Copyright";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  return (
    <footer className="grid gap-4 lg:grid-cols-4 xl:grid-cols-5 font-roboto-mono uppercase">
      <CompanyInfo />
      <div className="grid gap-4 lg:col-span-3 xl:col-span-4">
        <FooterLinks />
        <Copyright />
      </div>
    </footer>
  );
};
