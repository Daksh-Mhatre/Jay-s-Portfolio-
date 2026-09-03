import { services } from "../../data/services";
import { SectionHeader } from "../editorial/SectionHeader";
import { Container } from "../ui/Container";

export function Services() {
  return (
    <section aria-labelledby="services-heading" className="border-b border-ink py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              id="services-heading"
              index="SEC. 04"
              title="What We Shoot"
              note="SERVICE INDEX"
            />
          </div>
          <div className="flex items-end lg:col-span-7 lg:pl-12">
            <p className="type-body text-grey-600">
              Six ways of working, all of them the same job: keeping something that would
              otherwise be lost. Scope, deliverables and rates are discussed per project.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 border-l border-t border-ink sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative border-b border-r border-ink bg-paper p-6 transition-[transform,background-color,box-shadow] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-muted hover:shadow-[4px_4px_0_#111111] lg:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="type-display text-5xl text-ink/15 transition-colors duration-200 group-hover:text-accent">
                  {service.index}
                </span>
                <span className="type-meta-sm text-grey-500">{service.detail}</span>
              </div>
              <h3 className="type-heading mt-8 text-2xl lg:text-[1.75rem]">{service.title}</h3>
              <p className="type-body mt-3 text-sm text-grey-600">{service.description}</p>
            </article>
          ))}
        </div>

        <p className="type-meta-sm mt-6 text-grey-500">
          EDIT OR REMOVE ANY LINE IN src/data/services.ts — LIST ONLY WHAT PAST FORMAT OFFERS.
        </p>
      </Container>
    </section>
  );
}
