import "./globals.css";

export const metadata = {
  title: "ChatGPT",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* Sidebar */}

          {/* Client Provider - Notification */}

          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
