type WhatsAppButtonProps = {
  telephone: string;
  message: string;
};
const WhatsAppButton = ({ telephone, message }: WhatsAppButtonProps) => {
  const clenedNumber = telephone.replace(/\D/g, "");
  const mensagemCodificada = encodeURIComponent(message);
  const link = `https://wa.me/${clenedNumber}?text=${mensagemCodificada}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <span>Fale conosco</span>
    </a>
  );
};

export default WhatsAppButton;
