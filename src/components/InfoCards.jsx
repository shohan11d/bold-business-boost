import infoCards from "../data/infoCards.json";
import FadeInUp from "./FadeInUp";

function InfoCards() {
  return (
    <section className="py-12 px-5">
      <div className="custom-container">
        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card, idx) => (
            <FadeInUp key={idx} delay={`delay-${(idx % 4) * 100}`}>
              <div
                className="max-w-[400px] rounded-xl transition-all duration-500 hover:-translate-y-1 md:max-w-[400px] lg:max-w-[314px]"
              >
                <div className={`h-48 w-full rounded-xl overflow-hidden shadow-card ${card.gradient}`}>
                  <img src={`/${card.image}`} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="px-3">
                  <h3 className="pt-5 font-gotham text-[15px] font-extrabold text-darkBlue uppercase tracking-wider">
                    {card.title}
                  </h3>
                  <p className="mt-1 mb-3 font-gotham text-xs">
                    {card.description}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoCards;
