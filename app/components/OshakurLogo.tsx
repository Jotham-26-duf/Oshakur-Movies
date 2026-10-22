import Image from "next/image";

type OshakurLogoProps = {
  className?: string;
};

export default function OshakurLogo({ className = "" }: OshakurLogoProps) {
  return (
    <Image
      src="/images/logoo.jpg"
      alt="Oshakur Movies logo"
      width={100}
      height={100}
      className={className}
      style={{ objectFit: "contain" }}
      priority
    />
  );
}
