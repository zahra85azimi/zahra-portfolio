import CertificateHeader from "../components/certificates/CertificateHeader";
import CertificateCard from "../components/certificates/CertificateCard";
import certificates from "../data/certificates";
import { useLanguage } from "../context/LanguageContext";

function Certificates() {
  const { language } = useLanguage();

  return (
    <section
      id="certificates"
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
        <CertificateHeader />
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {certificates[language].map((item, index) => (
            <CertificateCard
              key={index}
              title={item.title}
              issuer={item.issuer}
              year={item.year}
              delay={index * 0.15}
              skills={item.skills}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
