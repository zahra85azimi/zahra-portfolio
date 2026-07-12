import { FiMail, FiGithub, FiMapPin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import { useLanguage } from "../../context/LanguageContext";

function ContactInfo() {
  const { language } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <ContactCard
        icon={FiMail}
        title={language === "fa" ? "ایمیل" : "Email"}
        value="zahraazm222@gmail.com"
        href="mailto:zahraazm222@gmail.com"
      />
      <ContactCard
        icon={FiGithub}
        title="GitHub"
        value="github.com/zahra85azimi"
        href="https://github.com/zahra85azimi"
      />
      <ContactCard
        icon={FiPhone}
        title={language === "fa" ? "تلفن" : "Phone"}
        value="+98 938 390 0144"
        href="tel:+989383900144"
      />
      <ContactCard
        icon={FiMapPin}
        title={language === "fa" ? "موقعیت" : "Location"}
        value={language === "fa" ? "ایران" : "Iran"}
        href="#"
      />
    </motion.div>
  );
}

export default ContactInfo;
