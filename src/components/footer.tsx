import { useTranslations } from "next-intl";
import Link from "next-intl/link";

const Footer = () => {
  const t = useTranslations("Index");
  return (
    <>
      <div className="flex justify-between">
        <Link href="/" locale="en">
          to English
        </Link>
        <Link href="/" locale="ar">
          to Arabic
        </Link>
      </div>
    </>
  );
};
export default Footer;
