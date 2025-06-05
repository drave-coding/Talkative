import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start your coding journey.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Your Coding Companion
      </h2>
      <p>
        Choose a name, domain, voice, and style — then dive into insightful
        coding discussions that help you grow and explore new ideas.
      </p>

      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>Build a New Companion</p>
        </Link>
      </button>
    </section>
  );
};
export default Cta;
