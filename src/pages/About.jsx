import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.jpeg";

/**
 * About Section - Our Gurus
 * Focusing strictly on the learned scholars of Sanatan Path.
 */

const GURUS = [
    {
        name: "Shree Namonaryan Surya Chandra Rimal",
        role: "Sanatani Pandit",
        specialization: "Vedic Rituals, Puja & Karmakanda",
        image: poster1,
        description: "Pandit Ji is a dedicated Sanatani Pandit who has been serving Dharma through Vedic rituals and spiritual guidance. He performs all kinds of Pujas and Karmakanda Vidhi, conducts Chhina rituals as per Shastra, and carefully analyzes Kundalis to guide devotees in important life matters. His work is rooted in faith, purity, and the timeless wisdom of Sanatan Dharma."
    },
    {
        name: "Shree Sundar Maharaj Kamal Nayan Poudel",
        role: "Sanatani Pandit",
        specialization: "Shastra & Vedic Guidance",
        image: poster2,
        description: "Pandit Ji is a dedicated Sanatani Pandit who has been serving Dharma through Vedic rituals and spiritual guidance. He performs all kinds of Pujas and Karmakanda Vidhi, conducts Chhina rituals as per Shastra, and carefully analyzes Kundalis to guide devotees in important life matters. His work is rooted in faith, purity, and the timeless wisdom of Sanatan Dharma."
    },
    {
        name: "Shree Ankhada Bholabhakta Sagarmani",
        role: "Sanatani Pandit",
        specialization: "Kundali Analysis & Puja Vidhi",
        image: poster3,
        description: "Pandit Ji is a dedicated Sanatani Pandit who has been serving Dharma through Vedic rituals and spiritual guidance. He performs all kinds of Pujas and Karmakanda Vidhi, conducts Chhina rituals as per Shastra, and carefully analyzes Kundalis to guide devotees in important life matters. His work is rooted in faith, purity, and the timeless wisdom of Sanatan Dharma."
    },
    {
        name: "Soham Thapaliya",
        role: "Creator & Visionary",
        specialization: "Vedic Traditions Support",
        image: poster4,
        description: "Dedicated to serving Dharma through Vedic rituals and spiritual guidance. Supporting the performance of all kinds of Pujas and Karmakanda Vidhi, ensuring sacred traditions are preserved and accessible to devotees with faith, purity, and timeless wisdom."
    }
];

function About() {
    return (
        <div className="bg-[#fffcf8] min-h-screen py-24 px-6">
            <div className="max-w-7xl mx-auto" style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                flexWrap: 'wrap',
                margin: '0 auto',
                gap: '8rem',
            }}>
                {/* Simplified Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-black text-amber-900 mb-4 tracking-tighter uppercase">
                        Our Learned Gurus
                    </h1>
                    <div className="h-1.5 w-32 bg-amber-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-amber-700 font-serif italic max-w-2xl mx-auto">
                        Dedicated scholars serving Sanatan Dharma through ancient Vedic wisdom.
                    </p>
                </div>

                {/* Guru Profiles Only */}
                <div className="grid md:grid-cols-2 gap-12">
                    {GURUS.map((guru, index) => (
                        <div key={index} className="bg-white p-10 rounded-[2.5rem] border border-amber-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                            <div className="flex flex-col sm:flex-row gap-8 items-start">
                                {/* Guru Image */}
                                <div className="shrink-0 w-24 h-24 bg-linear-to-br from-amber-600 to-orange-700 rounded-3xl overflow-hidden shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                                    {guru.image ? (
                                        <img
                                            src={guru.image}
                                            alt={guru.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-white text-3xl font-black">
                                            {guru.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-amber-950 leading-tight">
                                            {guru.name}
                                        </h2>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-black uppercase tracking-widest rounded-full border border-amber-100">
                                                {guru.role}
                                            </span>
                                            <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-black uppercase tracking-widest rounded-full border border-orange-100">
                                                {guru.specialization}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                        {guru.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final Simple Message */}
                <div className="mt-24 text-center border-t border-amber-100 pt-16">
                    <p className="text-2xl font-serif text-amber-900 leading-relaxed italic max-w-4xl mx-auto">
                        "Rooted in faith and purity, our Pandits bridge the timeless wisdom of the Vedas
                        to your spiritual journey."
                    </p>
                </div>
            </div>

            <div className="h-20"></div>
        </div>
    );
}

export default About;
