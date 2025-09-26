import Image from "next/image"

const clients = [
  { name: "TechCorp", logo: "/techcorp-logo.png" },
  { name: "InnovateLabs", logo: "/innovatelabs-logo.png" },
  { name: "GlobalSoft", logo: "/globalsoft-logo.png" },
  { name: "StartupHub", logo: "/startuphub-logo.jpg" },
  { name: "FinanceFirst", logo: "/financefirst-logo.jpg" },
  { name: "HealthTech", logo: "/healthtech-logo.jpg" },
]

export function ClientLogos() {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="satisfy-regular text-4xl text-foreground mb-4">Trusted by Leading Companies</h2>
          <p className="text-muted-foreground">
            Join hundreds of companies who trust MeeTreats for their corporate gifting needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-background rounded-lg border border-border hover:border-gold-400/50 transition-colors"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Want to see your logo here? Join our growing list of satisfied corporate clients.
          </p>
        </div>
      </div>
    </section>
  )
}
