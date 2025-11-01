import { useState } from "react";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "El nombre es requerido" }).max(100, { message: "El nombre debe tener menos de 100 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "El email debe tener menos de 255 caracteres" }),
  phone: z.string().trim().min(1, { message: "El teléfono es requerido" }).max(20, { message: "El teléfono debe tener menos de 20 caracteres" }),
  debtAmount: z.string().trim().min(1, { message: "El monto de la deuda es requerido" }).max(50, { message: "El monto debe tener menos de 50 caracteres" }),
  debtTime: z.string().trim().min(1, { message: "Este campo es requerido" }).max(100, { message: "Debe tener menos de 100 caracteres" }),
  companies: z.string().trim().min(1, { message: "Este campo es requerido" }).max(500, { message: "Debe tener menos de 500 caracteres" }),
  additionalInfo: z.string().trim().max(1000, { message: "Debe tener menos de 1000 caracteres" }).optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    debtAmount: "",
    debtTime: "",
    companies: "",
    additionalInfo: ""
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
      const message = `Nueva consulta DICOM:
Nombre: ${validatedData.name}
Email: ${validatedData.email}
Teléfono: ${validatedData.phone}
Monto de deuda: ${validatedData.debtAmount}
Tiempo con deuda: ${validatedData.debtTime}
Empresas acreedoras: ${validatedData.companies}${validatedData.additionalInfo ? `\nInformación adicional: ${validatedData.additionalInfo}` : ''}`;

      const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos pronto.",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", debtAmount: "", debtTime: "", companies: "", additionalInfo: "" });
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
    <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 w-full max-w-full md:max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Nombre"
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
            placeholder="Email"
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
            placeholder="Teléfono"
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
          <Select
            name="debtAmount"
            value={formData.debtAmount}
            onValueChange={(value) => {
              setFormData(prev => ({ ...prev, debtAmount: value }));
              if (errors.debtAmount) {
                setErrors(prev => ({ ...prev, debtAmount: undefined }));
              }
            }}
          >
            <SelectTrigger className={errors.debtAmount ? "border-destructive" : ""}>
              <SelectValue placeholder="Monto de tu deuda" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2-millones">1 a 2 millones</SelectItem>
              <SelectItem value="2-5-millones">2 a 5 millones</SelectItem>
              <SelectItem value="mas-5-millones">Más de 5 millones</SelectItem>
            </SelectContent>
          </Select>
          {errors.debtAmount && (
            <p className="text-destructive text-sm mt-1">{errors.debtAmount}</p>
          )}
        </div>

        <div>
          <Input
            type="text"
            name="debtTime"
            placeholder="¿Hace cuánto tienes la deuda?"
            value={formData.debtTime}
            onChange={handleChange}
            className={`${errors.debtTime ? "border-destructive" : ""} h-12 md:h-10`}
            maxLength={100}
          />
          {errors.debtTime && (
            <p className="text-destructive text-sm mt-1">{errors.debtTime}</p>
          )}
        </div>

        <div>
          <Textarea
            name="companies"
            placeholder="¿A qué empresas les debes?"
            value={formData.companies}
            onChange={handleChange}
            className={errors.companies ? "border-destructive" : ""}
            rows={3}
            maxLength={500}
          />
          {errors.companies && (
            <p className="text-destructive text-sm mt-1">{errors.companies}</p>
          )}
        </div>

        <div>
          <Textarea
            name="additionalInfo"
            placeholder="¿Quieres agregar algo más? (opcional)"
            value={formData.additionalInfo}
            onChange={handleChange}
            className={errors.additionalInfo ? "border-destructive" : ""}
            rows={3}
            maxLength={1000}
          />
          {errors.additionalInfo && (
            <p className="text-destructive text-sm mt-1">{errors.additionalInfo}</p>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar consulta"}
        </Button>
      </form>
    </div>
  );
};
