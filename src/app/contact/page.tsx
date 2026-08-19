import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with author Joe Caruso.",
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-xl">
        <SectionHeading eyebrow="Get in Touch" title="Contact Joe" />
        <p className="mt-4 text-center font-sans text-taupe">
          Questions about a book, a speaking engagement, or just want to say
          hello? Send a message below.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
