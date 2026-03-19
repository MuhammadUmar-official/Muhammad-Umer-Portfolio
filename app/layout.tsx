import "./globals.css";

export const metadata = {
  title: "Muhammad Umer – AI/ML Engineer",
  description: "AI/ML Engineer & Data Scientist Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
