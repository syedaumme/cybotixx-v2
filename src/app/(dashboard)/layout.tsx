import Dock from "@/components/dock";
import PageHeader from "@/components/page-header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex justify-center items-center">
      <div className="md:w-1/2 w-screen">
        <PageHeader />
        {children}
      </div>
      <Dock />
    </main>
  );
}
