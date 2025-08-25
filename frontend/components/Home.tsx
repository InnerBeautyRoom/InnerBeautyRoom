import { Link } from "react-router-dom";
import Maps from "./Googlemaps";

const services = [{
    title: "Signature Haircut",
    desc: "Custom cut designed to flatter your features — finished with a smooth, glamorous blow‑dry.",
    img: "/haircut.jpeg",
  },
  {
    title: "Full Highlights",
    desc: "Luminous brightness and multi‑dimensional tones for a radiant, sun‑kissed look.",
    img: "/Fullhighlight.jpeg",
  },
  {
    title: "Keratin Smoothing",
    desc: "Silky, frizz‑free hair with long‑lasting smoothness (up to five months).",
    img: "/kttraet.jpeg",
  },]; 
const prices = [ 
  { name: "Women’s Haircut", price: "$75+" },
  { name: "Men’s Haircut", price: "$45+" },
  { name: "Root Touch‑Up", price: "$85+" },
  { name: "Full Highlights", price: "$180+" },];   

const Home = () => {
  return (
    <div>
      <section id="hero">
        <div id="hero-inner">
          <h1>Look &amp; Feel Your Best</h1>
          <p>Modern cuts, luminous color, and effortless styling crafted just for you.</p>
          <div id="hero-actions">
            <Link to="/booking" id="btn-primary">Book Now</Link>
            <Link to="/services" id="btn-link">Explore Services</Link>
          </div>
        </div>
      </section>

      <section id="services">
        <h2 id="section-title">Popular Services</h2>
        <div id="cards">
          {services.map((s) => (
            <article id="card" key={s.title}>
              <div id="card-media">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div id="card-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div id="section-actions">
          <Link to="/booking" id="btn-primary">See Availability</Link>
          <Link to="/contact" id="btn-link">Have a question?</Link>
        </div>
      </section>

      <section id="prices">
        <h2 id="section-title">Pricing Snapshot</h2>
        <div id="price-grid">
          {prices.map((p) => (
            <div id="price-row" key={p.name}>
              <span>{p.name}</span>
              <span id="price">{p.price}</span>
            </div>
          ))}
        </div>
        <p id="muted">* Final pricing may vary by hair length, texture, and customization.</p>
        <div id="section-actions">
          <Link to="/booking" id="btn-primary">Book a Service</Link>
        </div>
      </section>
      <Maps />
    <div id="location-meta">
      <div>
        <strong>Address</strong>
        <p>555 S Tamiami Trail, Venice, FL 34285</p>
      </div>
      <div>
        <strong>Hours</strong>
        <p>Wed–Sat: 10am–7pm · Sun/Mon/Tue: Closed</p>
      </div>
      <div>
        <strong>Phone</strong>
        <p>(941) 445-7119</p>
      </div>
    </div>
    </div> 
  );
};

export default Home;