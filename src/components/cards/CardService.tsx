import React, { ReactNode } from "react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

type CardServiceProps = {
  icon: IconName;
  title: string;
  description: string;
};

export const CardIcon = ({ iconIcon }: { iconIcon: IconName }) => {
  return (
    <div className="glass-primary-card-icon p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center ease-in-out transition duration-300">
      <DynamicIcon
        name={iconIcon}
        size={36}
        className=" text-primary-foreground group-hover:text-secondary ease-in-out transition duration-300"
      />
    </div>
  );
};

export const CardService = ({ icon, title, description }: CardServiceProps) => {
  return (
    <Card className="group glass-primary-card cursor-pointer hover:scale-[1.01] ease-in-out transition duration-300">
      <CardHeader>
        <div>
          <CardIcon iconIcon={icon} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <CardTitle className="text-[18px] text-primary-foreground  ease-in-out transition duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-neutral-300  ease-in-out transition duration-300">
            {description}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};
