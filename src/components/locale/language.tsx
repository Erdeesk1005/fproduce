import { useRouter } from "next/router";

export default function Language() {
  const { locales, locale, asPath, push } = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    push(asPath, asPath, { locale: newLocale });
  };

  return (
    <select value={locale} onChange={handleChange}>
      {locales?.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
