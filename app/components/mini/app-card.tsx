import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { SiPlex } from "react-icons/si";


interface AppCardProps {
  title: string;
  description: string;
}

const AppCard: React.FC<AppCardProps> = ({ title, description }) => {
  return (
    <Card className="aspect-square max-w-36">
      <CardContent>
      <SiPlex className="text-8xl"/>

      </CardContent>
      {/* <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardFooter>
                <CardDescription>{description}</CardDescription>
            </CardFooter> */}
    </Card>
  );
};

export default AppCard;
