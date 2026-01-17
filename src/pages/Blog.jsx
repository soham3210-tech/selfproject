export default function Blog() {
    return (
        <section id="blog" className="bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto" style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                flexWrap: 'wrap',
                margin: '0 auto',
            }}>
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our Sacred Offerings
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        Blending Sanatan Dharma traditions with modern accessibility to
                        support rituals, learning, and spiritual growth.
                    </p>
                </div>

                {/* Blog Content */}
                <div className="space-y-12 text-gray-700 leading-relaxed">
                    {/* Puga */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            🪔 Puja (पूजा)
                        </h3>
                        <p>
                            Puga holds a sacred place in Hindu rituals and ceremonies. It
                            symbolizes auspicious beginnings, devotion, and respect. Our Puga
                            offerings are carefully prepared to meet traditional standards,
                            making them suitable for daily worship as well as special
                            occasions like pujas, vratas, and samskaras.
                        </p>
                    </div>

                    {/* Puga Samagri */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            🔱 Puga Samagri (पूजा सामग्री)
                        </h3>
                        <p>
                            Puja Samagri forms the foundation of every religious ritual. From
                            incense and flowers to sacred powders and offerings, each item has
                            spiritual significance. Our Puga Samagri collection ensures
                            authenticity, purity, and convenience—everything you need in one
                            place without compromising tradition.
                        </p>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            📚 Spiritual Education
                        </h3>
                        <p>
                            In Sanatan Dharma, knowledge is the highest form of worship. Our
                            Education offerings focus on Vedic wisdom, ritual understanding,
                            and spiritual learning. This section is dedicated to preserving
                            ancient knowledge while making it accessible to modern seekers.
                        </p>
                    </div>

                    {/* Tritha */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            🚿 Tritha (तीर्थ)
                        </h3>
                        <p>
                            Tritha represents sacred water and pilgrimage traditions that
                            purify the body, mind, and soul. Our Tritha offerings are inspired
                            by traditional pilgrimage practices, helping devotees stay
                            spiritually connected even when physical travel is not possible.
                        </p>
                    </div>

                    {/* Jyotishi */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            🔮 Jyotishi (ज्योतिषी)
                        </h3>
                        <p>
                            Jyotish Shastra is an ancient Vedic science that helps understand
                            planetary influences and life paths. Our Jyotishi services provide
                            personalized guidance based on authentic Vedic principles,
                            offering clarity, direction, and self-awareness.
                        </p>
                    </div>

                    {/* Closing */}
                    <div className="border-t pt-8">
                        <p className="text-center text-gray-600">
                            Sanatan Dharma is not just a tradition—it is a way of life. Through
                            our offerings, we aim to support your spiritual journey with
                            authenticity, devotion, and respect.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
