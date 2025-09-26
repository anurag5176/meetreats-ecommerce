import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Us - MeeTreats | Get in Touch",
  description:
    "Contact MeeTreats for questions about our premium snacks, corporate gifting, or partnership opportunities.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-soft-cream py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="satisfy-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-3 sm:mb-4 text-balance px-2">Get in Touch</h1>
          <p className="text-base sm:text-lg lg:text-xl text-warm-taupe max-w-2xl mx-auto text-pretty px-4">
            Have questions about our products or need help with your order? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="font-fraunces text-charcoal text-lg sm:text-xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-1 sm:mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" className="text-sm sm:text-base" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-1 sm:mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" className="text-sm sm:text-base" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1 sm:mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" className="text-sm sm:text-base" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1 sm:mb-2">
                    Phone (Optional)
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" className="text-sm sm:text-base" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-1 sm:mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" className="text-sm sm:text-base" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1 sm:mb-2">
                    Message
                  </label>
                  <Textarea id="message" rows={4} placeholder="Tell us how we can help..." className="text-sm sm:text-base" />
                </div>
                <Button type="submit" className="w-full btn-plum text-sm sm:text-base py-2 sm:py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="font-fraunces text-charcoal text-lg sm:text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-royal-gold rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-charcoal text-sm sm:text-base">Email</h3>
                    <p className="text-warm-taupe text-xs sm:text-sm">hello@meetreats.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-royal-gold rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-charcoal text-sm sm:text-base">Phone</h3>
                    <p className="text-warm-taupe text-xs sm:text-sm">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-royal-gold rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-charcoal text-sm sm:text-base">WhatsApp Business</h3>
                    <p className="text-warm-taupe text-xs sm:text-sm">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-royal-gold rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-charcoal text-sm sm:text-base">Address</h3>
                    <p className="text-warm-taupe text-xs sm:text-sm">
                      123 Food Street
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="font-fraunces text-charcoal text-lg sm:text-xl">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-warm-taupe">Monday - Friday</span>
                    <span className="text-charcoal">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-warm-taupe">Saturday</span>
                    <span className="text-charcoal">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-warm-taupe">Sunday</span>
                    <span className="text-charcoal">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="font-fraunces text-charcoal text-lg sm:text-xl">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 sm:space-y-3">
                  <Button variant="outline" className="w-full justify-start text-xs sm:text-sm py-2">
                    Corporate Gifting Inquiry
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-xs sm:text-sm py-2">
                    Track Your Order
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-xs sm:text-sm py-2">
                    Lab Reports & Quality
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-xs sm:text-sm py-2">
                    Bulk Order Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
