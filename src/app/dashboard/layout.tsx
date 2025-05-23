import Sidebar from "@/shared/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex bg-white">
      <div
        className="border-r border-r-gray-200 h-screen sticky top-0 overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <Sidebar />
      </div>
      {children}
    </div>
  );
}
