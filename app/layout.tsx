import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { DecorativeElements } from "@/components/decorative-elements";
import { FixedDecorativeElements } from "@/components/fixed-decorative-elements";
import { InfiniteScrollElements } from "@/components/infinite-scroll-elements";

export const metadata: Metadata = {
  title: "Happy Birthday meri behena! ❤️",
  description: "A special birthday message for someone special",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <DecorativeElements />
          <FixedDecorativeElements />
          <InfiniteScrollElements />
          {children}
        </Providers>
      </body>
    </html>
  );
}
