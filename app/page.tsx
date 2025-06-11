import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Users,
  FileText,
  Heart,
  Star,
  CheckCircle,
  MessageCircle,
  Calendar,
} from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-amber-400" />
            <h1 className="text-xl font-bold">Dra. Lilian Caballero</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+54 343 400 000</span>
            </div>
            <Button
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900"
            >
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-400 text-slate-900 hover:bg-amber-500">+20 años de experiencia</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Soluciones Legales
                <span className="text-amber-400"> Confiables</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Especialista en mediaciones, divorcios y sucesiones. Te acompaño en los momentos más importantes de tu
                vida con profesionalidad y cercanía humana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-400 text-slate-900 hover:bg-amber-500 text-lg px-8">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Consulta Gratuita
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Respuesta en 24h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Primera consulta gratuita</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto flex items-center justify-center">
                    <Shield className="h-12 w-12 text-slate-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">¿Necesitas ayuda legal?</h3>
                  <p className="text-slate-600">Contacta conmigo y resolveremos tu situación juntos</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-amber-500" />
                      <span>Atención inmediata</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-amber-500" />
                      <span>100% confidencial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Mis Especialidades</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ofrezco servicios legales especializados con un enfoque humano y profesional, adaptándome a las
              necesidades específicas de cada cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mediaciones</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Resolución pacífica de conflictos familiares y civiles. Evita largos procesos judiciales y encuentra
                  soluciones consensuadas.
                </p>
                <ul className="text-left space-y-2 text-slate-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Mediación familiar</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Mediación civil y mercantil</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Acuerdos de custodia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Divorcios</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Acompañamiento integral en procesos de separación y divorcio, protegiendo tus intereses y los de tu
                  familia.
                </p>
                <ul className="text-left space-y-2 text-slate-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Divorcio de mutuo acuerdo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Divorcio contencioso</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Custodia y pensiones</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Sucesiones</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Gestión completa de herencias y testamentos. Te ayudo a planificar el futuro de tu patrimonio
                  familiar.
                </p>
                <ul className="text-left space-y-2 text-slate-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Testamentos y herencias</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Partición de bienes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Planificación sucesoria</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-slate-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Shield className="h-24 w-24 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500">Foto profesional</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-800">Sobre mí</Badge>
              <h2 className="text-4xl font-bold text-slate-900">
                Dra. María González
                <span className="block text-2xl text-slate-600 font-normal mt-2">
                  Abogada especialista en Derecho de Familia
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Con más de 20 años de experiencia, me dedico a brindar soluciones legales efectivas y humanas. Mi
                enfoque se centra en entender las necesidades específicas de cada cliente y ofrecer un acompañamiento
                integral durante todo el proceso.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">+500 casos resueltos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Colegiada nº 12345</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Mediadora certificada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Máster en Derecho de Familia</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                <Calendar className="mr-2 h-5 w-5" />
                Reservar Cita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-amber-400 text-slate-900 mb-4">Casos de Éxito</Badge>
            <h2 className="text-4xl font-bold mb-4">Resultados que Hablan por Sí Solos</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Más de 500 casos resueltos con éxito. Cada situación es única, pero mi compromiso es siempre el mismo:
              obtener el mejor resultado para mis clientes.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">95%</div>
              <p className="text-slate-300">Casos resueltos exitosamente</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">80%</div>
              <p className="text-slate-300">Mediaciones exitosas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">6 meses</div>
              <p className="text-slate-300">Tiempo promedio de resolución</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">500+</div>
              <p className="text-slate-300">Familias ayudadas</p>
            </div>
          </div>

          {/* Case Studies */}
          <div className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Case 1 - Mediación */}
              <Card className="bg-white text-slate-900 border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-green-100 text-green-800">Mediación Familiar</Badge>
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Custodia Compartida sin Conflicto</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Duración del proceso:</span>
                      <span className="font-semibold">3 meses</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Ahorro vs. juicio:</span>
                      <span className="font-semibold text-green-600">€8,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Resultado:</span>
                      <span className="font-semibold">Acuerdo total</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Pareja con dos hijos menores logró un acuerdo de custodia compartida y régimen de visitas
                    satisfactorio para ambas partes, evitando un largo proceso judicial.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm italic text-slate-700">
                      "Gracias a María pudimos centrarnos en lo importante: el bienestar de nuestros hijos. La mediación
                      nos ayudó a comunicarnos mejor."
                    </p>
                    <p className="text-xs text-slate-500 mt-2">- Cliente anónimo</p>
                  </div>
                </CardContent>
              </Card>

              {/* Case 2 - Divorcio */}
              <Card className="bg-white text-slate-900 border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-blue-100 text-blue-800">Divorcio Express</Badge>
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Divorcio de Mutuo Acuerdo Rápido</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Duración del proceso:</span>
                      <span className="font-semibold">45 días</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Patrimonio gestionado:</span>
                      <span className="font-semibold">€450,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Resultado:</span>
                      <span className="font-semibold">Sin conflictos</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Matrimonio sin hijos con patrimonio considerable logró divorciarse de forma amistosa con reparto
                    equitativo de bienes y sin complicaciones legales.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm italic text-slate-700">
                      "Proceso rápido y sin sorpresas. María nos explicó todo claramente y nos ayudó a tomar las mejores
                      decisiones."
                    </p>
                    <p className="text-xs text-slate-500 mt-2">- Cliente anónimo</p>
                  </div>
                </CardContent>
              </Card>

              {/* Case 3 - Sucesiones */}
              <Card className="bg-white text-slate-900 border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-purple-100 text-purple-800">Herencia Compleja</Badge>
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Herencia Familiar Compleja</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Duración del proceso:</span>
                      <span className="font-semibold">8 meses</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Valor de la herencia:</span>
                      <span className="font-semibold">€750,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Herederos:</span>
                      <span className="font-semibold">5 personas</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Herencia con múltiples propiedades y herederos en diferentes países. Se logró una partición
                    equitativa y la optimización fiscal correspondiente.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm italic text-slate-700">
                      "Una herencia que parecía imposible de resolver. María coordinó todo perfectamente y todos
                      quedamos satisfechos con el resultado."
                    </p>
                    <p className="text-xs text-slate-500 mt-2">- Cliente anónimo</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Cases Row */}
            <div className="grid lg:grid-cols-2 gap-8 mt-8">
              {/* Case 4 - Mediación Empresarial */}
              <Card className="bg-white text-slate-900 border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-amber-100 text-amber-800">Mediación Empresarial</Badge>
                    <Shield className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Conflicto Societario Resuelto</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-slate-600 text-sm">Duración:</p>
                      <p className="font-semibold">4 meses</p>
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Ahorro estimado:</p>
                      <p className="font-semibold text-green-600">€25,000</p>
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Socios involucrados:</p>
                      <p className="font-semibold">3 personas</p>
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Resultado:</p>
                      <p className="font-semibold">Acuerdo exitoso</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Conflicto entre socios de empresa familiar resuelto mediante mediación, evitando la disolución de la
                    sociedad y preservando las relaciones familiares.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm italic text-slate-700">
                      "Salvó nuestra empresa y nuestra familia. Su enfoque profesional y humano fue clave."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Case 5 - Divorcio Contencioso */}
              <Card className="bg-white text-slate-900 border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-red-100 text-red-800">Divorcio Contencioso</Badge>
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Protección de Intereses Familiares</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-slate-600 text-sm">Duración:</p>
                      <p className="font-semibold">14 meses</p>
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Custodia obtenida:</p>
                      <p className="font-semibold text-green-600">Compartida</p>
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Pensión justa:</p>
                      <p className="font-semibold">€1,200/mes</p>
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Vivienda:</p>
                      <p className="font-semibold">Protegida</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Caso complejo con violencia de género donde se logró proteger a la madre y los menores, obteniendo
                    custodia compartida y pensión alimenticia adecuada.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm italic text-slate-700">
                      "Me dio la fuerza y el apoyo legal que necesitaba. Siempre estuvo ahí cuando más la necesité."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-amber-400 text-slate-900 p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">¿Tu Caso Parece Complicado?</h3>
              <p className="text-lg mb-6">
                Cada situación es única, pero mi experiencia me permite encontrar soluciones incluso en los casos más
                complejos. Hablemos de tu situación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Consulta Gratuita
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Lo que dicen mis clientes</h2>
            <p className="text-xl text-slate-600">La confianza de mis clientes es mi mejor carta de presentación</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "María me ayudó en mi proceso de divorcio con una profesionalidad y humanidad excepcionales. Siempre
                  estuvo disponible y me explicó cada paso del proceso."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-slate-900">Ana Martín</p>
                    <p className="text-sm text-slate-500">Cliente - Divorcio</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "Gracias a la mediación que realizó María, pudimos resolver nuestro conflicto familiar sin llegar a
                  juicio. Su enfoque fue clave para encontrar una solución."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-slate-900">Carlos Ruiz</p>
                    <p className="text-sm text-slate-500">Cliente - Mediación</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "La gestión de la herencia de mi padre fue impecable. María nos guió en todo momento y resolvió todas
                  nuestras dudas con paciencia y claridad."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-slate-900">Isabel López</p>
                    <p className="text-sm text-slate-500">Cliente - Sucesiones</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Contacta Conmigo</h2>
            <p className="text-xl text-slate-600">
              Estoy aquí para ayudarte. Primera consulta gratuita y sin compromiso.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Teléfono</p>
                      <p className="text-slate-600">+34 600 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <p className="text-slate-600">maria@abogadagonzalez.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Dirección</p>
                      <p className="text-slate-600">Calle Principal 123, 28001 Madrid</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Horario</p>
                      <p className="text-slate-600">Lun-Vie: 9:00-18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-3">¿Por qué elegirme?</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Primera consulta gratuita</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Respuesta en menos de 24 horas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Atención personalizada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Honorarios transparentes</span>
                  </li>
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-amber-400" />
                <h3 className="text-xl font-bold">Dra. María González</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Abogada especialista en Derecho de Familia con más de 20 años de experiencia.
              </p>
              <p className="text-sm text-slate-400">Colegiada nº 12345 - Ilustre Colegio de Abogados de Madrid</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Mediaciones</li>
                <li>Divorcios</li>
                <li>Sucesiones</li>
                <li>Derecho de Familia</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <div className="space-y-2 text-slate-300">
                <p>+34 600 123 456</p>
                <p>maria@abogadagonzalez.com</p>
                <p>Calle Principal 123, Madrid</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Dra. María González. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
