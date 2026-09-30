import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome.")
    .max(80, "Use no máximo 80 caracteres."),
  email: z.string().trim().min(1, "Informe seu e-mail.").email("Informe um e-mail válido."),
  subject: z
    .string()
    .trim()
    .min(3, "Informe o assunto.")
    .max(120, "Use no máximo 120 caracteres."),
  message: z
    .string()
    .trim()
    .min(20, "Conte um pouco mais, com pelo menos 20 caracteres.")
    .max(2000, "Use no máximo 2000 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
