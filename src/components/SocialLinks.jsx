const SocialLinks = () => {
  const socialMediaLinks = [
    {
      href: "https://www.facebook.com",
      icon: "facebook",
    },
    {
      href: "https://www.instagram.com",
      icon: "instagram",
    },
    {
      href: "https://www.x.com",
      icon: "twitter",
    },
    {
      href: "https://www.youtube.com",
      icon: "youtube",
    },
    {
      href: "#",
      icon: "linkedin",
    },
    {
      href: "https://wa.me",
      icon: "whatsapp",
    },
  ];
  return (
    <div className="team-social-bar">
      <ul className="flex space-x-4">
        {socialMediaLinks.map(({ href, icon, label }, index) => (
          <li key={index}>
            <a
              href={href}
              target="_blank"
              className="transition-colors duration-300 hover:bg-primary p-2 rounded-full"
              aria-label={label}
            >
              <i
                className={`fa fa-${icon} text-lg text-gray-800 hover:text-white`}
              ></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
