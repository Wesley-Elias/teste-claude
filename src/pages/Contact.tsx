import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IMAGES, img } from "@/data/images";
import { site } from "@/data/site";
import { sendContactMessage } from "@/lib/api";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { cn } from "@/lib/utils";

export default function Contact() {
  useDocumentTitle("Contato");
  const [sentTo, setSentTo] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
    mode: "onTouched",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await sendContactMessage(values);
      toast.success("Mensagem enviada", {
        description: "Obrigado pelo contato. Respondemos em até dois dias úteis.",
      });
      setSentTo(values.name.split(" ")[0]);
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível enviar", {
        description: `Tente novamente em instantes ou escreva para ${site.email}.`,
      });
    }
  };

  const onInvalid = () => {
    toast.error("Verifique os campos", { description: "Alguns dados precisam de atenção antes do envio." });
  };

  return (
    <>
      <PageIntro eyebrow="Contato" title="Vamos conversar.">
        Conte um pouco sobre o seu projeto, o lugar e o momento. Respondemos todas as mensagens pessoalmente.
      </PageIntro>

      <section className="container pb-28 md:pb-44">
        <div className="grid gap-20 md:grid-cols-12 md:gap-8">
          {/* Formulário */}
          <Reveal className="md:col-span-6">
            {sentTo ? (
              <div role="status" className="border-t border-ink/80 pt-10">
                <p className="label text-earth">Mensagem recebida</p>
                <p className="mt-6 font-serif text-4xl font-light leading-tight md:text-5xl">
                  Obrigado, {sentTo}. Em breve entraremos em contato.
                </p>
                <button
                  type="button"
                  onClick={() => setSentTo(null)}
                  className="link-underline mt-10 font-sans text-[0.72rem] uppercase tracking-label"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit, onInvalid)}
                className="space-y-10 border-t border-ink/80 pt-10"
                aria-describedby="form-hint"
              >
                <p id="form-hint" className="sr-only">
                  Todos os campos são obrigatórios.
                </p>

                <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
                  <Field id="name" label="Nome" error={errors.name?.message}>
                    <Input
                      id="name"
                      autoComplete="name"
                      placeholder="Seu nome"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      {...register("name")}
                    />
                  </Field>
                  <Field id="email" label="E-mail" error={errors.email?.message}>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="voce@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      {...register("email")}
                    />
                  </Field>
                </div>

                <Field id="subject" label="Assunto" error={errors.subject?.message}>
                  <Input
                    id="subject"
                    placeholder="Residência, interiores, consultoria..."
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    {...register("subject")}
                  />
                </Field>

                <Field id="message" label="Mensagem" error={errors.message?.message}>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Fale sobre o terreno, o programa, o prazo..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    {...register("message")}
                  />
                </Field>

                <div className="flex flex-col gap-6 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" variant="outline" size="lg" disabled={isSubmitting} className="min-w-[14rem]">
                    {isSubmitting ? (
                      <>
                        <span aria-hidden className="inline-block h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
                        Enviando
                      </>
                    ) : (
                      <>
                        Enviar mensagem <span aria-hidden>→</span>
                      </>
                    )}
                  </Button>
                  <p className="text-xs font-light text-muted-foreground">Seus dados não serão compartilhados.</p>
                </div>
              </form>
            )}
          </Reveal>

          {/* Informações */}
          <Reveal delay={150} className="md:col-span-4 md:col-start-9">
            <div className="space-y-10 border-t border-sand pt-10">
              <InfoBlock label="Estúdio">
                <address className="not-italic">
                  {site.address.street}
                  <br />
                  {site.address.district}
                  <br />
                  {site.address.city}, {site.address.zip}
                </address>
              </InfoBlock>
              <InfoBlock label="E-mail">
                <a href={`mailto:${site.email}`} className="link-quiet break-all">
                  {site.email}
                </a>
              </InfoBlock>
              <InfoBlock label="Telefone">
                <a href={site.phoneHref} className="link-quiet">
                  {site.phone}
                </a>
              </InfoBlock>
              <InfoBlock label="Horário">{site.hours}</InfoBlock>
              <InfoBlock label="Redes">
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {site.socials.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noreferrer" className="link-quiet">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </InfoBlock>
            </div>

            <SmartImage
              src={img(IMAGES.contact, 1200)}
              alt="Fachada de edifício contemporâneo"
              ratio="portrait"
              tone="mono"
              zoom={false}
              className="mt-16"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className={cn(error && "text-destructive")}>
        {label}
      </Label>
      <div className="mt-2">{children}</div>
      <p
        id={`${id}-error`}
        role={error ? "alert" : undefined}
        className={cn(
          "text-xs font-light text-destructive transition-[opacity,max-height,margin] duration-300 ease-out",
          error ? "mt-2 max-h-10 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {error}
      </p>
    </div>
  );
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label mb-3">{label}</p>
      <div className="text-[0.95rem] font-light leading-relaxed">{children}</div>
    </div>
  );
}
