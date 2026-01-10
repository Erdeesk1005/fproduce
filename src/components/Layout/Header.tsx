import Link from "next/link";
import Language from "../locale/language";
import Image from "next/image";
import { useRouter } from "next/router";
import { headerData } from "@/data/headerData";

type HeaderLocale = keyof typeof headerData; // "en" | "jp" | "sg"

export default function Header() {
  const { locale } = useRouter();

  const currentLocale = (locale ?? "en") as HeaderLocale;
  const data = headerData[currentLocale] || headerData.en;

  return (
    <header>
      <div className="bg-white text-black text-xl font-bold w-full px-4">
        <nav className="flex items-center max-w-6xl mx-auto justify-between h-24">
          <Link href="/" locale={currentLocale}>
            <div className="relative w-20 h-20 cursor-pointer">
              <Image
                src="/logo.png"
                alt={data.logoAlt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-9 justify-center">
            {data.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                locale={currentLocale}
                className="hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Language />
        </nav>
      </div>
    </header>
  );
}
