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

export const work = [
  { num: "N'001", title: 'Motion Graphics', disc: '2D Animation / Design' },
  { num: "N'002", title: 'Brand Films', disc: 'Story / Direction' },
  { num: "N'003", title: 'Cinematic', disc: 'Camera / Colour' },
  { num: "N'004", title: 'AI Films', disc: 'Generative / Hybrid Workflow' },
  { num: "N'005", title: 'Commercials', disc: 'Broadcast / Campaign' },
  { num: "N'006", title: 'Explainers', disc: 'Product / Narrative' },
  { num: "N'007", title: 'Billboard & LED', disc: 'Large Format / Loop' },
  { num: "N'008", title: 'Real Estate', disc: 'Property Films / Walkthrough' },
  { num: "N'009", title: 'Social Reels', disc: 'Short Form / Vertical' },
  { num: "N'010", title: 'Product Films', disc: 'Launch / UI Motion' },
  { num: "N'011", title: 'Title Design', disc: 'Kinetic Typography' },
  { num: "N'012", title: 'Showreel', disc: 'Selected Work / 2026' },
]

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
