import { Link } from "react-router-dom";
import Maps from "./Googlemaps";

const services = [
  {
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
  },
  {
    title: "Haircut",
    desc: "A custom haircut designed to flatter your features and lifestyle.",
    img: "/IMG_1164.JPEG",
  },
  
];

const prices = [
  { name: "Women’s Haircut", price: "$55+" },
  { name: "Glaze", price: "$90+" },
  { name: "Root Touch‑Up", price: "$100+" },
  { name: "Full Highlights", price: "$180+" },
  { name: "Hair & Makeup", price: "$190+" },
  { name: "Color Correction", price: "$100/hr" },
  { name: "Blow Dry", price: "$45+" },
  { name: "Facial Waxing", price: "$10 per area" },
];

const brands = [
  { img: "/prorituals_transparent.png" },
  { img: "/rusk_logo_transparent.png" },
  { img: "/kenra_logo_transparent.png" },
  { img: "/wella_logo_transparent.png" },
  { img: "/briogeo_logo_transparent.png" },
  { img: "/pravana_logo_transparent.png" },
  { img: "/redken_logo_transparent.png" },
  { img: "/Joico-Logo.png" },
];

const Home = () => {
  return (
    <div>
      <section id="logo-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          id="logo-bg-video"
          src="/14012792_1920_1080_25fps.mp4"
        />
        <div id="logo-title">
          <h1>InnerBeautyRoom Hair Salon</h1>
        </div>
      </section>

      <section id="hero">
                <div id="hero-inner">
          <h1>Look &amp; Feel Your Best</h1>
          <div id="hero-content">
            <div id="hero-image">
              <img src="/IMG_1047.jpeg" alt="" loading="lazy" />
            </div>
            <div id="hero-text">
              <p>Welcome to InnerBeautyRoom my one-chair studio where it's just you and me. I've built a quiet, judgment-free space for modern cuts, luminous color, and effortless styling that feel like you. We start with a thoughtful consult your hair history, lifestyle, 
                face shape, and the vibe you want so every choice serves you, not a trend. From a soothing cleanse and scalp massage to custom formulas and precise, face-framing details, I tailor each step to your comfort and your goals.
                While you relax, I handle the details: gentle, high performance products, clear check-ins, and a calm pace so you always feel at ease. When we're done, you'll leave with a simple styling routine, product tips that actually work, 
                and a maintenance plan that fits your life. InnerBeautyRoom is about feeling free, seen, and beautifully yourself every time you're in the chair.</p>
            </div>
          </div>
          <div id="hero-actions">
            <Link to="/booking" id="btn-primary-hero">Book Now</Link>
            <Link to="/services" id="btn-link-hero">Explore Services</Link>
          </div>
        </div>
      </section>

      <section id="services">
        <h2 id="section-title-services">Popular Services</h2>
        <div id="cards">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <div className="card-media">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div className="card-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div id="section-actions-services">
          <Link to="/booking" id="btn-primary-services">See Availability</Link>
          <Link to="/contact" id="btn-link-services">Have a question?</Link>
        </div>
      </section>

      <section id="brands">
        <h2 id="section-title-brands">Brands</h2>
        <div id="brand-cards">
          {brands.map((b) => (
            <article className="brand-card" key={b.img}>
              <div className="brand-img-wrap">
                <img src={b.img} alt="Brand logo" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="prices">
        <h2 id="section-title-prices">Pricing Snapshot</h2>
        <div id="price-grid">
          {prices.map((p) => (
            <div className="price-row" key={p.name}>
              <span>{p.name}</span>
              <span className="price">{p.price}</span>
            </div>
          ))}
          <p id="muted">* Final pricing may vary by hair length, texture, and customization.</p>
        <div id="section-actions-prices">
          <Link to="/booking" id="btn-primary-prices">Book a Service</Link>
        </div>
        </div>
      </section>

      <section id="hero">
                <div id="hero-inner">
          <h1>Meet Your Stylist</h1>
          <div id="hero-content">
            <div id="hero-image">
              <img src="/IMG_8369.jpeg" alt="" loading="lazy" />
            </div>
            <div id="hero-text">
              <p>I’m Michele Frisancho, owner of InnerBeautyRoom. With 25+ years behind the chair, I specialize in modern cuts, luminous color, and timeless wedding & special-event styling. 
                My one-on-one studio is a calm space where you’re heard, comfortable, and leave feeling effortlessly beautiful.</p>
            </div>
          </div>
           <div id="hero-actions">
            <Link to="/about" id="btn-primary-hero">More about me</Link>
          </div>
        </div>
      </section>

      <section id="location">
        <h2 className="section-title-location">Find Me</h2>
        <Maps />
      </section>

      <footer id="location-meta">
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
      </footer>
    </div>
  );
};

export default Home;