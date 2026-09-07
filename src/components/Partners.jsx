import GlowBackground from "./GlowBackground";
import {
  FaStripe,
  FaSpotify,
  FaTwitch,
  FaApple,
  FaAmazon,
  FaGoogle,
  FaWindows,
  FaReact,
  FaSalesforce,
  FaSlack,
  FaGitlab,
  FaFigma,
} from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

const partnersData = [
  { name: "Stripe", icon: FaStripe, since: "2015" },
  { name: "Spotify", icon: FaSpotify, since: "2015" },
  { name: "Apple", icon: FaApple, since: "2016" },
  { name: "Twitch", icon: FaTwitch, since: "2015" },
  { name: "Amazon", icon: FaAmazon, since: "2017" },
  { name: "Google", icon: FaGoogle, since: "2015" },
  { name: "Microsoft", icon: FaWindows, since: "2018" },
  { name: "React", icon: FaReact, since: "2015" },
  { name: "Salesforce", icon: FaSalesforce, since: "2019" },
  { name: "Slack", icon: FaSlack, since: "2020" },
  { name: "GitLab", icon: FaGitlab, since: "2021" },
  { name: "Figma", icon: FaFigma, since: "2022" },
];

const Partners = () => {
  return (
    <section className="relative overflow-hidden bg-brand-blue px-5 py-20 text-white lg:py-28">
      <GlowBackground />
      <div className="custom-container relative z-10">
        <div className="flex flex-col gap-6 border-l-8 border-brand-cyan-light pl-6 md:flex-row md:items-end md:justify-between md:pl-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-cyan-light">Trusted by</p>
            <h2 className="mt-4 font-gotham text-4xl font-black uppercase leading-[0.95] tracking-tight lg:text-6xl">
              Our key partners
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/80 lg:text-base">
              We focus on markets where safety, quality and compliance unlock
              long-term value.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-b-2 border-brand-green-light pb-1 text-sm font-black uppercase tracking-widest text-brand-green-light"
          >
            Become a partner <GoArrowRight />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-3 md:grid-cols-4">
          {partnersData.map(({ name, icon: Icon, since }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 bg-brand-blue px-4 py-10 hover:bg-brand-blue-light"
            >
              <Icon className="h-10 w-10 text-white" />
              <p className="font-gotham text-sm font-black uppercase tracking-wide">
                {name}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan-light">
                Partner since {since}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
