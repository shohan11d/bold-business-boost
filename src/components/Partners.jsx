import aciAsset from "../assets/client-logos/aci.svg.asset.json";
import ajinomotoAsset from "../assets/client-logos/ajinomoto.svg.asset.json";
import akijResourcesAsset from "../assets/client-logos/akij-resources.webp.asset.json";
import akijVentureAsset from "../assets/client-logos/akij-venture.png.asset.json";
import aquaPaintAsset from "../assets/client-logos/aqua-paint.png.asset.json";
import bauAsset from "../assets/client-logos/bau.png.asset.json";
import bombaySweetsAsset from "../assets/client-logos/bombay-sweets.png.asset.json";
import dxnAsset from "../assets/client-logos/dxn.png.asset.json";
import eliteSteelAsset from "../assets/client-logos/elite-steel.png.asset.json";
import gemconAsset from "../assets/client-logos/gemcon.png.asset.json";
import icddrbAsset from "../assets/client-logos/icddrb.png.asset.json";
import kishwanAsset from "../assets/client-logos/kishwan.png.asset.json";
import newZealandDairyAsset from "../assets/client-logos/new-zealand-dairy.png.asset.json";
import ovijatAsset from "../assets/client-logos/ovijat.png.asset.json";
import pranAsset from "../assets/client-logos/pran.png.asset.json";
import reveAsset from "../assets/client-logos/reve-group.png.asset.json";
import sauAsset from "../assets/client-logos/sau.png.asset.json";
import senaKalyanAsset from "../assets/client-logos/sena-kalyan.svg.asset.json";
import unitedGroupAsset from "../assets/client-logos/united-group.svg.asset.json";

const clients = [
  { name: "Shajib Brother GP" },
  { name: "icddr,b", logo: icddrbAsset.url },
  { name: "PRAN", logo: pranAsset.url },
  { name: "Akij Venture", logo: akijVentureAsset.url },
  { name: "Akij INSAF" },
  { name: "Akij Resources", logo: akijResourcesAsset.url },
  { name: "Meghna Group" },
  { name: "Care Nutrition" },
  { name: "ACI", logo: aciAsset.url },
  { name: "Gemcon Group", logo: gemconAsset.url },
  { name: "Sher-e-Bangla Agricultural University", logo: sauAsset.url },
  { name: "Banoful Kishwan Group", logo: kishwanAsset.url },
  { name: "United Group", logo: unitedGroupAsset.url, invert: true },
  { name: "DXN", logo: dxnAsset.url },
  { name: "Sena Kalyan Constructions & Developments", logo: senaKalyanAsset.url },
  { name: "Elite Steel", logo: eliteSteelAsset.url },
  { name: "Aqua Paint", logo: aquaPaintAsset.url },
  { name: "Reve Group", logo: reveAsset.url },
  { name: "Ajinomoto", logo: ajinomotoAsset.url },
  { name: "Bombay Sweets & Co. Ltd.", logo: bombaySweetsAsset.url },
  { name: "Ovijat Food & Beverage Industries Ltd.", logo: ovijatAsset.url },
  { name: "Bangladesh Agricultural University", logo: bauAsset.url },
  { name: "New Zealand Dairy", logo: newZealandDairyAsset.url },
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

        <div className="mt-14 grid grid-cols-2 gap-px bg-white/20 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map(({ name, logo, invert }) => (
            <div
              key={name}
              className="flex min-h-36 items-center justify-center bg-white px-5 py-7 text-center sm:min-h-40"
            >
              {logo ? (
                <img
                  src={logo}
                  alt={`${name} logo`}
                  loading="lazy"
                  className={`max-h-20 w-auto max-w-full object-contain ${invert ? "rounded-sm bg-brand-blue-deep p-3" : ""}`}
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
