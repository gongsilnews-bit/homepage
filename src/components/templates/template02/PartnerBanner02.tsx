const partners = [
  '국토교통부',
  '한국부동산원',
  'HUG 주택도시보증공사',
  '공실뉴스',
  '교차로',
  '벼룩시장'
];

export default function PartnerBanner02() {
  return (
    <section className="py-10 bg-white border-t border-gray-border">
      <div className="max-w-[1280px] mx-auto px-4 overflow-hidden relative">
        <div className="flex items-center gap-8 md:gap-16 opacity-50 justify-center flex-wrap">
          {partners.map((partner) => (
            <div key={partner} className="text-lg font-black text-gray-400 uppercase tracking-tight">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
