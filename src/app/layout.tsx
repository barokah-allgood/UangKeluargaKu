import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uang KeluargaKu - Aplikasi Keuangan Keluarga Modern",
  description: "Aplikasi keuangan keluarga untuk memantau anggaran harian dan mingguan secara kolaboratif. Transparansi finansial, keharmonisan keluarga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
