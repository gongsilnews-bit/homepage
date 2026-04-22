import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';

export default function Location01() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4">
        
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-bold text-dark mb-2">오시는 길</h2>
          <p className="text-gray-500 text-[15px]">빌드온 부동산에 방문하시어 전문가의 상담을 받아보세요.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Map Image Placeholder (Since we don't have Naver Map API ready here) */}
          <div className="h-[400px] w-full bg-gray-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2504938637503!2d127.02705001558712!3d37.49757697981033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1598c4745db%3A0x8fc81977799b66ee!2sGangnam%20Station!5e0!3m2!1sen!2skr!4v1651564756584!5m2!1sen!2skr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="오시는길 지도"
            ></iframe>
          </div>

          {/* Info Section */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-1">
                <FiMapPin size={18} />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-dark mb-1">상세 주소</h4>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  서울특별시 서초구 강남대로39길 15-11<br />
                  002호 (서초동, 서초 노블레스 아파트)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-1">
                <FiPhone size={18} />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-dark mb-1">고객센터</h4>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  대표전화: 02-598-9788<br />
                  임대/임차문의: 010-3398-7678
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-1">
                <FiClock size={18} />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-dark mb-1">운영시간</h4>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  평일: 09:30 ~ 18:30<br />
                  주말/공휴일: 휴무
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
