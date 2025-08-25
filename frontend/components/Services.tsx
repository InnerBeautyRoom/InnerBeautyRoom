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
      "Face-flattering shapes based on head geometry and natural movement. Finished with detailing that enhances your features.",
    img: "/haircut.jpeg",
  },
  {
    title: "Root Touch Up",
    desc:
      "Modern, customized color matched to your skin tone and style—balancing brightness, depth, and dimension.",
    img: "/rootretouch.jpeg",
  },
  {
    title: "Full Highlight",
    desc:
      "A shine-boosting gloss to refine tone and add a soft, reflective finish. Great between full color services.",
    img: "/Fullhighlight.jpeg",
  },
  {
    title: "Partial Highlight",
    desc:
      "Hand-painted highlights for a sun-kissed, low-maintenance look with soft, natural transitions.",
    img: "/parthigh.jpeg",
  },
  {
    title: "Face Framing Highlights",
    desc:
      "Foil techniques tailored to your target look—dimensional blonding, brightness, and lift where you want it.",
    img: "/faceframe.jpeg",
  },
  {
    title: "Glaze",
    desc:
      "Targeted masks and bond treatments to repair, hydrate, and smooth—prepping hair for its best results.",
    img: "/glaze.jpeg",
  },
  {
    title: "Keratin Treatment",
    desc:
      "Reduce frizz and enhance shine while maintaining natural movement. Custom plans for your texture.",
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