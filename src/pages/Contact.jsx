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

                </form>
            </div>
        </section>
    );
}
