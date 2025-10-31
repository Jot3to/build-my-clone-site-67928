import { useState } from "react";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "El nombre es requerido" }).max(100, { message: "El nombre debe tener menos de 100 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "El email debe tener menos de 255 caracteres" }),
  phone: z.string().trim().min(1, { message: "El teléfono es requerido" }).max(20, { message: "El teléfono debe tener menos de 20 caracteres" }),
  message: z.string().trim().min(1, { message: "El mensaje es requerido" }).max(1000, { message: "El mensaje debe tener menos de 1000 caracteres" })
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Create WhatsApp message with proper encoding
      const message = `Nuevo contacto desde Mi Eunacom:
Nombre: ${validatedData.name}
Email: ${validatedData.email}
Teléfono: ${validatedData.phone}
Mensaje: ${validatedData.message}`;

      const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos pronto.",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Hubo un problema al enviar el mensaje",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-2xl">
      <h3 className="text-2xl font-semibold text-foreground mb-2">
        📩 Contáctanos
      </h3>
      <p className="text-muted-foreground mb-6">
        Déjanos tus datos y te ayudaremos a comenzar tu preparación
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "border-destructive" : ""}
            maxLength={100}
          />
          {errors.name && (
            <p className="text-destructive text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <Input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-destructive" : ""}
            maxLength={255}
          />
          {errors.email && (
            <p className="text-destructive text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <Input
            type="tel"
            name="phone"
            placeholder="Tu teléfono"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "border-destructive" : ""}
            maxLength={20}
          />
          {errors.phone && (
            <p className="text-destructive text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <Textarea
            name="message"
            placeholder="¿En qué podemos ayudarte?"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "border-destructive" : ""}
            rows={4}
            maxLength={1000}
          />
          {errors.message && (
            <p className="text-destructive text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </div>
  );
};
