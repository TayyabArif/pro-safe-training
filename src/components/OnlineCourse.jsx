import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import FirstAid from '../images/first-aid.jpg'

import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Hands-On Projects",
    description:
      "Red Cross courses have the added benefit of national recognition, more flexible class instruction",
  },
  {
    icon: AcademicCapIcon,
    title: "Small Wound Management",
    description:
      "Red Cross courses have the added benefit of national recognition, more flexible class instruction",
  },
  {
    icon: CheckBadgeIcon,
    title: "Flexible Learning",
    description: "Red Cross courses have the added benefit of national recognition, more flexible class instruction",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <img
            width={768}
            height={500}
            src={FirstAid}
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h2" color="blue-gray" className="mb-4 text-left">
            Occupational First Aid
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Red Cross courses have the added benefit of national recognition, more flexible class instruction, and they teach the critical life savings skills for all ages, not just adults.
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;