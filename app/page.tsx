import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionList";
import CTA from "@/components/CTA";

import {
  getUserCompanions,
  getUserSessions,
} from "@/lib/actions/companions.action";
import { redirect } from "next/navigation";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export const dynamic = "force-dynamic";
const Page = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const companions = await getUserCompanions(user.id, 3);
  const sessionHistory = await getUserSessions(user.id, 5);
  return (
    <main>
      <h1 className="text-2xl underline "> Your Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
            currentUserId={user.id}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Your recently completed sessions"
          companions={sessionHistory}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
