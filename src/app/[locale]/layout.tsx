import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Header } from "../../components/header/header";
import { Footer } from "@/components/footer/footer";
import { ReactQueryClientProvider } from "@/utils/providers/react-query";


export const metadata = {
  title: 'Montana Swiss',
  description: 'ms_watches.uz',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <ReactQueryClientProvider>
            {children}
          </ReactQueryClientProvider>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
