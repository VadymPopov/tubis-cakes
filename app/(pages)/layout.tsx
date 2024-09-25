import '@/app/globals.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: "%s | Tubi's Cakes",
    default: "Tubi's Cakes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto my-0 flex min-h-screen flex-col">
        <nav>Navigation and header</nav>
        <main className="mt-[92px] flex-1 xl:mt-[104px]">{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
