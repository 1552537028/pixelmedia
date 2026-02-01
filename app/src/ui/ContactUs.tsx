import { Mail, Phone, Instagram, MessageCircle } from "lucide-react"

export default function ContactCenter() {
  const phoneNumber = "+918977706539"
  const whatsappMessage = encodeURIComponent("Hi, I seen your website now and want to contact you!")

  return (
    <div className="flex min-h-5 bottom-10 items-center text-white justify-center">
      <div className="space-y-6 text-center">
        
        {/* Email */}
        <a
          href="mailto:GOLDENPIXELMEDIA25@gmail.com"
          className="flex items-center justify-center gap-3 text-lg hover:text-blue-600"
        >
          <Mail />
          GOLDENPIXELMEDIA25@gmail.com
        </a>

        {/* Phone */}
        <a
          href="tel:+918977706539"
          className="flex items-center justify-center gap-3 text-lg hover:text-green-600"
        >
          <Phone />
          +91 89777 06539
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-lg hover:text-green-500"
        >
          <MessageCircle />
          Chat on WhatsApp
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/goldenpixelmedia_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-lg hover:text-pink-500"
        >
          <Instagram />
          @goldenpixelmedia_
        </a>

      </div>
    </div>
  )
}

