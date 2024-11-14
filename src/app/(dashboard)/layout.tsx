import Dock from "@/components/dock";
import PageHeader from "@/components/page-header";
import { Separator } from "@/components/ui/separator";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen flex justify-center items-center pt-5">
      <div className="md:w-1/2 w-screen">
        <PageHeader />
        <Separator className="mt-5 w-full" />
        {children}
      </div>
      <Dock />
    </main>
  );
}
