"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface DeviceData {
  id: number;
  name: string;
  image: string;
  waterConsumption: string;
  carbonEmission: string;
  greenhouseEffect: string;
  electricityConsumption: string;
  description: string;
}

export default function DeviceDetail() {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const [device, setDevice] = useState<DeviceData | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedDevice = data.find((item: DeviceData) => item.id === Number(id));
        setDevice(selectedDevice);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [id]);

  if (!device) return <p className="text-center mt-10">Loading...</p>;

  return (
    <main className="px-24 py-8 min-h-screen bg-gradient-to-b from-[#fafafa] via-[#fafafa] to-[#affca2]">
      <h1 className="text-4xl font-bold text-center mb-6">{device.name}</h1>
      <div className="flex flex-col items-center">
        <img src={device.image} alt={device.name} className="w-96 h-96 object-contain rounded-lg shadow-lg" />
        <p className="mt-6 text-lg">{device.description}</p>
        <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
          <p><strong>Water Consumption:</strong> {device.waterConsumption}</p>
          <p><strong>Carbon Emission:</strong> {device.carbonEmission}</p>
          <p><strong>Greenhouse Effect:</strong> {device.greenhouseEffect}</p>
          <p><strong>Electricity Consumption:</strong> {device.electricityConsumption}</p>
        </div>
      </div>
    </main>
  );
}
