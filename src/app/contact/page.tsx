export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-[#c7b8a5]/90">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-[#c7b8a5]">
            Contact
        </h1>

        {/* Intro text */}
        <p className="text-center mb-6">
            If you would like to get in touch, feel free to email me directly or use the form below.
        </p>

        {/* Email */}
        <p className="text-center mb-10 text-orange-300">
        <a
            href="mailto:paolacampos.dev@gmail.com"
            className="underline hover:text-orange-500 transition"
        >
            paolacampos.dev@gmail.com
        </a>
        </p>

        {/* Contact Form */}
        <form
            action="https://formspree.io/f/mjgoayjl"
            method="POST"
            className="space-y-4"
        >
            {/* Spam protection */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            {/* redirect after submit */}
            <input
                type="hidden"
                name="_redirect"
                value="https://paolacampos.dev/contact?success=true"
            />

            {/* Name */}
            <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full p-3 rounded bg-[#2a1f1a] border border-[#c7b8a5]/30 focus:outline-none focus:border-[#c7b8a5] focus:ring-1 focus:ring-[#c7b8a5]/50"
            />

            {/* Email */}
            <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full p-3 rounded bg-[#2a1f1a] border border-[#c7b8a5]/30 focus:outline-none focus:border-[#c7b8a5] focus:ring-1 focus:ring-[#c7b8a5]/50"
            />

            {/* Message */}
            <textarea
                name="message"
                rows={5}
                placeholder="Your message"
                required
                className="w-full p-3 rounded bg-[#2a1f1a] border border-[#c7b8a5]/30 focus:outline-none focus:border-[#c7b8a5] focus:ring-1 focus:ring-[#c7b8a5]/50"
            />

            {/* Submit */}
            <button
                type="submit"
                className="w-full mt-4 py-3 rounded bg-[#c7b8a5] text-[#2a1f1a] font-semibold hover:opacity-90 transition"
            >
                Send message
            </button>
        </form>
    </section>
    );
}




