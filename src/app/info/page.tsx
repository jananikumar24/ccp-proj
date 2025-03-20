"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card"; 
import Link from "next/link";

interface DeviceData {
  id: number;
  name: string;
  image: string;
  waterConsumption: string;
  carbonEmission: string;
  greenhouseEffect: string;
  electricityConsumption: string;
}

export default function Home() {
  const [devices, setDevices] = useState<DeviceData[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDevices(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <main className="px-24 py-2 min-h-screen bg-gradient-to-b from-[#fafafa] via-[#fafafa] to-[#affca2]">
      <h1 className="text-4xl font-bold text-center mb-6">Smart Energy Consumption Monitoring</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {devices.map((device) => (
          <Link key={device.id} href={`/info/${device.id}`}>
            <Card {...device} />
          </Link>
        ))}
      </div>
    </main>
  );
}
