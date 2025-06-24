export default function AutoCounter() {
  return (
    <section id="our-achievement" className="padding-large bg-gray-200">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter-info text-center flex align-items-end">
              <div className="counter-number flex items-center">
                <h4 className="timer fw-bold m-0" data-to="100" data-speed="1000">780</h4>
              </div>
              <p className="counter-description text-uppercase ps-2 fw-bold">Proyectos realizados</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter-info text-center flex align-items-end">
              <div className="counter-number flex items-center">
                <h4 className="timer fw-bold m-0" data-to="100" data-speed="1000">127</h4>
              </div>
              <p className="counter-description text-uppercase ps-2 fw-bold">Total members</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter-info text-center flex align-items-end">
              <div className="counter-number flex items-center">
                <h4 className="timer fw-bold m-0" data-to="100" data-speed="1000">627</h4>
              </div>
              <p className="counter-description text-uppercase ps-2 fw-bold">Clientes satisfechos</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter-info text-center flex align-items-end">
              <div className="counter-number flex items-center">
                <h4 className="timer fw-bold m-0" data-to="10" data-speed="1000">10</h4>
              </div>
              <p className="counter-description text-uppercase ps-2 fw-bold">Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}