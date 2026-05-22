import { reviews } from "../constants/platse";

const Reviews = () => {
  return (
    <section className="section-light py-16 md:py-24">
      <div className="container-platse">
        <h2 className="heading-display text-3xl md:text-4xl text-center mb-12">
          Reviews
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="p-6 md:p-8 rounded-2xl bg-white shadow-sm border border-platse-sand transition-shadow duration-300 hover:shadow-md"
            >
              <p className="text-sm text-platse-muted leading-relaxed mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-semibold text-platse-ink text-sm">
                {review.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
