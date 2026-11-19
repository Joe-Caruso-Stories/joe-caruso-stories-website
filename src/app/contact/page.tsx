import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with author Joe Caruso.",
};

const CONTACT_EMAIL = "joecarusostories@gmail.com";

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-xl">
        <SectionHeading eyebrow="Get in Touch" title="Contact Joe" />
        <p className="mt-4 text-center font-sans text-taupe">
          Questions about a book, a speaking engagement, or just want to say
          hello? Send Joe an email.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Button href={`mailto:${CONTACT_EMAIL}`} variant="primary">
            Email Joe
          </Button>
          <p className="font-sans text-sm text-taupe">
            or write to{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-link hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
