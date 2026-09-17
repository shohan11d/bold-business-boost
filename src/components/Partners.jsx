import aciAsset from "../assets/client-logos/aci-group-logo-png_seeklogo-342185_1.png.asset.json";
import ajinomotoAsset from "../assets/client-logos/ajinomoto.svg.asset.json";
import akijInsafAsset from "../assets/client-logos/akij-insaf.jpg.asset.json";
import akijResourcesAsset from "../assets/client-logos/akij-resources.webp.asset.json";
import akijVentureAsset from "../assets/client-logos/akij-venture.png.asset.json";
import aquaPaintAsset from "../assets/client-logos/aqua-paint.png.asset.json";
import bauAsset from "../assets/client-logos/bau.png.asset.json";
import bombaySweetsAsset from "../assets/client-logos/bombay-sweets.png.asset.json";
import dxnAsset from "../assets/client-logos/dxn.png.asset.json";
import eliteSteelAsset from "../assets/client-logos/elite-steel.png.asset.json";
import gemconAsset from "../assets/client-logos/gemcon.png.asset.json";
import careNutritionAsset from "../assets/client-logos/care-nutrition.webp.asset.json";
import icddrbAsset from "../assets/client-logos/icddrb-Logo-Vector.svg-.png.asset.json";
import kishwanAsset from "../assets/client-logos/kishwan.png.asset.json";
import meghnaGroupAsset from "../assets/client-logos/meghna-group.webp.asset.json";
import newZealandDairyAsset from "../assets/client-logos/new-zealand-dairy.png.asset.json";
import ovijatAsset from "../assets/client-logos/ovijat.png.asset.json";
import pranAsset from "../assets/client-logos/pran-logo-png_seeklogo-258211.png.asset.json";
import reveAsset from "../assets/client-logos/reve-group.png.asset.json";
import sauAsset from "../assets/client-logos/sau.png.asset.json";
import senaKalyanAsset from "../assets/client-logos/sena-kalyan.svg.asset.json";
import unitedGroupAsset from "../assets/client-logos/united-group.svg.asset.json";

const clients = [
  { name: "icddr,b", logo: icddrbAsset.url, logoClass: "max-h-16" },
  { name: "PRAN", logo: pranAsset.url, logoClass: "max-h-24" },
  { name: "Akij Venture", logo: akijVentureAsset.url, logoClass: "max-h-14 max-w-[78%] sm:max-h-16" },
  { name: "Akij INSAF", logo: akijInsafAsset.url, logoClass: "max-h-24 scale-110 sm:max-h-24" },
  { name: "Akij Resources", logo: akijResourcesAsset.url },
  { name: "Meghna Group", logo: meghnaGroupAsset.url, logoClass: "max-h-24" },
  { name: "Care Nutrition", logo: careNutritionAsset.url, logoClass: "max-h-16" },
  { name: "ACI", logo: aciAsset.url, logoClass: "max-h-24" },
  { name: "Gemcon Group", logo: gemconAsset.url, logoClass: "max-h-24 scale-110 sm:max-h-24" },
  { name: "Sher-e-Bangla Agricultural University", logo: sauAsset.url, logoClass: "max-h-24 scale-110 sm:max-h-24" },
  { name: "Banoful Kishwan Group", logo: kishwanAsset.url },
  { name: "United Group", logo: unitedGroupAsset.url, invert: true },
  { name: "DXN", logo: dxnAsset.url },
  { name: "Sena Kalyan Constructions & Developments", logo: senaKalyanAsset.url },
  { name: "Elite Steel", logo: eliteSteelAsset.url },
  { name: "Aqua Paint", logo: aquaPaintAsset.url },
  { name: "Reve Group", logo: reveAsset.url, logoClass: "max-h-24 max-w-[88%] sm:max-h-24" },
  { name: "Ajinomoto", logo: ajinomotoAsset.url },
  { name: "Bombay Sweets & Co. Ltd.", logo: bombaySweetsAsset.url },
  { name: "Ovijat Food & Beverage Industries Ltd.", logo: ovijatAsset.url },
  { name: "Bangladesh Agricultural University", logo: bauAsset.url, logoClass: "max-h-24 scale-110 sm:max-h-24" },
  { name: "New Zealand Dairy", logo: newZealandDairyAsset.url, logoClass: "max-h-20 w-full max-w-[92%] sm:max-h-20" },
];

const Partners = () => {
  return (
    <section className="bg-brand-blue-deep px-5 py-20 text-white lg:py-28">
      <div className="custom-container">
        <div className="border-l-8 border-brand-cyan-light pl-6 md:pl-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-cyan-light">Selected clients</p>
            <h2 className="mt-4 font-gotham text-4xl font-black uppercase leading-[0.95] tracking-tight lg:text-6xl">
              Companies we have worked with
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/80 lg:text-base">
              Supporting organizations across food, healthcare, agriculture,
              manufacturing and construction.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {clients.map(({ name, logo, invert, logoClass }) => (
            <div
              key={name}
              className="group relative flex h-28 w-[calc(50%-0.375rem)] items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/5 px-5 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-brand-cyan-light/60 hover:bg-white/10 sm:h-32 sm:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-0.75rem)]"
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-cyan transition-transform duration-300 group-hover:scale-x-100" />
              {logo ? (
                <img
                  src={logo}
                  alt={`${name} logo`}
                  loading="lazy"
                  className={`relative max-h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:max-h-20 ${logoClass ?? ""} ${invert ? "p-2" : ""}`}
                />
              ) : (
                <p className="max-w-52 font-gotham text-sm font-black uppercase leading-snug text-brand-blue md:text-base">
                  {name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
