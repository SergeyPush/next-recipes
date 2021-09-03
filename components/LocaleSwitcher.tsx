import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query, asPath } = router;
  const [otherLocale, setOtherLocale] = useState<string>();

  useEffect(() => {
    const loc = locales.filter((locale) => locale !== activeLocale)[0];
    setOtherLocale(loc);
  }, [activeLocale]);

  const switchLocale = () => {
    const loc = locales.filter((locale) => locale !== activeLocale)[0];
    setOtherLocale(loc);
  };

  return (
    <>
      <Link href={{ pathname, query }} as={asPath} locale={otherLocale}>
        <a onClick={() => switchLocale()} className={"switch-button"}>
          {otherLocale?.substring(0, 2)}
        </a>
      </Link>
      <style jsx>{`
        .switch-button {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          text-transform: capitalize;
          display: block;
        }
      `}</style>
    </>
  );
};

export default LocaleSwitcher;
