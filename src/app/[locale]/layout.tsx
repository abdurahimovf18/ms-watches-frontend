import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Header } from "../../components/header/header";
import { LeftSideBar } from "@/shared/navigations/left-sidebar";


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
      <body className="antialiased h-screen bg-gray-50 text-gray-900">
        <Header />

        <main className="overflow-y-auto w-full">
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </main>
      </body>
    </html>
  );
}
