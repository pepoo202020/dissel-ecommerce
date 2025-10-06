import FloatingActionButtons from "@/components/layouts/main/FloatingActionButtons";
import MainFooter from "@/components/layouts/main/MainFooter";
import MainHeader from "@/components/layouts/main/MainHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full  flex flex-col items-start justify-start relative max-w-screen-xl mx-auto">
      <MainHeader />
      <main className="flex-1 w-full h-ful">{children}</main>
      <MainFooter />
      <FloatingActionButtons />
    </div>
  );
}
