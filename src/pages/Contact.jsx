import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Contact() {
    return (
        <section className="relative isolate min-h-screen bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 flex items-center justify-center">

            {/* Background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >

                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-pink-400 to-indigo-500 opacity-20 sm:w-[72rem]"
                />
            </div>

            {/* Card */}
            <div className="w-full max-w-2xl rounded-2xl bg-white/5 backdrop-blur-md p-8 sm:p-10 shadow-xl ring-1 ring-white/10 transition-all duration-300">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                        Contact sales
                    </h2>
                    <p className="mt-3 text-lg text-gray-400">
                        Let us know how we can help you.
                    </p>
                </div>

                {/* Form */}
                <form className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 text-lg">

                    {/* First name */}
                    <div>
                        <label className="block font-semibold text-white mb-2">
                            First name
                        </label>
                        <input
                            type="text"
                            className="w-full rounded-md bg-white/5 px-4 py-3 text-white ring-1 ring-white/10
                         transition-all duration-200
                         focus:ring-2 focus:ring-indigo-500/40 focus:outline-none"
                        />
                    </div>

                    {/* Last name */}
                    <div>
                        <label className="block font-semibold text-white mb-2">
                            Last name
                        </label>
                        <input
                            type="text"
                            className="w-full rounded-md bg-white/5 px-4 py-3 text-white ring-1 ring-white/10
                         transition-all duration-200
                         focus:ring-2 focus:ring-indigo-500/40 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                        <label className="block font-semibold text-white mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full rounded-md bg-white/5 px-4 py-3 text-white ring-1 ring-white/10
                         transition-all duration-200
                         focus:ring-2 focus:ring-indigo-500/40 focus:outline-none"
                        />
                    </div>

                    {/* Phone */}
                    <div className="sm:col-span-2">
                        <label className="block font-semibold text-white mb-2">
                            Phone number
                        </label>
                        <div className="flex rounded-md bg-white/5 ring-1 ring-white/10
                focus-within:ring-2 focus-within:ring-indigo-500/40 transition-all">

                            {/* Country select */}
                            <div className="relative flex  items-center">
                                <select
                                    className="appearance-none bg-transparent pl-4 pr-10 py-3 text-gray-300
                 focus:outline-none"
                                >
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>Nep</option>
                                </select>



                                {/* Divider */}
                                <span className="mx-2 h-6 w-px bg-white/10" />
                            </div>

                            {/* Phone input */}
                            <input
                                type="text"
                                placeholder="123-456-7890"
                                className="flex-1 bg-transparent px-3 py-3 text-white
               placeholder:text-gray-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                        <label className="block font-semibold text-white mb-2">
                            Message
                        </label>
                        <textarea
                            rows={4}
                            className="w-full rounded-md bg-white/5 px-4 py-3 text-white ring-1 ring-white/10
                         transition-all duration-200
                         focus:ring-2 focus:ring-indigo-500/40 focus:outline-none"
                        />
                    </div>

                    {/* Button */}
                    <div className="sm:col-span-2">
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-indigo-500 px-4 py-4 text-lg font-semibold text-white
                         shadow-md transition-all duration-200
                         hover:bg-indigo-400 hover:-translate-y-0.5 hover:shadow-lg
                         active:translate-y-0"
                        >
                            Let’s talk
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="sm:col-span-2 mt-8 flex justify-center gap-6 border-t border-white/10 pt-8">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Instagram</span>
                            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.4a4.238 4.238 0 110-8.476 4.238 4.238 0 010 8.476zm7.82-10.912a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">YouTube</span>
                            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                    </div>

                </form>
            </div>
        </section>
    );
}
