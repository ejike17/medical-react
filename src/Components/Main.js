import React from "react";
import post1 from ".././images/post-1.jpg"
import post2 from ".././images/post-2.jpg"
import post3 from ".././images/post-3.jpg"
import about from ".././images/about-img.png"
import dots4 from ".././images/4-dots.png"
import service_icon from ".././images/service-icon-1.png"
import service_icon2 from ".././images/service-icon-2.png"
import service_icon3 from ".././images/service-icon-3.png"
import service_icon4 from ".././images/service-icon-4.png"
import banner2 from ".././images/banner-2-img.png"
import doc1 from ".././images/doc-1.png"
import doc2 from ".././images/doc-2.png"
import doc3 from ".././images/doc-3.png"

function Main() {
  return (
    <div>
      <section id="about" class="about py">
        <div class="about-inner">
          <div class="container grid">
            <div class="about-left text-center">
              <div class="section-head">
                <h2>About Us</h2>
                <div class="border-line"></div>
              </div>
              <p class="text text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae molestias delectus facilis, temporibus eum
                consectetur, a debitis exercitationem quae distinctio aliquid ea
                ipsam vitae esse amet soluta maxime dolorem? Inventore ut
                maiores illo ipsum nisi, nulla eligendi unde reiciendis quod
                voluptas velit sit voluptate perferendis cum pariatur molestiae
                tenetur repellat!
              </p>
              <a href="#" class="btn btn-white">
                Learn More
              </a>
            </div>
            <div class="about-right flex">
              <div class="img">
                <img src={about} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of about section -->

        <!-- banner one --> */}
      <section id="banner-one" class="banner-one text-center">
        <div class="container text-white">
          <blockquote class="lead">
            <i class="fas fa-quote-left"></i> When you are young and healthy, it
            never occurs to you that in a single second your whole life could
            change. <i class="fas fa-quote-right"></i>
          </blockquote>
          <small class="text text-sm">- Anonim Nano</small>
        </div>
      </section>
      {/* <!-- end of banner one -->

        <!-- services section --> */}
      <section id="services" class="services py">
        <div class="container">
          <div class="section-head text-center">
            <h2 class="lead">The Best Doctor gives the least medicines</h2>
            <p class="text text-lg">
              A perfect way to show your hospital services
            </p>
            <div class="line-art flex">
              <div></div>
              <img src={dots4} />
              <div></div>
            </div>
          </div>
          <div class="services-inner text-center grid">
            <article class="service-item">
              <div class="icon">
                <img src={service_icon} />
              </div>
              <h3>Cardio Monitoring</h3>
              <p class="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </article>

            <article class="service-item">
              <div class="icon">
                <img src={service_icon2} />
              </div>
              <h3>Medical Treatment</h3>
              <p class="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </article>

            <article class="service-item">
              <div class="icon">
                <img src={service_icon3}  />
              </div>
              <h3>Emergency Help</h3>
              <p class="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </article>

            <article class="service-item">
              <div class="icon">
                <img src={service_icon4}  />
              </div>
              <h3>First Aid</h3>
              <p class="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </article>
          </div>
        </div>
      </section>
      {/*  <!-- end of services section -->

        <!-- banner two section --> */}
      <section id="banner-two" class="banner-two text-center">
        <div class="container grid">
          <div class="banner-two-left">
            <img src={banner2} />
          </div>
          <div class="banner-two-right">
            <p class="lead text-white">
              When you are young and healthy, it never occurs to you that in a
              single second your whole life could change.
            </p>
            <div class="btn-group">
              <a href="#" class="btn btn-white">
                Learn More
              </a>
              <a href="#" class="btn btn-light-blue">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of banner two section -->

        <!-- doctors section --> */}
      <section id="doc-panel" class="doc-panel py">
        <div class="container">
          <div class="section-head">
            <h2>Our Doctor Panel</h2>
          </div>

          <div class="doc-panel-inner grid">
            <div class="doc-panel-item">
              <div class="img flex">
                <img src={doc1} alt="doctor image" />
                <div class="info text-center bg-blue text-white flex">
                  <p class="lead">samuel goe</p>
                  <p class="text-lg">Medicine</p>
                </div>
              </div>
            </div>

            <div class="doc-panel-item">
              <div class="img flex">
                <img src={doc2} alt="doctor image" />
                <div class="info text-center bg-blue text-white flex">
                  <p class="lead">elizabeth ira</p>
                  <p class="text-lg">Cardiology</p>
                </div>
              </div>
            </div>

            <div class="doc-panel-item">
              <div class="img flex">
                <img src={doc3} alt="doctor image" />
                <div class="info text-center bg-blue text-white flex">
                  <p class="lead">tanya collins</p>
                  <p class="text-lg">Medicine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*< !-- end of doctors section -->

        <!-- package services section --> */}
      <section id="package-service" class="package-service py text-center">
        <div class="container">
          <div class="package-service-head text-white">
            <h2>Package Service</h2>
            <p class="text text-lg">Best service package for you</p>
          </div>
          <div class="package-service-inner grid">
            <div class="package-service-item bg-white">
              <div class="icon flex">
                <i class="fas fa-phone fa-2x"></i>
              </div>
              <h3>Regular Case</h3>
              <p class="text text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, asperiores. Expedita, reiciendis quos beatae at
                consequatur voluptatibus fuga iste adipisci.
              </p>
              <a href="#" class="btn btn-blue">
                Read More
              </a>
            </div>

            <div class="package-service-item bg-white">
              <div class="icon flex">
                <i class="fas fa-calendar-alt fa-2x"></i>
              </div>
              <h3>Serious Case</h3>
              <p class="text text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, asperiores. Expedita, reiciendis quos beatae at
                consequatur voluptatibus fuga iste adipisci.
              </p>
              <a href="#" class="btn btn-blue">
                Read More
              </a>
            </div>

            <div class="package-service-item bg-white">
              <div class="icon flex">
                <i class="fas fa-comments fa-2x"></i>
              </div>
              <h3>Emergency Case</h3>
              <p class="text text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, asperiores. Expedita, reiciendis quos beatae at
                consequatur voluptatibus fuga iste adipisci.
              </p>
              <a href="#" class="btn btn-blue">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*  <!-- end of package services section -->

        <!-- posts section --> */}
      <section id="posts" class="posts py">
        <div class="container">
          <div class="section-head">
            <h2>Latest Post</h2>
          </div>
          <div class="posts-inner grid">
            <article class="post-item bg-white">
              <div class="img">
                <img src={post1} />
              </div>
              <div class="content">
                <h4>
                  Inspiring stories of person and family centered care during a
                  global pandemic.
                </h4>
                <p class="text text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptas eius recusandae sunt obcaecati esse facere
                  cumque. Aliquid, cupiditate debitis.
                </p>
                <p class="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quia ipsam, quis iure sed nulla.
                </p>
                <div class="info flex">
                  <small class="text text-sm">
                    <i class="fas fa-clock"></i> October 27, 2021
                  </small>
                  <small class="text text-sm">
                    <i class="fas fa-comment"></i> 5 comments
                  </small>
                </div>
              </div>
            </article>

            <article class="post-item bg-white">
              <div class="img">
                <img src={post2} />
              </div>
              <div class="content">
                <h4>
                  Inspiring stories of person and family centered care during a
                  global pandemic.
                </h4>
                <p class="text text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptas eius recusandae sunt obcaecati esse facere
                  cumque. Aliquid, cupiditate debitis.
                </p>
                <p class="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quia ipsam, quis iure sed nulla.
                </p>
                <div class="info flex">
                  <small class="text text-sm">
                    <i class="fas fa-clock"></i> October 27, 2021
                  </small>
                  <small class="text text-sm">
                    <i class="fas fa-comment"></i> 5 comments
                  </small>
                </div>
              </div>
            </article>

            <article class="post-item bg-white">
              <div class="img">
                <img src={post3} />
              </div>
              <div class="content">
                <h4>
                  Inspiring stories of person and family centered care during a
                  global pandemic.
                </h4>
                <p class="text text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptas eius recusandae sunt obcaecati esse facere
                  cumque. Aliquid, cupiditate debitis.
                </p>
                <p class="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quia ipsam, quis iure sed nulla.
                </p>
                <div class="info flex">
                  <small class="text text-sm">
                    <i class="fas fa-clock"></i> October 27, 2021
                  </small>
                  <small class="text text-sm">
                    <i class="fas fa-comment"></i> 5 comments
                  </small>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/*     <!-- end of posts section -->

        <!-- contact section --> */}
      <section id="contact" class="contact py">
        <div class="container grid">
          <div class="contact-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.6268289831164!2d-6.214682984112116!3d53.29621947996855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486709e0c9c80f8f%3A0x92f408d10f2277c2!2sREVO!5e0!3m2!1sen!2snp!4v1636264848776!5m2!1sen!2snp"
              width="600"
              height="450"
              /* style="border:0;" */
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div class="contact-right text-white text-center bg-blue">
            <div class="contact-head">
              <h3 class="lead">Contact Us</h3>
              <p class="text text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.
              </p>
            </div>
            <form>
              <div class="form-element">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your name"
                />
              </div>
              <div class="form-element">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your email"
                />
              </div>
              <div class="form-element">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  class="form-control"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-white btn-submit">
                <i class="fas fa-arrow-right"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
