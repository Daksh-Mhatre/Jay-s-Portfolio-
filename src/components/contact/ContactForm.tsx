import { useId, useState } from "react";
import { submitEnquiry, type Enquiry } from "../../data/forms";
import { formEndpoint, projectTypes, contact } from "../../data/site";
import { Button } from "../ui/Button";
import { cn } from "../../utils/cn";

type Errors = Partial<Record<keyof Enquiry, string>>;
type Status = "idle" | "sending" | "queued" | "sent" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Enquiry): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.projectType) errors.projectType = "Please choose a project type.";
  if (values.message.trim().length < 12) errors.message = "Tell us a little more — 12 characters minimum.";
  return errors;
}

const FIELD_CLASS =
  "w-full border border-ink bg-paper px-4 py-3 type-body text-base text-ink placeholder:text-grey-500/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<Enquiry>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const update = (key: keyof Enquiry, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setFeedback("Some details are missing. Please check the fields marked below.");
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`${id}-${firstKey}`)?.focus();
      return;
    }

    setStatus("sending");
    const result = await submitEnquiry(values);

    if (result.status === "sent") {
      setStatus("sent");
      setFeedback("Thank you — your message has been delivered.");
      setValues({ name: "", email: "", phone: "", projectType: "", message: "" });
    } else if (result.status === "queued") {
      setStatus("queued");
      setFeedback(
        `Your details are valid, but no delivery service is connected to this form yet — nothing has been sent. Please email ${contact.email} directly, or connect an endpoint in src/data/site.ts.`,
      );
    } else {
      setStatus("error");
      setFeedback(result.message);
    }
  };

  const describedBy = (key: keyof Enquiry) => (errors[key] ? `${id}-${key}-error` : undefined);

  return (
    <form noValidate onSubmit={onSubmit} className="border border-ink bg-paper">
      <div className="flex items-center justify-between gap-4 border-b border-ink bg-ink px-4 py-2.5">
        <p className="type-meta-sm text-paper">ENQUIRY FORM</p>
        <p className="type-meta-sm text-paper/50">
          {formEndpoint ? "LIVE" : "NO ENDPOINT CONNECTED"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-6">
        <div className="sm:col-span-1">
          <label htmlFor={`${id}-name`} className="type-meta-sm mb-2 block text-grey-500">
            NAME *
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            className={cn(FIELD_CLASS, errors.name && "border-accent")}
            placeholder="Your name"
          />
          {errors.name ? (
            <p id={`${id}-name-error`} className="type-meta-sm mt-2 text-accent">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${id}-email`} className="type-meta-sm mb-2 block text-grey-500">
            EMAIL *
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            className={cn(FIELD_CLASS, errors.email && "border-accent")}
            placeholder="you@example.com"
          />
          {errors.email ? (
            <p id={`${id}-email-error`} className="type-meta-sm mt-2 text-accent">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${id}-phone`} className="type-meta-sm mb-2 block text-grey-500">
            PHONE
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            className={cn(FIELD_CLASS, errors.phone && "border-accent")}
            placeholder="Optional"
          />
          {errors.phone ? (
            <p id={`${id}-phone-error`} className="type-meta-sm mt-2 text-accent">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${id}-projectType`} className="type-meta-sm mb-2 block text-grey-500">
            PROJECT TYPE *
          </label>
          <select
            id={`${id}-projectType`}
            name="projectType"
            required
            value={values.projectType}
            onChange={(event) => update("projectType", event.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={describedBy("projectType")}
            className={cn(FIELD_CLASS, "pr-10", errors.projectType && "border-accent")}
          >
            <option value="">SELECT —</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p id={`${id}-projectType-error`} className="type-meta-sm mt-2 text-accent">
              {errors.projectType}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className="type-meta-sm mb-2 block text-grey-500">
            MESSAGE *
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            required
            rows={5}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy("message")}
            className={cn(FIELD_CLASS, "resize-y", errors.message && "border-accent")}
            placeholder="Dates, location, what you would like kept."
          />
          {errors.message ? (
            <p id={`${id}-message-error`} className="type-meta-sm mt-2 text-accent">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <Button type="submit" variant="primary" size="lg" block disabled={status === "sending"}>
            {status === "sending" ? "SENDING…" : "START A CONVERSATION"}
          </Button>
        </div>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={cn(
          "type-body border-t border-ink px-5 py-4 text-sm sm:px-6",
          status === "error" && "text-accent",
          status === "idle" && "text-grey-500",
          (status === "queued" || status === "sent") && "text-ink",
        )}
      >
        {feedback ||
          "Required fields are marked *. This form validates in the browser; connect a provider to deliver it."}
      </p>
    </form>
  );
}
