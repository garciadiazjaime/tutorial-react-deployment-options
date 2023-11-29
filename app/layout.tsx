import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React: From Implementation to Deployment",
  description: "How to deploy your application to the cloud",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
