import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 18,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Up to 768px width
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // 768px and above
        settings: {
          slidesToShow: 20,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{  width: '80%', 
    margin: 'auto', 
    borderLeft: '2px solid rgba(lightgray, 0.3)', 
    borderRight: '2px solid rgba(lightgray, 0.3)'  
  }}>
      <Slider {...settings}>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/Brasileirao-branco.png" alt="Slide 1" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/CDB-branco.png" alt="Slide 2" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/copa_logo_210x210.jpg" alt="Slide 3" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/euro_logo_210x210.jpg" alt="Slide 4" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/spn_atleticologo_whiteoutline_b%201.png" alt="Slide 5" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/spn_Sporting_CP2_b%201.png" alt="Slide 6" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/spn_Benfica_2021_8_13_15_24_29_b%201.png" alt="Slide 6" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/spn_FC_Porto_b%201.png" alt="Slide 6" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/spn_osfp210X210_b_b_2019_8_14_8_57_11_b%201.png" alt="Slide 6" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/spn_Logo_Panathinaikos-01-3%201.png" alt="Slide 6" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/spn_stxmn_xorigies_footer_210x210_paok_b_2019_8_14_8_59_31_b%201.png" alt="Slide 6" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/FBCMELGAR.png" alt="Slide 6" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/spn_apoel%20footer_b%201.png" alt="Slide 6" />
        </div>
        <div>
          <img style={{width:60}} src="https://landingpages.kaizengaming.com/new-logo-br-sport/spn_apollon-logo-210x210_b%201.png" alt="Slide 6" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
