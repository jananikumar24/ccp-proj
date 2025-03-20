import Image from "next/image";

interface CardProps {
  name: string;
  image: string;
  waterConsumption: string;
  carbonEmission: string;
  greenhouseEffect: string;
  electricityConsumption: string;
}

const Card: React.FC<CardProps> = ({
  name,
  image,
  waterConsumption,
  carbonEmission,
  greenhouseEffect,
  electricityConsumption,
}) => {
  // Determine border color based on Greenhouse Effect
  const borderColor =
    greenhouseEffect === "High" ? "hover:border-red-500" :
    greenhouseEffect === "Medium" ? "hover:border-yellow-500" :
    "hover:border-green-500";

  return (
    <div className={`bg-white shadow-lg rounded-xl p-4 w-80 border-2 border-transparent transition-all duration-300 ${borderColor}`}>
      <Image src={image} alt={name} width={200} height={150} className="object-contain w-[200px] h-[200px] rounded-md mx-auto" />
      <h2 className="text-xl font-bold text-center mt-2">{name}</h2>
      <ul className="mt-2 text-sm space-y-1">
        <li><strong>Water Consumption:</strong> {waterConsumption}</li>
        <li><strong>Carbon Emission:</strong> {carbonEmission}</li>
        <li><strong>Greenhouse Effect:</strong> {greenhouseEffect}</li>
        <li><strong>Electricity Consumption:</strong> {electricityConsumption}</li>
      </ul>
    </div>
  );
};

export default Card;
