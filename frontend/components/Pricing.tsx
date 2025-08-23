import { Link } from "react-router-dom";

const Pricing = () => {
    return (
         <div id="pricing-page">
      <h1 id="pricing-title">Pricing</h1>

      <section id="pricing-section">
        <h2>Hair Services</h2>
        <ul>
          <li><span>Haircut</span><span>$55 · 1 hr</span></li>
          <li><span>Blow Dry</span><span>$45 · 1 hr</span></li>
          <li><span>Keratin Treatment</span><span>$285 · 3 hrs</span></li>
          <li><span>Scalp Facial</span><span>$100 · 1 hr</span></li>
          <li><span>Deep Conditioning Treatment</span><span>$65 · 1 hr</span></li>
        </ul>
      </section>

      <section id="pricing-section">
        <h2>Color Services</h2>
        <ul>
          <li><span>Root Retouch w/ Haircut</span><span>$115 · 2 hrs</span></li>
          <li><span>Root Retouch</span><span>$100 · 2 hrs</span></li>
          <li><span>Faceframing Highlight</span><span>$120 · 2 hrs</span></li>
          <li><span>Partial Highlight</span><span>$130 · 2 hrs</span></li>
          <li><span>Full Highlight</span><span>$160 · 3 hrs</span></li>
          <li><span>Mini Highlight</span><span>$75 · 1 hr</span></li>
          <li><span>All Over Color</span><span>$140 · 3 hrs</span></li>
          <li><span>Glaze (includes blow dry)</span><span>$90 · 1.5 hrs</span></li>
          <li><span>Color Correction</span><span>$100/hr · 6–8 hrs</span></li>
        </ul>
      </section>

      <section id="pricing-section">
        <h2>Special Occasion</h2>
        <h3>Onsite (6–8 hrs, depending on party size)</h3>
        <ul>
          <li><span>Hair & Makeup</span><span>$190 per person</span></li>
          <li><span>Hair or Makeup Only</span><span>$95 per person</span></li>
        </ul>
        <h3>In Salon (6–8 hrs, depending on party size)</h3>
        <ul>
          <li><span>Hair & Makeup</span><span>$165 per person</span></li>
          <li><span>Hair or Makeup Only</span><span>$70 per person</span></li>
        </ul>
      </section>

      <section id="pricing-section">
        <h2>Add-Ons</h2>
        <ul>
          <li><span>Hair Tinsel</span><span>$2 per strand · 1 hr</span></li>
          <li><span>Facial Waxing</span><span>$10 per area · 30 mins</span></li>
        </ul>
      </section>
      
      <div id = 'booking-button'>
      <Link to = '/booking'>Book Appointment</Link>
      </div>
      
    </div>
    )
}

export default Pricing