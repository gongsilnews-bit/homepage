import Header02 from '@/components/templates/template02/Header02';
import Footer02 from '@/components/templates/template02/Footer02';
import FloatingButtons02 from '@/components/templates/template02/FloatingButtons02';

export default function Template02Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header02 />
      <main className="flex-1">{children}</main>
      <Footer02 />
      <FloatingButtons02 />
    </>
  );
}
