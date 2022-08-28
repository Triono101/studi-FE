const Slide = () => {
  return (
    <div
      id="myCarousel"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="mask flex-center">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-7 col-12 order-md-1 order-2">
                  <a href="#">BUY NOW</a>
                  <h4>iPhone 12 Pro</h4>
                  <p>
                    This has many features that are simply awesome. The phone
                    comes with a 3.50-inch display with a resolution of 320x480
                    pixels.
                  </p>
                </div>
                <div class="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Photo.png"
                    class="mx-auto"
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="mask flex-center">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-7 col-12 order-md-1 order-2">
                  <a href="#">BUY NOW</a>
                  <h4>Lenovo Yoga 900</h4>
                  <p>
                    This has many features that are simply awesome.The phone
                    comes with a 3.50-inch display with a resolution of 320x480
                    pixels.
                  </p>
                </div>
                <div class="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src="https://freepngimg.com/download/laptop/162062-photos-laptop-top-view-free-download-png-hq.png"
                    class="mx-auto"
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="mask flex-center">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-7 col-12 order-md-1 order-2">
                  <a href="#">BUY NOW</a>
                  <h4>Huawei P50 Pro</h4>
                  <p>
                    This has many features that are simply awesome.The phone
                    comes with a 3.50-inch display with a resolution of 320x480
                    pixels.
                  </p>
                </div>
                <div class="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src="https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Huawei%20P-cl0tq7so8008801til81i1xsp.png"
                    class="mx-auto"
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="mask flex-center">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-7 col-12 order-md-1 order-2">
                  <a href="#">BUY NOW</a>
                  <h4>Xiaomi 11T Pro</h4>
                  <p>
                    This has many features that are simply awesome.The phone
                    comes with a 3.50-inch display with a resolution of 320x480
                    pixels.
                  </p>
                </div>
                <div class="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src="https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-11t-pro/specs-header.png"
                    class="mx-auto"
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="mask flex-center">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-7 col-12 order-md-1 order-2">
                  <a href="#">BUY NOW</a>
                  <h4>Lenovo Ideapad 520</h4>
                  <p>
                    This has many features that are simply awesome.The phone
                    comes with a 3.50-inch display with a resolution of 320x480
                    pixels.
                  </p>
                </div>
                <div class="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src="https://www.seekpng.com/png/full/362-3625044_lenovo-laptop-png-lenovo-ideapad-720s-14-laptop.png"
                    class="mx-auto"
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        {" "}
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>{" "}
        <span class="sr-only">Previous</span>{" "}
      </a>{" "}
      <a
        class="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        {" "}
        <span class="carousel-control-next-icon" aria-hidden="true"></span>{" "}
        <span class="sr-only">Next</span>{" "}
      </a>
    </div>
  );
};

export default Slide;
