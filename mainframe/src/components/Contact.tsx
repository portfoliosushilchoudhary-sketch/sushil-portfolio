import { contact } from '../data/site'

export default function Contact() {
  return (
    <section
      id="contact"
      className="noise relative z-[2] bg-field px-5 pb-24 sm:px-8 md:px-10 md:pb-32"
    >
      <div className="relative z-[1]">
        <p className="section-label">Contact</p>

        <div className="prose">
          <h2>{contact.heading}</h2>
          <p className="lead">{contact.lead}</p>
        </div>

        <ul className="channels">
          {contact.channels.map((channel) => (
            <li key={channel.k}>
              <a
                href={channel.href}
                {...(channel.external
                  ? { target: '_blank', rel: 'noopener' }
                  : {})}
              >
                <span className="k">{channel.k}</span>
                <span className="v">{channel.v}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
