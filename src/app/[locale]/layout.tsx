//Layout.tsx
import "./globals.css";
import { locales, LocaleType } from "@/i18n/locales";
import { notFound } from "next/navigation";
import StoreProvider from "@/_redux/StoreProvider";

export const dynamicParams = true
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: LocaleType }>;
}) {

  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <StoreProvider locale={locale}>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
