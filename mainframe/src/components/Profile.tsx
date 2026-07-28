import { profile } from '../data/site'

export default function Profile() {
  return (
    <section
      id="profile"
      className="noise relative z-[2] bg-field px-5 pb-24 sm:px-8 md:px-10 md:pb-32"
    >
      <div className="relative z-[1]">
        <p className="section-label">Profile</p>

        <div className="prose">
          <h2>{profile.heading}</h2>
          <p className="lead">{profile.lead}</p>
          {profile.paragraphs.map((text) => (
            <p key={text.slice(0, 24)}>{text}</p>
          ))}
        </div>

        <ul className="facts">
          {profile.facts.map((fact) => (
            <li key={fact.k}>
              <span className="k">{fact.k}</span>
              <span>{fact.v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
