const services = [
  {
    title: "Consultation",
    desc:
      "Your experience begins with a conversation to understand your goals, hair history, and lifestyle. We’ll recommend an approach tailored to you.",
    img: "/con.jpeg",
  },
  {
    title: "Haircut",
    desc:
      "A custom haircut designed to flatter your features and lifestyle. Enjoy a refreshing wash that nourishes and revitalizes your hair. We finish with a smooth, glamorous blow-dry for that perfect salon fresh look.",
    img: "/haircut.jpeg",
  },
  {
    title: "Root Touch Up",
    desc:
      "Keep your color looking fresh with a precise root touch-up, seamlessly blending new growth for a flawless finish. Restore vibrancy and shine while maintaining your signature shade. The service is completed with a complimentary blow-dry for that polished, salon-perfect look.",
    img: "/rootretouch.jpeg",
  },
  {
    title: "Full Highlight",
    desc:
      "Transform your look with a full highlight that delivers brightness from root to tip. Carefully placed foils add multi-dimensional tones that bring depth and radiance to your hair. Finished with a glossy, luminous result that feels effortlessly sun-kissed.",
    img: "/Fullhighlight.jpeg",
  },
  {
    title: "Partial Highlight",
    desc:
      "Enhance your style with a partial highlight that gives just the right balance of brightness and dimension. Foils are placed to frame your face and refresh your overall look without a full-color commitment. The result is soft, radiant dimension that feels natural and effortlessly chic.",
    img: "/parthigh.jpeg",
  },
  {
    title: "Face Framing Highlights",
    desc:
      "Light up your look with face-framing highlights that deliver brightness exactly where it counts. Soft, radiant pieces are placed around the hairline to enhance your features and add natural dimension. The result is a fresh, sun-kissed glow that beautifully complements your style.",
    img: "/faceframe.jpeg",
  },
  {
    title: "Glaze",
    desc:
      "A glaze treatment eliminates unwanted tones in blondes and refreshes existing color for a flawless finish. This service enhances vibrancy while sealing in long-lasting shine. Perfect for adding a silky, glossy touch that leaves your hair looking healthy and radiant.",
    img: "/glaze.jpeg",
  },
  {
    title: "Keratin Treatment",
    desc:
      "Our keratin smoothing treatment tames frizz and leaves your hair silky, shiny, and manageable. The treatment strengthens and smooths each strand, cutting down styling time while keeping your look polished. Results can last up to five months, giving you long-lasting smoothness and radiant shine.",
    img: "/kttraet.jpeg",
  },
];


const Services = () => {
  return (
    <section id="showcase">
      {services.map((s, i) => (
        <article className="showcase-row" key={s.title}>
          <figure className={`showcase-media ${i % 2 ? "order-right" : "order-left"}`}>
            <img src={s.img} alt={s.title} />
          </figure>

          <div className="showcase-text">
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Services