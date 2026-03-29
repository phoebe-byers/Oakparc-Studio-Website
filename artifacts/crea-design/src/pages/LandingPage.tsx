import img_hero from "@assets/86-web-or-mls-DSC_4784_(1)_1774817217305.jpg";

import img_cutter_kitchen from "@assets/127-web-or-mls-DSC_4994_(1)_1774817217308.jpg";
import img_cutter_kitchen2 from "@assets/138-web-or-mls-DSC_5054_1774817217309.jpg";
import img_cutter_dining from "@assets/129-web-or-mls-DSC_5004_1774817217308.jpg";
import img_cutter_pantry from "@assets/133-web-or-mls-DSC_5024_1774817217309.jpg";
import img_cutter_living2 from "@assets/119-web-or-mls-DSC_4954_1774817217307.jpg";
import img_cutter_bath from "@assets/95-web-or-mls-DSC_4829_1774817217306.jpg";
import img_cutter_shower from "@assets/96-web-or-mls-DSC_4834_1774817217307.jpg";
import img_cutter_tub from "@assets/99-web-or-mls-DSC_4849_1774817217307.jpg";

import img_oakpark_bar from "@assets/543-Oak-Park-Dr-San-Francisco_(03_of_57)_1774817217309.jpg";
import img_oakpark_living from "@assets/543-Oak-Park-Dr-San-Francisco_(13_of_57)_1774817570145.jpg";
import img_oakpark_fireplace from "@assets/543-Oak-Park-Dr-San-Francisco_(20_of_57)_1774817570146.jpg";
import img_oakpark_kitchen from "@assets/543-Oak-Park-Dr-San-Francisco_(17_of_57)_1774817570145.jpg";
import img_oakpark_kitchen2 from "@assets/543-Oak-Park-Dr-San-Francisco_(18_of_57)_1774817570145.jpg";
import img_oakpark_suite from "@assets/543-Oak-Park-Dr-San-Francisco_(11_of_57)_1774817570144.jpg";
import img_oakpark_bedroom from "@assets/543-Oak-Park-Dr-San-Francisco_(05_of_57)_1774817570143.jpg";
import img_oakpark_den from "@assets/543-Oak-Park-Dr-San-Francisco_(07_of_57)_1774817570144.jpg";
import img_oakpark_shower_penny from "@assets/543-Oak-Park-Dr-San-Francisco_(09_of_57)_1774817570144.jpg";
import img_oakpark_bath from "@assets/543-Oak-Park-Dr-San-Francisco_(25_of_57)_1774817570146.jpg";
import img_oakpark_entry from "@assets/543-Oak-Park-Dr-San-Francisco_(29_of_57)_1774817570147.jpg";
import img_oakpark_shower_rain from "@assets/543-Oak-Park-Dr-San-Francisco_(35_of_57)_1774817570147.jpg";

import img_desoto_living from "@assets/012_703_de_soto-4_1774817217303.jpg";
import img_desoto_entry from "@assets/007_703_de_soto-25_1774817217302.jpg";
import img_desoto_kitchen from "@assets/024_703_de_soto-21_1774817217305.jpg";
import img_desoto_bath from "@assets/020_703_de_soto-14_1774817217304.jpg";
import img_desoto_shower from "@assets/016_703_de_soto-10_1774817217303.jpg";
import img_desoto_vanity from "@assets/017_703_de_soto-11_1774817217303.jpg";

import img_orchard_kitchen from "@assets/023_pheobe_2550_orchard_avenue_-_13_1774817217305.jpg";
import img_orchard_bath from "@assets/018_pheobe_2550_orchard_avenue_-_8_1774817217304.jpg";
import img_orchard_bedroom from "@assets/019_pheobe_2550_orchard_avenue_-_9_1774817217304.jpg";
import img_orchard_living from "@assets/013_pheobe_2550_orchard_avenue_-_33_0_1774817751821.jpg";
import img_orchard_bunks from "@assets/016_pheobe_2550_orchard_avenue_-_6_1774817751822.jpg";

const services = [
  {
    label: "01",
    heading: "Design That Reworks How You Live",
    body: "We start from scratch on how your home actually functions — reimagining layout, flow, and spatial planning to unlock the full potential of every square foot.",
    items: ["Layout, flow, and spatial planning", "Structural and cosmetic renovations", "Kitchens, bathrooms, and full-home transformations"],
  },
  {
    label: "02",
    heading: "Execution That Upgrades the Asset",
    body: "Our team coordinates every trade and detail from foundation to finish — so the home that comes out the other side is more valuable in every sense of the word.",
    items: ["Systems, infrastructure, and construction coordination", "Finish and fixture selection across the entire project", "Indoor–outdoor living expansion"],
  },
  {
    label: "03",
    heading: "Spaces That Are Fully Realized",
    body: "We don't stop at construction. Every project ends with furnishing, styling, and the final layering that turns a beautiful house into a home you actually love living in.",
    items: ["Furnishing and styling", "Thoughtfully designed, fully finished spaces", "Lifestyle-driven environments built around how you actually live"],
  },
];

