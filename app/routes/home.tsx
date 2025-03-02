import Navbar from "~/components/macro/navbar";
import type { Route } from "./+types/home";
import { Separator } from "~/components/ui/separator";
import Apps from "~/components/macro/apps";
import Widgets from "~/components/macro/widgets";
import Pins from "~/components/macro/pins";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Lab" },
    { name: "description", content: "Welcome to your Lab!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen">
        <section className="p-4 basis-1/3">
          <Apps/>
          <Separator />
        </section>

        <section className="p-4 basis-1/3">
        <Widgets/>
          <Separator />
        </section>

        <section className="p-4 basis-1/3">
         <Pins/>
        </section>
      </div>
    </>
  );
}
