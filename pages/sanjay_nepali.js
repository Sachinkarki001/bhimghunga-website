/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
function Sanjay_Nep() {
  return (
    <div className="sanbody">
      <div className="sanimg">
        <div className="sanabove">
          <h2>वडा कार्यालय स्थान</h2>
          <div className="midline"></div>
        </div>
        <a href="https://www.google.com/maps/place/Bhimdhunga/@27.7296298,85.2338862,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb22369d4c8d1d:0xb33f404d12e9b5df!8m2!3d27.7296251!4d85.2360749">
          <Image src="/image.png" width={300} height={300} />
        </a>
      </div>
      <div className="sanfb">
        <div className="sanabove">
          <h2>फेसबुक पोस्ट</h2>
          <div className="midline"></div>
        </div>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNagarjun8Bhimdhunga%2F&tabs=timeline&width=300&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="280"
          height="350"
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="santwt">
        <div className="sanabove">
          <h2>ट्वीट्स</h2>
          <div className="midline"></div>
        </div>
        <a
          className="twitter-timeline"
          data-width="300"
          data-height="350"
          href="https://twitter.com/CityKathmandu?ref_src=twsrc%5Etfw"
        >
          Tweets by CityKathmandu
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </div>
  );
}

export default Sanjay_Nep;