const projects = [
  {
    img: img_cutter_kitchen2,
    label: "Cutter Lane",
    type: "Full-home transformation",
    gallery: [img_cutter_kitchen, img_cutter_dining, img_cutter_pantry, img_cutter_living2, img_cutter_bath, img_cutter_shower, img_cutter_tub],
    featured: true,
  },
  {
    img: img_oakpark_living,
    label: "Oak Park Drive",
    type: "Full-home renovation",
    gallery: [img_oakpark_fireplace, img_oakpark_kitchen, img_oakpark_kitchen2, img_oakpark_suite, img_oakpark_bedroom, img_oakpark_den, img_oakpark_shower_penny, img_oakpark_bath, img_oakpark_entry, img_oakpark_shower_rain, img_oakpark_bar],
    featured: true,
  },
  {
    img: img_desoto_living,
    label: "De Soto Street",
    type: "Interiors & full renovation",
    gallery: [img_desoto_entry, img_desoto_kitchen, img_desoto_bath, img_desoto_shower, img_desoto_vanity],
    featured: false,
  },
  {
    img: img_orchard_kitchen,
    label: "Orchard Avenue",
    type: "Kitchen, bath & interiors",
    gallery: [img_orchard_bath, img_orchard_bedroom],
    featured: false,
  },
];

