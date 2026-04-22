import Hero02 from '@/components/templates/template02/Hero02';
import ConditionSearch02 from '@/components/templates/template02/ConditionSearch02';
import PropertySection02 from '@/components/templates/template02/PropertySection02';
import Consultation02 from '@/components/templates/template02/Consultation02';
import PartnerBanner02 from '@/components/templates/template02/PartnerBanner02';

export const metadata = {
  title: '여기와방 | 원룸·투룸·오피스텔 전문',
  description: '내가 찾는 방 여기 다 있다! 원룸, 미투, 투룸, 쓰리룸 이상 전문 부동산.',
};

export default function Template02Page() {
  return (
    <>
      <Hero02 />
      <ConditionSearch02 />
      <PropertySection02 />
      <Consultation02 />
      <PartnerBanner02 />
    </>
  );
}
