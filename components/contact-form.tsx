"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    privacy: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="border-0 shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">¡Mensaje Enviado!</h3>
          <p className="text-slate-600 mb-6">Gracias por contactarme. Te responderé en menos de 24 horas.</p>
          <p className="text-sm text-slate-500">Si es urgente, puedes llamarme al +34 600 123 456</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-900">Solicita tu Consulta Gratuita</CardTitle>
        <p className="text-slate-600">Completa el formulario y te contactaré en breve</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+34 600 000 000"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Tipo de consulta *</Label>
            <Select onValueChange={(value) => handleInputChange("service", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el servicio que necesitas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mediacion">Mediación</SelectItem>
                <SelectItem value="divorcio">Divorcio</SelectItem>
                <SelectItem value="sucesiones">Sucesiones y Herencias</SelectItem>
                <SelectItem value="familia">Derecho de Familia</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Describe tu situación *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Cuéntame brevemente tu situación para poder ayudarte mejor..."
              rows={4}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="privacy"
              checked={formData.privacy}
              onCheckedChange={(checked) => handleInputChange("privacy", checked as boolean)}
              required
            />
            <Label htmlFor="privacy" className="text-sm text-slate-600">
              Acepto la política de privacidad y el tratamiento de mis datos personales *
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500">
            <Send className="mr-2 h-5 w-5" />
            Enviar Consulta Gratuita
          </Button>

          <p className="text-xs text-slate-500 text-center">
            * Campos obligatorios. Te responderé en menos de 24 horas.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
