import "../globals.css";
import HeaderAuth from "@/app/(components)/header-auth";
import Link from "next/link";

export const metadata = {
  title: "Dashboard",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
        <HeaderAuth />
        {children}
        </section>
  );
}