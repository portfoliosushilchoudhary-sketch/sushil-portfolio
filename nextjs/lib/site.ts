export const site = {
  name: 'Sushil Choudhary',
  role: 'Motion Designer',
  location: 'Ahmedabad, India',
  tenure: 'Ten years in motion',
  status: 'Open for projects',
  email: 'choudharysushil109@gmail.com',
  phone: '+91 95141 28857',
  phoneHref: '+919514128857',
  instagram: '@wanderingsushx',
  instagramUrl: 'https://instagram.com/wanderingsushx',
  mapsUrl: 'https://maps.google.com/?q=Ahmedabad',
  mark: ['Motion For', 'Bold Brands.', 'Sushil Choudhary.'],
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Profile', href: '#profile' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  introLine1: 'Hey there, meet Sushil Choudhary,',
  introLine2: 'Motion designer, Ahmedabad — ten years of frames.',
  typewriter:
    'Glad you stopped in. I make brands move. Now, what are we building?',
  pills: [
    { label: 'See the work', href: '#work' },
    { label: 'Read the profile', href: '#profile' },
    { label: 'Send a brief', href: '#contact' },
    { label: 'How I work', href: '#profile' },
  ],
}

export const nda = {
  home: 'Due to NDA restrictions, my best work and full-length films can’t be published here — each discipline page carries cleared excerpts, and full case studies are available on request.',
  project:
    'Due to NDA restrictions, I can’t share my best work or full-length films here — the clips below are cleared excerpts. Full case studies are available on request over a call.',
}

export const work = [
  {
    num: "N'001",
    slug: 'motion-graphics',
    title: 'Motion Graphics',
    disc: '2D Animation / Design',
    lead: 'Graphic systems in motion — logo behaviour, kinetic layouts and animated identity work built frame by frame.',
    body: 'From animated brand systems to broadcast packages, this is where design meets timing. Every piece starts on the grid and earns its movement — easing, rhythm and hierarchy doing the storytelling.',
  },
  {
    num: "N'002",
    slug: 'brand-films',
    title: 'Brand Films',
    disc: 'Story / Direction',
    lead: "Films that carry a brand's voice — story-first pieces directed from script to final grade.",
    body: 'A brand film has one job: make people feel something specific about a company. I direct these end to end — narrative structure, boards, shoot supervision or full animation, edit and sound.',
  },
  {
    num: "N'003",
    slug: 'cinematic',
    title: 'Cinematic',
    disc: 'Camera / Colour',
    lead: 'Camera-driven work where light, lens language and colour grading do the heavy lifting.',
    body: 'Virtual cinematography, simulated optics and a disciplined grade. These pieces borrow the grammar of film — blocking, coverage, contrast ratios — and apply it to motion design.',
  },
  {
    num: "N'004",
    slug: 'ai-films',
    title: 'AI Films',
    disc: 'Generative / Hybrid Workflow',
    lead: 'Hybrid pipelines that pair generative tools with hands-on direction, compositing and grade.',
    body: 'Generative models are a new camera, not a finished film. I use them inside a traditional pipeline — art direction up front, heavy curation, then compositing, retiming and grading to bring the output up to commercial standard.',
  },
  {
    num: "N'005",
    slug: 'commercials',
    title: 'Commercials',
    disc: 'Broadcast / Campaign',
    lead: 'Broadcast and campaign spots — tight durations, hard deadlines, messages that land in seconds.',
    body: 'Thirty seconds is a long time if every frame is working. Campaign work across broadcast and digital: concept, boards, animation and versioning for every placement a media plan demands.',
  },
  {
    num: "N'006",
    slug: 'explainers',
    title: 'Explainers',
    disc: 'Product / Narrative',
    lead: 'Product and narrative explainers that turn complicated ideas into sequences people actually follow.',
    body: 'The craft here is compression — taking a dense product or process and finding the visual sentence that explains it. Script, voice, illustration and animation built as one system.',
  },
  {
    num: "N'007",
    slug: 'billboard-led',
    title: 'Billboard & LED',
    disc: 'Large Format / Loop',
    lead: 'Large-format and LED work — seamless loops built for scale, distance and unusual canvases.',
    body: 'Designing for a screen the size of a building changes everything: legibility at distance, loop points nobody can spot, pixel maps that are never 16:9. Work delivered for outdoor LED, retail walls and event screens.',
  },
  {
    num: "N'008",
    slug: 'real-estate',
    title: 'Real Estate',
    disc: 'Property Films / Walkthrough',
    lead: 'Property films and walkthroughs that sell a space before it exists.',
    body: 'Architectural film work — walkthroughs, aerial-style reveals and lifestyle cutdowns that give a development atmosphere, not just square footage.',
  },
  {
    num: "N'009",
    slug: 'social-reels',
    title: 'Social Reels',
    disc: 'Short Form / Vertical',
    lead: 'Short-form vertical work engineered for the first second — hooks, pace and platform-native motion.',
    body: 'Vertical is its own discipline. These pieces are cut for sound-off first viewing, built around a hook in the opening beat, and designed to survive compression and a thumb mid-scroll.',
  },
  {
    num: "N'010",
    slug: 'product-films',
    title: 'Product Films',
    disc: 'Launch / UI Motion',
    lead: 'Launch films and UI motion — devices, interfaces and features presented with precision.',
    body: 'Product work rewards restraint: clean staging, honest materials, interface motion that mirrors how the real product feels. Launch films, feature explainers and store assets.',
  },
  {
    num: "N'011",
    slug: 'title-design',
    title: 'Title Design',
    disc: 'Kinetic Typography',
    lead: 'Kinetic typography and title sequences — type as the lead performer.',
    body: 'Titles set the contract with the audience. Kinetic type pieces, opening sequences and typographic idents where letterforms carry rhythm, tone and story on their own.',
  },
  {
    num: "N'012",
    slug: 'showreel',
    title: 'Showreel',
    disc: 'Selected Work / 2026',
    lead: 'Selected work, cut together — a fast pass through the last stretch of projects.',
    body: 'A single cut of the strongest recent work across disciplines. Updated as new projects clear for release.',
  },
]

