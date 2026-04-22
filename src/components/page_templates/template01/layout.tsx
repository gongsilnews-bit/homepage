import Header01 from '@/components/templates/template01/Header01';
import Footer01 from '@/components/templates/template01/Footer01';

export default function Template01Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header01 />
      <main className="flex-1">{children}</main>
      <Footer01 />
    </>
  );
}
