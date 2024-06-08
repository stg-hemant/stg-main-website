import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="about section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div
            className="col-lg-6 relative self-start "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="assets/img/about.jpg"
              className="img-fluid video-box"
              alt=""
            />
          </div>

          <div
            className="col-lg-6 content icon-boxes"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>About Us</h3>
            <p>
              Dolor iure expedita id fuga asperiores qui sunt consequatur
              minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui
              magnam itaque veritatis dolores. Corrupti totam ut eius incidunt
              reiciendis veritatis asperiores placeat.
            </p>
            <ul>
              <li className="flex items-center icon-box">
                <i className="fa-solid fa-vial-circle-check icon"></i>
                <div className="ml-4 ">
                  <h5 className="font-bold text-[#2c4964]">
                    Ullamco laboris nisi ut aliquip consequat
                  </h5>
                  <p>
                    Magni facilis facilis repellendus cum excepturi quaerat
                    praesentium libre trade
                  </p>
                </div>
              </li>
              <li className="flex items-center icon-box ">
                <i className="fa-solid fa-pump-medical icon"></i>
                <div className="ml-4">
                  <h5 className="font-bold text-[#2c4964]">
                    Magnam soluta odio exercitationem reprehenderi
                  </h5>
                  <p>
                    Quo totam dolorum at pariatur aut distinctio dolorum
                    laudantium illo direna pasata redi
                  </p>
                </div>
              </li>
              <li className="flex items-center icon-box">
                <i className="fa-solid fa-heart-circle-xmark icon"></i>
                <div className="ml-4">
                  <h5 className="font-bold text-[#2c4964]">
                    Voluptatem et qui exercitationem
                  </h5>
                  <p>
                    Et velit et eos maiores est tempora et quos dolorem autem
                    tempora incidunt maxime veniam
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
