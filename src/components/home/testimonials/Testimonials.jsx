import "./TestimonialsStyle.css";

export default function Testimonials({
  comment,
  profileName,
  profileImage,
  profileTitle,
}) {
  return (
    <>
      <section className="section-testimonials">
        <div className="testimonials">
          <div className="testimonials__cards">
            <div className="testimonials__card">
              <div className="testimonials__card-icon-container">
                <img
                  src="/icons/quote_icon.svg"
                  alt="آیکون نقل و قول"
                  className="testimonials__card-icon"
                />
              </div>
              <div className="testimonials__card-content">
                <h3 className="heading-tertiary">{comment}</h3>
              </div>
              <div className="testimonials__card-profile">
                <img
                  src={profileImage}
                  alt="عکس از مشتری"
                  className="testimonials__card-profile--img"
                />
                <span className="testimonials__card-profile--name">
                  {profileName}
                </span>
                <span className="testimonials__card-profile--title">
                  {profileTitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
