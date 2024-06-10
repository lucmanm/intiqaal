import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/company_logo/google.png",
    description:
      "John has over 20 years of experience in the industry and is a recognized leader in his field.",
  },
  {
    name: "Jane Smith",
    role: "Chief Operating Officer",
    image: "/company_logo/google.png",
    description:
      "Jane brings a wealth of experience in operations and management, ensuring our company runs smoothly.",
  },
  {
    name: "Michael Johnson",
    role: "Chief Technology Officer",
    image: "/company_logo/google.png",
    description:
      "Michael leads our technology team with innovative solutions and cutting-edge developments.",
  },
];

export default function AboutUs() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We are committed to excellence
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our team of professionals is dedicated to providing top-notch services and solutions to
            meet your needs.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex gap-4 flex-col md:flex-row">
            {teamMembers.map((member, index) => (
              <Card key={index} className="w-full md:w-1/3 px-4 py-6 overflow-hidden">
                <Image
                  className="w-full h-48 object-cover"
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                />
                <div className="p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{member.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{member.role}</p>
                  <p className="mt-4 text-sm text-gray-500">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