// Cleared excerpts per discipline. Files live in
// public/projects/<slug>/<file>.mp4 (+ matching .jpg poster).
// portrait: true renders a 9:16 tile for vertical reels.
export type Clip = { file: string; portrait?: boolean }

export const projectClips: Record<string, Clip[]> = {
  'motion-graphics': [
    { file: '01', portrait: true },
    { file: '02' },
    { file: '03', portrait: true },
    { file: '04' },
    { file: '05' },
    { file: '06' },
  ],
}

export const profile = {
  heading: 'I make brands move.',
  lead: 'Ten years of frames — commercials, brand films, explainers, and animation big enough to read from across a road.',
  paragraphs: [
    'I work out of Ahmedabad, across the range a motion designer actually gets asked for: a festive campaign that has to feel like an occasion, a pharma explainer people finish watching, a property film that sells before the site visit, a billboard loop that lands in three seconds at forty kilometres an hour.',
    'Lately that includes AI film — not as a novelty, but as another camera. Generative passes for plates and texture, hand-cut where the timing matters. The tools changed; the edit didn’t.',
    'I care about timing more than trends. A cut landing on the right beat does more than any effect, and most work that feels expensive is really just work that was paced properly.',
  ],
  facts: [
    { k: 'Based', v: 'Ahmedabad, Gujarat' },
    { k: 'Practising since', v: '2016' },
    { k: 'Disciplines', v: 'Motion, film, edit, colour' },
    { k: 'Tools', v: 'After Effects, Premiere, DaVinci, Blender' },
    { k: 'Languages', v: 'English, Hindi, Gujarati' },
    { k: 'Availability', v: 'Freelance & retainer' },
  ],
}

export const contact = {
  heading: 'Got something that should move?',
  lead: "Send the brief, the deadline and the budget. You'll hear back within a day, and honestly if I'm not the right person for it.",
  channels: [
    { k: 'Email', v: site.email, href: `mailto:${site.email}` },
    { k: 'Phone', v: site.phone, href: `tel:${site.phoneHref}` },
    {
      k: 'Instagram',
      v: site.instagram,
      href: site.instagramUrl,
      external: true,
    },
    {
      k: 'Studio',
      v: 'Ahmedabad, Gujarat',
      href: site.mapsUrl,
      external: true,
    },
  ],
}
