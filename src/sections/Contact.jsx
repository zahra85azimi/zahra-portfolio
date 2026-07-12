import ContactHeader from "../components/contact/ContactHeader";
import ContactInfo from "../components/contact/ContactInfo";
import ContactCTA from "../components/contact/ContactCTA";

function Contact() {
  return (
    <section
      id="contact"
      className="
       bg-slate-50
       dark:bg-slate-950
       px-6
       py-28
       sm:px-8
       lg:px-20
       transition-colors
       duration-500
       "
    >
      <div className="mx-auto max-w-7xl">
        <ContactHeader />
        <div
          className="
          mt-20
          grid
          gap-10
          lg:grid-cols-2
          "
        >
          <ContactInfo />
          <ContactCTA />
        </div>
      </div>
    </section>
  );
}

export default Contact;
