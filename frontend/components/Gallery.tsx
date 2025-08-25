const images = [
  {src: "/IMG_0421.jpeg", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_1164.JPEG", caption: "“I feel like a brand-new person!”"},
  {src: "/Whitagram-Image.JPG", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_3964.jpeg", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_4012.jpeg", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_0443.JPEG", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_0239.jpeg", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_4138.jpeg", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_4219.jpeg", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_5021.jpeg", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_0293.jpeg", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_5245.jpeg", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_7137.jpeg", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_7457.jpeg", caption: "“I feel like a brand-new person!”"},
  {src: "/IMG_7488.jpeg", caption: "“I feel like a brand-new person!”"},
];

const Gallery = () => (
  <div id="gallery-page">
    <h1>Gallery</h1>
    <div className="gallery">
      {images.map((img, i) => (
        <a href={img.src} target="_blank" rel="noopener noreferrer" className="gallery__link" key={i}>
          <figure className="gallery__thumb">
            <img src={img.src} alt={img.caption.replace(/"/g, "")} className="gallery__image" loading="lazy"/>
            <figcaption className="gallery__caption">
              {img.caption}
            </figcaption>
          </figure>
        </a>
      ))}
    </div>
  </div>
);

export default Gallery;
