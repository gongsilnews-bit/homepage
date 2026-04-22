import { FiCheckCircle } from 'react-icons/fi';

const searchCards = [
  { title: '주차 가능', desc: '주차가 가능한 매물찾기' },
  { title: '월세', desc: '임대 매물' },
  { title: 'LH전세', desc: '청년·신혼부부·다자녀' },
  { title: '전세자금대출', desc: '전세 대출 가능한 매물찾기' },
  { title: '단기임대', desc: '1개월 이상 단기 가능' },
  { title: '반려동물', desc: '강아지, 고양이 가능' },
  { title: '풀옵션', desc: '가전/가구 완비' },
  { title: '신축', desc: '지은지 3년 이내' },
];

export default function ConditionSearch02() {
  return (
    <section className="bg-gray-light py-16">
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-10">
          다양한 조건별 매물 검색
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {searchCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-6 group cursor-pointer hover:shadow-lg transition-all border border-gray-border hover:border-teal/30"
            >
              <h3 className="text-lg font-bold text-dark group-hover:text-teal transition-colors mb-2">
                {card.title}
              </h3>
              <p className="text-[13px] text-gray-medium flex items-center gap-1">
                <FiCheckCircle className="text-teal" size={12} />
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
