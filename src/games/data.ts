export interface Game {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: "simulation" | "puzzle" | "arcade";
  badge: string;
  badgeColor: string; // Tailwind class
  accentColor: string; // Tailwind hex or class
  releaseYear: string;
  playUrl: string;
  githubUrl: string;
  imagePng: string;
  imageWebp: string;
  summary: string;
  fullDescription: string[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  controls: {
    device: "Desktop Keyboard & Mouse" | "Touchscreen & Mobile";
    items: string[];
  }[];
  techStack: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const GAMES: Game[] = [
  {
    id: "harbor-master",
    title: "Harbor Master",
    subtitle: "Marina Boat Docking Simulator",
    tagline: "Realistic 2D Marina Boat Docking with 3-DOF Hydrodynamics & Rapier2D Physics",
    category: "simulation",
    badge: "Hydrodynamics Simulation",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    accentColor: "from-sky-500/20 via-cyan-500/10 to-transparent",
    releaseYear: "2026",
    playUrl: "https://karlhiramoto.github.io/harbor-master/",
    githubUrl: "https://github.com/karlhiramoto/harbor-master",
    imagePng: "../images/games/harbor-master.png",
    imageWebp: "../images/games/harbor-master.webp",
    summary:
      "Berthing a boat in a crowded marina under brisk crosswinds is widely considered one of the ultimate tests of seamanship. Harbor Master simulates this challenging art with physical precision, powered by a 120 Hz 3-DOF Fossen hydrodynamics engine and Rapier2D WebAssembly rigid-body physics.",
    fullDescription: [
      "Unlike arcade steering games, vessels in Harbor Master experience true water drag, cross-body drift, leeward windage, prop walk (the transverse lateral paddle-wheel force of a spinning propeller), and forward prop-wash rudder deflection ('prop kicking').",
      "Captain three distinct vessel types—from an agile 7m outboard runabout to a 250 HP cabin cruiser with bow thrusters, and a classic 12m fin-keel auxiliary sailboat. Deploy rubber side fenders across bow, midships, and quarter presets to cushion gentle kisses (<= 0.9 kn), throw spring-line cleat lassos to pivot cleanly against 25-knot gusts, and earn your Skipper License across a 10-stage progressive campaign or custom wind sandbox.",
    ],
    keyFeatures: [
      {
        title: "120 Hz 3-DOF Fossen Marine Hydrodynamics",
        description:
          "Physics-based lateral drift, surge/sway resistance, and rotational damping formulated from naval architecture equations.",
      },
      {
        title: "Rapier2D Rust/WASM Rigid-Body Engine",
        description:
          "High-performance collision restitution for timber docks, pilings, moored yachts, and protruding rubber fenders.",
      },
      {
        title: "3 Realistic Vessel Classes",
        description:
          "7m Outboard Runabout (200 HP vectored thrust), 8m Cabin Cruiser (250 HP + tunnel bow thrusters), and 12m Auxiliary Sailboat (40 HP diesel, fin keel grip & authentic reverse prop walk).",
      },
      {
        title: "Mooring Gear & Spring-Line Cleat Lasso",
        description:
          "Adjustable side fenders (Bow, Mid, Quarter) prevent costly gelcoat repair bills. Lasso glowing dock cleats within 4.3m to pivot against heavy crosswinds.",
      },
      {
        title: "10-Stage License Campaign & Wind Sandbox",
        description:
          "Progress from calm morning slip departures to 25-knot crosswind berthing, plus a freeform sandbox with configurable wind vectors (0–25 kn, 0°–355°).",
      },
      {
        title: "Hydrodynamic Force X-Ray HUD",
        description:
          "Toggle live force vectors showing thrust, rudder lift, hull drag, and windage in real time, accompanied by procedural Web Audio soundscapes.",
      },
    ],
    controls: [
      {
        device: "Desktop Keyboard & Mouse",
        items: [
          "W / S or Up / Down — Throttle (Reverse, Neutral, Forward 1–4)",
          "A / D or Left / Right — Steer Helm",
          "Q / E — Bow Thruster (Cabin Cruiser)",
          "M or Click Cleat — Attach Spring-Line Lasso",
          "Space — Quick Neutral | C — Center Helm",
          "X — Toggle Force Vector X-Ray | R — Restart Stage",
        ],
      },
      {
        device: "Touchscreen & Mobile",
        items: [
          "Vertical Throttle Lever with tactile detents",
          "Horizontal Helm Arc Slider with auto-center",
          "Bow Thruster Port/Starboard hold buttons",
          "Tap glowing dock cleats to lasso spring line",
        ],
      },
    ],
    techStack: [
      "TypeScript",
      "Rapier2D (Rust/WASM)",
      "HTML5 Canvas 2D",
      "Web Audio API",
      "Fossen Hydrodynamics",
      "Vitest",
    ],
    stats: [
      { label: "Engine Rate", value: "120 Hz" },
      { label: "Vessel Classes", value: "3" },
      { label: "License Stages", value: "10" },
      { label: "Wind Range", value: "0–25 kn" },
    ],
  },
  {
    id: "mahjong",
    title: "Mahjong Solitaire",
    subtitle: "Classic Chinese Tile-Matching Puzzle",
    tagline: "Modern HTML5 Canvas Mahjong with 3D Layer Elevation & Guaranteed-Solvable Deals",
    category: "puzzle",
    badge: "Solvable 3D Puzzle",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    releaseYear: "2026",
    playUrl: "https://karlhiramoto.github.io/mahjong/",
    githubUrl: "https://github.com/karlhiramoto/mahjong",
    imagePng: "../images/games/mahjong.png",
    imageWebp: "../images/games/mahjong.webp",
    summary:
      "A modern, responsive web-based Mahjong Solitaire puzzle rendered on HTML5 Canvas. Features vibrant procedural vector tiles, authentic 3D layered elevation with ivory and jade acrylic side walls, guaranteed-solvable deals, and an intelligent hint solver.",
    fullDescription: [
      "Mahjong Solitaire challenges players to clear a multi-layered pyramid of 144 tiles by identifying and matching identical open pairs. In this browser edition, every tile is generated entirely procedurally using vector mathematics—ensuring razor-sharp resolution on high-DPI Retina screens without blurred bitmap textures.",
      "Players can toggle seamlessly between a realistic 3D angled perspective with directional sun lighting, multi-layer drop shadows, and side walls, and a classic flat 2D top-down view. A reverse layer-peeling algorithm mathematically guarantees that every deal is 100% winnable, eliminating unwinnable deadlocks. An automated solver framework even allows you to watch an AI bot complete games in real time.",
    ],
    keyFeatures: [
      {
        title: "3D Angled Elevation & 2D Flat Toggle",
        description:
          "Realistic 3D perspective with physical ivory & jade side walls, progressive drop shadows, and layer-based sun lighting (press V to toggle).",
      },
      {
        title: "100% Solvable Deal Generator",
        description:
          "Reverse layer-peeling simulation constructs boards backwards, mathematically guaranteeing every game has a valid winning path.",
      },
      {
        title: "Procedural Canvas Tile Rendering",
        description:
          "Crisp vector graphics for Dots, Bamboo (including custom 1-Bamboo peacock), English-labeled Characters, Winds, Dragons, and Flowers.",
      },
      {
        title: "Intelligent Hint Engine",
        description:
          "Strategic heuristic analyzes open matching pairs to uncover the highest number of blocked lower-layer tiles, tracking total hints used.",
      },
      {
        title: "3 Board Layouts",
        description:
          "Classic Turtle (144 tiles), Fortress (64 tiles), and Quick Mini (36 tiles) for fast sessions.",
      },
      {
        title: "Autonomous Bot Solver & Visual Auto-Play",
        description:
          "Watch the autonomous solver clear boards move-by-move in browser, backed by headless tests playing 144-tile games in seconds.",
      },
      {
        title: "Procedural Web Audio Synthesizer",
        description:
          "Realistic tile tap clacks, match chimes, hint pings, tile shuffles, and victory fanfare synthesized via Web Audio API.",
      },
    ],
    controls: [
      {
        device: "Desktop Keyboard & Mouse",
        items: [
          "Click — Select / Match free tiles",
          "Mouse Wheel — Smooth zoom in and out",
          "Click & Drag — Pan across zoomed canvas",
          "V — Toggle 3D Perspective / 2D Top-Down View",
          "H — Request Intelligent Hint",
          "U — Undo Move | S — Shuffle Remaining | F — Fit Board",
          "N — New Deal",
        ],
      },
      {
        device: "Touchscreen & Mobile",
        items: [
          "Tap to select and clear matching pairs",
          "Pinch-to-zoom for close-up tile inspection",
          "One-finger drag to pan viewport",
          "Ergonomic bottom toolbar with large touch targets",
        ],
      },
    ],
    techStack: [
      "TypeScript",
      "HTML5 Canvas 2D",
      "Procedural Vector Graphics",
      "Web Audio API",
      "Reverse Peeling Solver",
      "Vitest",
    ],
    stats: [
      { label: "Board Tiles", value: "144" },
      { label: "Winnable Rate", value: "100%" },
      { label: "Layouts", value: "3" },
      { label: "View Modes", value: "3D / 2D" },
    ],
  },
  {
    id: "botica",
    title: "Farmacia Gallego",
    subtitle: "Botica de Guardia",
    tagline: "Andalusian Pharmacy Simulation & Mini-Game Collection",
    category: "arcade",
    badge: "Pharmacy Simulation",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    accentColor: "from-amber-500/20 via-lime-500/10 to-transparent",
    releaseYear: "2026",
    playUrl: "https://karlhiramoto.github.io/botica/",
    githubUrl: "https://github.com/karlhiramoto/botica",
    imagePng: "../images/games/botica.png",
    imageWebp: "../images/games/botica.webp",
    summary:
      "Step behind the counter of an authentic on-call community pharmacy in sun-drenched Andalusia, Spain. Triage patient symptoms, decode messy cursive doctor prescriptions, compound custom magistral formulas, slice barcode flaps, and protect cold-chain vaccines from 42°C heatwaves!",
    fullDescription: [
      "Farmacia Gallego: Botica de Guardia blends authentic pharmaceutical practice, Spanish cultural charm, and addictive arcade gameplay. Set in picturesque towns across Andalusia (Arcos de la Frontera, Seville, Córdoba), players manage on-call shifts across 5 diverse mini-games.",
      "Listen closely to patients at the counter to flag urgent medical emergencies, avoid dangerous drug interactions (like NSAIDs for gastric ulcers), and reject illegal OTC antibiotic requests. In the lab, weigh powders on analytical balances and blend medicinal ointments. Decipher messy handwriting under UV filters, slice prescription barcodes cleanly, and rush temperature-sensitive insulins into refrigeration before the Andalusian summer heat takes its toll.",
    ],
    keyFeatures: [
      {
        title: "5 Diverse Playable Mini-Games",
        description:
          "Symptom Triage (Mostrador), Prescription Handwriting Decoder (Receta Médica), Magistral Compounding Lab (Rebotica), Barcode Slicing & Co-Pay (Corte de Cupón), and Cold-Chain Rush (Cadena de Frío).",
      },
      {
        title: "Authentic Clinical & Regulatory Nuance",
        description:
          "Simulates real Spanish pharmacy protocols: Tarjeta Sanitaria tiers, emergency triage to Urgencias, Punto SIGRE waste disposal, and narcotic safe routing.",
      },
      {
        title: "Bilingual Spanish (es) & English (en)",
        description:
          "Full dual-language support with authentic Andalusian medical dialogue, colloquial expressions, and local culture.",
      },
      {
        title: "Doctor Handwriting Magnifier & UV Filter",
        description:
          "Interactive magnifying loupe and contrast filter to decode Dr. Gregorio's messy cursive prescriptions for dosage, frequency, and active ingredients.",
      },
      {
        title: "Laboratory Magistral Compounding",
        description:
          "Analytical balances, porcelain mortar and pestle grinding, liquid meniscus alignment in graduated cylinders, and hot water bath emulsification.",
      },
      {
        title: "10-Shift Progressive Campaign & Free-Play Arcade",
        description:
          "Earn funds and pharmacy reputation, unlock equipment upgrades, and save progress via localStorage.",
      },
    ],
    controls: [
      {
        device: "Desktop Keyboard & Mouse",
        items: [
          "Click / Drag — Interactive dialog options & item handling",
          "Magnifier Loupe & UV Contrast slider to read prescriptions",
          "Pestle circular stirring motion in compounding lab",
          "Box cutter drag along perforated barcode lines",
        ],
      },
      {
        device: "Touchscreen & Mobile",
        items: [
          "Fully responsive mobile layout with optimized touch targets",
          "Direct touch gestures for dragging medicines, pestle, and pipettes",
          "Quick language switcher (ES/EN) and audio toggle in header",
        ],
      },
    ],
    techStack: [
      "TypeScript",
      "HTML5 Canvas 2D",
      "Web Audio API",
      "Bilingual i18n",
      "LocalStorage Persistence",
      "Vitest",
    ],
    stats: [
      { label: "Mini-Games", value: "5" },
      { label: "Campaign Shifts", value: "10" },
      { label: "Languages", value: "ES / EN" },
      { label: "Backend", value: "0 (Static)" },
    ],
  },
];
