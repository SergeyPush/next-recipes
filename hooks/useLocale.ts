import en from "../locales/en";
import ru from "../locales/ru";
import { useRouter } from "next/router";

export const useLocale = () => {
  const { locale } = useRouter();

  const t = locale.includes("en") ? en : ru;

  return { t };
};
