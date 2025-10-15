const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-6 lg:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm font-brand">
          <p>© 2025 designabel llc</p>
          <a 
            href="mailto:evan@designabel.com" 
            className="hover:underline transition-all"
          >
            evan@designabel.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
