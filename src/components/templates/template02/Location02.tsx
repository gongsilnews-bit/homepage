import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';

export default function Location02() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-2">오시는 길</h2>
            <p className="text-gray-medium text-[15px]">따뜻한 차 한 잔 준비해 놓고 기다리겠습니다.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-border/50">
          <div className="flex flex-col lg:flex-row">
            
            {/* Map Area */}
            <div className="lg:w-2/3 h-[300px] lg:h-[500px] bg-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198889.47167660722!2d128.23236069904252!3d36.143642398460676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35661b36e84ed02d%3A0xc6cb517ce955a1ed!2sGumi-si%2C%20Gyeongsangbuk-do!5e0!3m2!1sen!2skr!4v1651564756584!5m2!1sen!2skr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="여기와방 지도"
              ></iframe>
            </div>

            {/* Info Area */}
            <div className="lg:w-1/3 bg-teal p-8 lg:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-black mb-8 border-b border-white/20 pb-6">
                여기와방 공인중개사사무소
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FiMapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-teal-light mb-1">상세 주소</h4>
                    <p className="text-[15px] font-medium leading-relaxed">
                      경상북도 구미시 인동중앙로 1길 2<br />
                      여기와방빌딩 1층
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FiPhone size={16} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-teal-light mb-1">고객센터</h4>
                    <p className="text-[15px] font-bold leading-relaxed text-yellow-300 tracking-wide text-lg">
                      010-1234-5678
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FiClock size={16} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-teal-light mb-1">방문 가능시간</h4>
                    <p className="text-[15px] font-medium leading-relaxed">
                      매일: 10:00 ~ 20:00<br />
                      연중무휴 (일요일은 예약제)
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
