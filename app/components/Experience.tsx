import Image from "next/image";
import { Globe, Shield } from "lucide-react";

export default function Experience() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-32">
      {/* Section Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Work Experience
      </h2>

      <div className="space-y-16 bg-white rounded-3xl shadow-xl p-20 md:p-14">
        
        {/* ================= ONS ================= */}
        <div className="grid md:grid-cols-2 overflow-hidden rounded-2xl border border-gray-100 min-h-[420px]">
          
          {/* IMAGE */}
          <div className="relative h-[260px] md:h-full">
            <Image
              src="/ons.jpg"
              alt="ONS Logistics"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center p-8 md:p-12 h-full">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              Software Engineer
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              ONS Logistics India Pvt. Ltd.
            </h3>

            <p className="text-gray-600 leading-relaxed mb-5">
              Built and scaled internal software systems to support logistics
              operations, shipment tracking, and customer workflows across
              multiple teams.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I contributed to developing their website and ERP modules,
              handling data flows, operational dashboards, and system
              integrations for daily logistics operations.
            </p>
          </div>
        </div>

        {/* ================= AIRTEL ================= */}
        <div className="grid md:grid-cols-2 overflow-hidden rounded-2xl border border-gray-100 min-h-[420px]">
          
          {/* CONTENT */}
          <div className="flex flex-col justify-center p-8 md:p-12 order-2 md:order-1 h-full">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Software Engineering Intern
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Bharti Airtel
            </h3>

            <p className="text-gray-600 leading-relaxed mb-5">
              I focused on building systems that balance performance,
              maintainability, and business needs — from authentication
              to data persistence and error handling.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              My work emphasized clean architecture, modular design,
              and real-time visibility into operations.
            </p>

            <p className="text-gray-600 leading-relaxed">
              This experience strengthened my understanding of how
              software systems support real businesses at scale.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[260px] md:h-full order-1 md:order-2">
            <Image
              src="/airtel.jpg"
              alt="Bharti Airtel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
