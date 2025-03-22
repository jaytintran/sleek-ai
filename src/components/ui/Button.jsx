import ButtonGradient from "@/assets/svg/ButtonGradient";
import ButtonSvg from "@/assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classses = `button relative inline-flex items-center justify-center h-[50px] transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const renderButton = () => (
    <button className={classses} onClick={onClick}>
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classses}>
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
