import React from "react";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="lg:grid-cols-4 md:grid-cols-6 flex tems-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h4>
                <a href="">Lorem Ipsum</a>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div className="lg:grid-cols-4 md:grid-cols-6 flex items-stretch mt-4 md:mt-0">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-pills"></i>
              </div>
              <h4>
                <a href="">Sed ut perspiciatis</a>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div className="lg:grid-cols-4 md:grid-cols-6 flex items-stretch mt-4 lg:mt-0">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-hospital-user"></i>
              </div>
              <h4>
                <a href="">Magni Dolores</a>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div className="lg:grid-cols-4 md:grid-cols-6 flex items-stretch mt-4 lg:mt-0">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-dna"></i>
              </div>
              <h4>
                <a href="">Nemo Enim</a>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div className="lg:grid-cols-4 md:grid-cols-6 flex items-stretch mt-4 lg:mt-0">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-wheelchair"></i>
              </div>
              <h4>
                <a href="">Dele cardo</a>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div className="lg:grid-cols-4 md:grid-cols-6 flex items-stretch mt-4 lg:mt-0">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-notes-medical"></i>
              </div>
              <h4>
                <a href="">Divera don</a>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
