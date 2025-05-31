import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline "> Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="Companion 1"
          topic="Topic 1"
          subject="Subject 1"
          duration={30}
          color="#f0f0f0"
          bookmarked={false}
        />
        <CompanionCard
          id="2"
          name="Companion 2"
          topic="Topic 2"
          subject="Subject 2"
          duration={45}
          color="#e0e0e0"
          bookmarked={true}
        />
        <CompanionCard
          id="3"
          name="Companion 3"
          topic="Topic 3"
          subject="Subject 3"
          duration={60}
          color="#d0d0d0"
          bookmarked={false}
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently Added Companions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
