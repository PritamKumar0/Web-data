import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <div className="container px-4 py-24 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Contact Me</h1>
          <p className="max-w-[700px] text-white/70 md:text-xl">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </div>

        <div className="max-w-2xl mx-auto w-full">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