export function LandingPage() {
  return (
    <div
      style={{ fontFamily: "'Jost', sans-serif" }}
      className="min-h-screen bg-[#f9f7f4] text-[#1c1a17]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500&display=swap');
        .font-serif-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* ── Nav ─────────────────────────────────────── */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-10">
          <a href="#work" data-testid="nav-work" className="font-body text-[10px] tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors">Work</a>
          <a href="#services" data-testid="nav-services" className="font-body text-[10px] tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors">Services</a>
        </div>
        <div className="font-serif-display text-[22px] font-light tracking-widest text-white uppercase" data-testid="brand-name">
          Oakparc Studio
        </div>
        <div className="flex items-center gap-10">
          <a href="#studio" data-testid="nav-studio" className="font-body text-[10px] tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors">Studio</a>
          <a href="#contact" data-testid="nav-start-project" className="font-body text-[10px] tracking-[0.25em] uppercase text-white border-b border-white/40 pb-px hover:text-white hover:border-white transition-colors">
            Start a Project
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={img_hero}
          alt="Cutter Lane — grand entry with staircase and chandelier"
          className="absolute inset-0 w-full h-full object-cover object-center"
          data-testid="hero-image"
        />
        <div className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.48) 30%, rgba(0,0,0,0.10) 52%, rgba(0,0,0,0.04) 68%, rgba(0,0,0,0.08) 100%)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/15" />

        <div className="absolute inset-y-0 left-0 w-[38%] flex flex-col justify-center px-14 py-20">
          <h1 className="font-serif-display text-[clamp(3.8rem,5.5vw,6.5rem)] font-medium leading-[1.04] text-white mb-8" data-testid="hero-heading">
            Homes,<br /><em>Completely</em><br />Reimagined
          </h1>
          <p className="font-body text-[16px] text-white font-normal leading-relaxed mb-10 max-w-xs">
            Oakparc Studio is a Park City–based design-build company creating thoughtfully reimagined homes — from first idea to final install — for clients nationwide.
          </p>
          <div className="flex flex-col gap-4">
            <a href="#work" data-testid="hero-cta-work" className="font-body text-[10px] tracking-[0.25em] uppercase text-white flex items-center gap-3 group">
              <span className="w-6 h-px bg-white group-hover:w-10 transition-all duration-300" />
              View Our Work
            </a>
            <a href="#contact" data-testid="hero-cta-project" className="font-body text-[10px] tracking-[0.25em] uppercase text-white/55 flex items-center gap-3 group">
              <span className="w-6 h-px bg-white/55 group-hover:w-10 transition-all duration-300" />
              Start a Project
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 right-10">
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-white/55">Cutter Lane</span>
        </div>
      </section>

      {/* ── Studio Statement ── */}
      <section className="py-28 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 items-start">
          <div className="col-span-4">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9a8f7e] mb-0 mt-3">Our Ethos</p>
          </div>
          <div className="col-span-8">
            <p className="font-serif-display text-[clamp(1.6rem,2.5vw,2.4rem)] font-light leading-[1.4] text-[#1c1a17]" data-testid="ethos-text">
              We believe in taking what you have and making it work better for you. That means rethinking the layout, refining how each space flows, and finishing with a level of care that makes every room feel considered and intentional.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section id="work" className="px-10 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-serif-display text-[clamp(1.4rem,2vw,2rem)] font-light text-[#1c1a17]">Selected Work</h2>
            <a href="#work" data-testid="link-view-all" className="font-body text-[10px] tracking-[0.25em] uppercase text-[#9a8f7e] hover:text-[#1c1a17] transition-colors flex items-center gap-2">
              <span>View All Projects</span>
              <span className="w-4 h-px bg-current" />
            </a>
          </div>

          {/* Row 1: Cutter Lane large (featured) + Oak Park Drive right */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Cutter Lane — featured large */}
            <div className="col-span-2 relative h-[62vh] overflow-hidden group" data-testid="card-project-cutter-lane">
              <img
                src={projects[0].img}
                alt={projects[0].label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/70 mb-1">{projects[0].type}</p>
                <p className="font-serif-display text-xl font-light text-white">{projects[0].label}</p>
              </div>
              {/* Always-visible label at bottom */}
              <div className="absolute bottom-6 left-6">
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-white/60 mb-0.5">{projects[0].type}</p>
                <p className="font-serif-display text-[1.1rem] font-light text-white">{projects[0].label}</p>
              </div>
            </div>

            {/* Oak Park Drive — featured right */}
            <div className="col-span-1 relative h-[62vh] overflow-hidden group" data-testid="card-project-oak-park">
              <img
                src={projects[1].img}
                alt={projects[1].label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-5">
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-white/60 mb-0.5">{projects[1].type}</p>
                <p className="font-serif-display text-[1.1rem] font-light text-white">{projects[1].label}</p>
              </div>
            </div>
          </div>

          {/* Row 2: De Soto and Orchard equal */}
          <div className="grid grid-cols-2 gap-4">
            {[projects[2], projects[3]].map((p, i) => (
              <div key={i} className="relative h-[40vh] overflow-hidden group" data-testid={`card-project-${i + 2}`}>
                <img src={p.img} alt={p.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-body text-[9px] tracking-[0.25em] uppercase text-white/60 mb-0.5">{p.type}</p>
                  <p className="font-serif-display text-[1.1rem] font-light text-white">{p.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Detail Gallery — Cutter Lane ── */}
      <section className="px-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-baseline gap-6">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9a8f7e]">Featured Project</p>
            <h3 className="font-serif-display text-[1.4rem] font-light text-[#1c1a17]">Cutter Lane</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1 row-span-2 relative overflow-hidden" style={{ height: "52vh" }}>
              <img src={img_cutter_kitchen} alt="Cutter Lane kitchen" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "25vh" }}>
              <img src={img_cutter_kitchen2} alt="Cutter Lane kitchen vaulted" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "25vh" }}>
              <img src={img_cutter_bath} alt="Cutter Lane bathroom" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "25vh" }}>
              <img src={img_cutter_dining} alt="Cutter Lane dining" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "25vh" }}>
              <img src={img_cutter_tub} alt="Cutter Lane primary bath" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Detail Gallery — Oak Park Drive ── */}
      <section className="px-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-baseline gap-6">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9a8f7e]">Featured Project</p>
            <h3 className="font-serif-display text-[1.4rem] font-light text-[#1c1a17]">Oak Park Drive</h3>
          </div>
          {/* Row 1: fireplace living + kitchen */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="col-span-2 relative overflow-hidden" style={{ height: "42vh" }}>
              <img src={img_oakpark_fireplace} alt="Oak Park Drive living room with fireplace" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "42vh" }}>
              <img src={img_oakpark_kitchen} alt="Oak Park Drive kitchen" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Row 2: suite + kitchen detail + den */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="relative overflow-hidden" style={{ height: "30vh" }}>
              <img src={img_oakpark_suite} alt="Oak Park Drive primary suite" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "30vh" }}>
              <img src={img_oakpark_kitchen2} alt="Oak Park Drive kitchen detail" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "30vh" }}>
              <img src={img_oakpark_bedroom} alt="Oak Park Drive bedroom" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Row 3: entry + bath + shower */}
          <div className="grid grid-cols-3 gap-3">
            <div className="relative overflow-hidden" style={{ height: "26vh" }}>
              <img src={img_oakpark_entry} alt="Oak Park Drive entry" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "26vh" }}>
              <img src={img_oakpark_bath} alt="Oak Park Drive bathroom" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "26vh" }}>
              <img src={img_oakpark_shower_penny} alt="Oak Park Drive shower" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Detail Gallery — De Soto Street ── */}
      <section className="px-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-baseline gap-6">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9a8f7e]">Featured Project</p>
            <h3 className="font-serif-display text-[1.4rem] font-light text-[#1c1a17]">De Soto Street</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 relative overflow-hidden" style={{ height: "38vh" }}>
              <img src={img_desoto_living} alt="De Soto living room" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "38vh" }}>
              <img src={img_desoto_entry} alt="De Soto entry" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "28vh" }}>
              <img src={img_desoto_kitchen} alt="De Soto kitchen" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "28vh" }}>
              <img src={img_desoto_vanity} alt="De Soto bathroom" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "28vh" }}>
              <img src={img_desoto_bath} alt="De Soto bath detail" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Detail Gallery — Orchard Avenue ── */}
      <section className="px-10 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-baseline gap-6">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9a8f7e]">Featured Project</p>
            <h3 className="font-serif-display text-[1.4rem] font-light text-[#1c1a17]">Orchard Avenue</h3>
          </div>
          {/* Row 1: kitchen large + bedroom + bath stacked */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="col-span-2 relative overflow-hidden" style={{ height: "38vh" }}>
              <img src={img_orchard_kitchen} alt="Orchard Avenue kitchen" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-rows-2 gap-3" style={{ height: "38vh" }}>
              <div className="relative overflow-hidden">
                <img src={img_orchard_bedroom} alt="Orchard Avenue bedroom" className="w-full h-full object-cover" />
              </div>
              <div className="relative overflow-hidden">
                <img src={img_orchard_bath} alt="Orchard Avenue bathroom" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          {/* Row 2: living room + bunk room */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden" style={{ height: "30vh" }}>
              <img src={img_orchard_living} alt="Orchard Avenue living room" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "30vh" }}>
              <img src={img_orchard_bunks} alt="Orchard Avenue bunk room" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-28 bg-[#f0ece5]">
        <div className="max-w-6xl mx-auto px-10">
          <div className="flex items-baseline justify-between mb-16">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9a8f7e]">What We Do</p>
            <h2 className="font-serif-display text-[clamp(1.8rem,2.5vw,2.8rem)] font-light text-[#1c1a17]">Full-Service, Start to Finish</h2>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {services.map((s, i) => (
              <div key={i} data-testid={`service-card-${i}`}>
                <div className="font-body text-[10px] tracking-[0.25em] uppercase text-[#9a8f7e] mb-5">{s.label}</div>
                <h3 className="font-serif-display text-[1.3rem] font-light leading-snug text-[#1c1a17] mb-4">{s.heading}</h3>
                <p className="font-body text-[13px] text-[#6b6053] font-light leading-relaxed mb-6">{s.body}</p>
                <ul className="space-y-2.5 border-t border-[#d8d1c7] pt-6">
                  {s.items.map((item, j) => (
                    <li key={j} className="font-body text-[12px] text-[#6b6053] font-light flex items-start gap-2.5">
                      <span className="mt-[6px] w-3 h-px bg-[#b0a599] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Virtual Design ── */}
      <section className="py-0">
        <div className="flex items-stretch">
          <div className="w-1/2 bg-[#2a2520] flex flex-col justify-center px-16 py-24">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9a8f7e] mb-8">Wherever You Are</p>
            <h2 className="font-serif-display text-[clamp(2rem,3vw,3.2rem)] font-light leading-[1.15] text-white mb-7">
              Full-service design,<br /><em>virtually delivered</em>
            </h2>
            <p className="font-body text-[13px] text-[#b0a08e] font-light leading-relaxed mb-5 max-w-md">
              Not every project requires on-site presence to be done exceptionally well. Our virtual design program delivers the same thoughtful process — spatial planning, material selection, sourcing, and detailed drawings — through a structured remote collaboration built for clients across the country.
            </p>
            <p className="font-body text-[13px] text-[#b0a08e] font-light leading-relaxed mb-10 max-w-md">
              Ideal for primary renovations, vacation properties, and clients in markets we don't visit regularly. You get the same quality of thinking. We handle the rest.
            </p>
            <a href="#contact" data-testid="link-virtual-design" className="font-body text-[10px] tracking-[0.25em] uppercase text-white flex items-center gap-3 group w-fit">
              <span className="w-6 h-px bg-white group-hover:w-10 transition-all duration-300" />
              Learn About Virtual Design
            </a>
          </div>
          <div className="w-1/2 relative overflow-hidden" style={{ minHeight: "520px" }}>
            <img
              src={img_cutter_living2}
              alt="Cutter Lane bright living room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-28 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-5">
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9a8f7e] mb-6">How We Work</p>
              <h2 className="font-serif-display text-[clamp(2rem,3vw,3rem)] font-light leading-tight text-[#1c1a17]">
                Every home begins<br />with a conversation
              </h2>
            </div>
            <div className="col-span-6 col-start-7 flex items-end">
              <p className="font-body text-[13px] text-[#6b6053] font-light leading-relaxed">
                We keep our client roster intentionally small. That's not a limitation — it's a commitment. It means the people leading your project are the people who designed it, from the first call to the final walkthrough.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {[
              { step: "Discovery", copy: "We learn how you live, what isn't working, and where the home's real potential is hiding." },
              { step: "Design", copy: "Space planning, architecture, material palettes, and every detail of the design narrative." },
              { step: "Execution", copy: "Construction coordination, contractor management, and on-site oversight from start to finish." },
              { step: "Installation", copy: "Full furnishing, art placement, styling, and the final reveal of your completely transformed home." },
            ].map((item, i) => (
              <div key={i} className="border-t border-[#d8d1c7] pt-8" data-testid={`process-step-${i}`}>
                <div className="font-body text-[10px] tracking-[0.2em] uppercase text-[#9a8f7e] mb-4">0{i + 1}</div>
                <h4 className="font-serif-display text-[1.1rem] font-light text-[#1c1a17] mb-3">{item.step}</h4>
                <p className="font-body text-[12px] text-[#6b6053] font-light leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull quote ── */}
      <section className="relative h-[55vh] overflow-hidden">
        <img
          src={img_cutter_kitchen2}
          alt="Cutter Lane kitchen and dining"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1c1a17]/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-10">
          <div>
            <p className="font-serif-display text-[clamp(1.8rem,3.5vw,3.5rem)] font-light italic text-white leading-[1.2] max-w-3xl" data-testid="pull-quote">
              "We don't just renovate homes.<br />We reimagine how you live inside them."
            </p>
            <div className="mt-8 w-8 h-px bg-white/40 mx-auto" />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-32 px-10 bg-[#f9f7f4] text-center">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9a8f7e] mb-8">Work With Us</p>
        <h2 className="font-serif-display text-[clamp(2.8rem,5vw,5rem)] font-light leading-[1.1] text-[#1c1a17] mb-8 max-w-3xl mx-auto">
          Ready to reimagine<br /><em>how you live?</em>
        </h2>
        <p className="font-body text-[13px] text-[#6b6053] font-light mb-12 max-w-lg mx-auto leading-relaxed">
          We take a limited number of projects each year to give every client and every home our complete attention. In-person and virtual design engagements welcome.
        </p>
        <div className="flex items-center justify-center gap-8">
          <a href="mailto:hello@oakparcstudio.com" data-testid="cta-begin" className="font-body text-[10px] tracking-[0.25em] uppercase bg-[#1c1a17] text-white px-10 py-4 hover:bg-[#2e2b27] transition-colors">
            Begin a Conversation
          </a>
          <a href="#services" data-testid="cta-virtual" className="font-body text-[10px] tracking-[0.25em] uppercase text-[#9a8f7e] border border-[#d8d1c7] px-10 py-4 hover:border-[#9a8f7e] transition-colors">
            Explore Virtual Design
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="studio" className="py-14 px-10 bg-[#1c1a17]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-start justify-between gap-10">
          <div>
            <p className="font-serif-display text-[18px] font-light tracking-widest text-white uppercase mb-2">Oakparc Studio</p>
            <p className="font-body text-[11px] text-white/30 font-light">Serving Clients Nationwide</p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-3">
            {["Work", "Services", "Virtual Design", "Studio", "Press", "Contact"].map(link => (
              <a key={link} href="#" data-testid={`footer-link-${link.toLowerCase().replace(" ", "-")}`} className="font-body text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors">{link}</a>
            ))}
          </div>
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">Follow Along</p>
            <div className="flex flex-col gap-2">
              {["Instagram", "Pinterest", "Houzz"].map(s => (
                <a key={s} href="#" data-testid={`social-link-${s.toLowerCase()}`} className="font-body text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-white/60 transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
          <p className="font-body text-[10px] text-white/20 font-light">© 2026 Oakparc Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
