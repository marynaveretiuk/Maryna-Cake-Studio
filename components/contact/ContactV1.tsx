import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContactV1() {
  return (
    <main className="inquiry-page">
      <section className="inquiry-hero">
        <div className="container">
          <div className="inquiry-hero__content">
            <p className="inquiry-eyebrow">Custom Cake Inquiries</p>

            <h1>
              Let&apos;s Create
              <br />
              Something Beautiful
            </h1>

            <p className="inquiry-hero__description">
              Planning a wedding, birthday, baptism, or another meaningful
              celebration? Share your ideas and I&apos;ll help create a cake
              that feels personal, beautiful, and unforgettable.
            </p>

            <a className="inquiry-hero__link" href="#inquiry-form">
              Start Your Inquiry ↓
            </a>
          </div>
        </div>
      </section>

      <section className="inquiry-content">
        <div className="container">
          <div className="inquiry-layout">
            <aside className="inquiry-details">
              <div className="inquiry-details__heading">
                <p className="inquiry-eyebrow">Maryna Cake Studio</p>
                <h2>Tell Me About Your Celebration</h2>
                <p>
                  Please include as much information as possible. This helps me
                  confirm availability and provide a more accurate estimate.
                </p>
              </div>

              <div className="inquiry-detail">
                <span>Location</span>
                <p>North Attleboro, MA</p>
                <small>Pickup and delivery options are available.</small>
              </div>

              <div className="inquiry-detail">
                <span>Booking</span>
                <p>By advance order only</p>
                <small>
                  Your date is confirmed only after the required deposit is
                  received.
                </small>
              </div>

              <div className="inquiry-detail">
                <span>Email</span>
                <a href="mailto:marynacakestudio@gmail.com">
                  marynacakestudio@gmail.com
                </a>
                <small>Typical response time: within 24 hours.</small>
              </div>

              <div className="inquiry-socials">
                <a
                  href="https://www.instagram.com/marynacakestudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Maryna Cake Studio on Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/marynacakestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Maryna Cake Studio on Facebook"
                >
                  <FaFacebookF />
                </a>
              </div>
            </aside>

            <form className="inquiry-form" id="inquiry-form">
              <div className="inquiry-form__row">
                <div className="inquiry-form__field">
                  <label htmlFor="name">Your name *</label>
                  <input id="name" name="name" type="text" required />
                </div>

                <div className="inquiry-form__field">
                  <label htmlFor="email">Email address *</label>
                  <input id="email" name="email" type="email" required />
                </div>
              </div>

              <div className="inquiry-form__row">
                <div className="inquiry-form__field">
                  <label htmlFor="phone">Phone number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div className="inquiry-form__field">
                  <label htmlFor="eventDate">Event date *</label>
                  <input id="eventDate" name="eventDate" type="date" required />
                </div>
              </div>

              <div className="inquiry-form__row">
                <div className="inquiry-form__field">
                  <label htmlFor="eventType">Type of celebration *</label>

                  <select
                    id="eventType"
                    name="eventType"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="kids-birthday">Kids&apos; birthday</option>
                    <option value="baptism">Baptism</option>
                    <option value="baby-shower">Baby shower</option>
                    <option value="corporate">Corporate event</option>
                    <option value="other">Other celebration</option>
                  </select>
                </div>

                <div className="inquiry-form__field">
                  <label htmlFor="servings">Number of servings *</label>
                  <input
                    id="servings"
                    name="servings"
                    type="number"
                    min="1"
                    required
                  />
                </div>
              </div>

              <div className="inquiry-form__row">
                <div className="inquiry-form__field">
                  <label htmlFor="flavor">Preferred flavor</label>
                  <input
                    id="flavor"
                    name="flavor"
                    type="text"
                    placeholder="Optional"
                  />
                </div>

                <div className="inquiry-form__field">
                  <label htmlFor="budget">Approximate budget</label>
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="inquiry-form__field">
                <label htmlFor="delivery">Pickup or delivery</label>

                <select id="delivery" name="delivery" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="pickup">Pickup</option>
                  <option value="delivery">Delivery</option>
                  <option value="undecided">Not sure yet</option>
                </select>
              </div>
              <div className="inquiry-form__field">
                <label htmlFor="inspiration">Inspiration photo</label>

                <input
                  id="inspiration"
                  name="inspiration"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                />

                <small className="inquiry-form__helper">
                  Upload one inspiration image, or include a Pinterest or
                  Instagram link in your message.
                </small>
              </div>

              <div className="inquiry-form__field">
                <label htmlFor="message">Tell me about your cake *</label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Please share your theme, colors, design ideas, preferred flavors, venue or delivery location, and any other important details."
                  required
                />
              </div>

              <button className="inquiry-form__button" type="submit">
                Send Inquiry
              </button>

              <p className="inquiry-form__note">
                <strong>Please note:</strong> My minimum order starts at{" "}
                <strong>2 kg</strong>. Orders are accepted based on
                availability. Your date is reserved only after availability is
                confirmed and the required deposit is received.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
