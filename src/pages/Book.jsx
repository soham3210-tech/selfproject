import bhagavadGita from '../assets/bhagavad_gita.png';
import ramayana from '../assets/ramayana.png';
import vedas from '../assets/vedas.png';
import upanishads from '../assets/upanishads.png';

const books = [
    {
        id: 1,
        title: "Bhagavad Gita",
        author: "Vyasa",
        description: "The Divine Song of God, a 700-verse Hindu scripture that is part of the epic Mahabharata.",
        image: bhagavadGita,
        downloadUrl: "#" // Placeholder for actual PDF
    },
    {
        id: 2,
        title: "Ramayana",
        author: "Valmiki",
        description: "The epic tale of Shri Rama, exploring the duties of relationships and the ideal characters.",
        image: ramayana,
        downloadUrl: "#"
    },
    {
        id: 3,
        title: "The Holy Vedas",
        author: "Ancient Sages",
        description: "The oldest layer of Sanskrit literature and the oldest scriptures of Hinduism.",
        image: vedas,
        downloadUrl: "#"
    },
    {
        id: 4,
        title: "The Upanishads",
        author: "Ancient Rishis",
        description: "A collection of texts containing some of the central philosophical concepts of Hinduism.",
        image: upanishads,
        downloadUrl: "#"
    }
];

function Book() {
    return (
        <div className="bg-[#fdfbf7] min-h-screen py-15 px-4">
            <div className="max-w-6xl mx-auto" style={{
                background: "beige",
                margin: "0 auto",
                width: "90%",
            }}>
                <div className="text-center flex flex-col items-center mb-5">
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Sacred Library</h1>
                    <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                        Explore and download our collection of sacred scriptures to deepen your understanding
                        of Sanatan Dharma. Available for free in PDF format.
                    </p>
                </div>
                <div className="h-30"></div>   {/* forces 10rem of space */}

                <div className="mt-10 border-4 border-red-500 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {books.map((book) => (
                        <div key={book.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-amber-100 flex flex-col">
                            <div className="aspect-[3/4] overflow-hidden bg-amber-50">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-xl font-bold text-gray-900 mb-1">{book.title}</h2>
                                <p className="text-sm text-amber-600 font-medium mb-3">By {book.author}</p>
                                <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3">
                                    {book.description}
                                </p>
                                <a
                                    href={book.downloadUrl}
                                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                                    onClick={(e) => {
                                        if (book.downloadUrl === "#") {
                                            e.preventDefault();
                                            alert("Download link will be available soon!");
                                        }
                                    }}
                                >
                                    <span>Download PDF</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="h-40 bg-amber-50"></div>


                <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 text-center">
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">Looking for something specific?</h3>
                    <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                        If you are searching for a particular scripture or commentary that isn't listed here,
                        please contact our gurus through the contact section, and we will try to provide it for you.
                    </p>
                    <button className="bg-white text-amber-700 border-2 border-amber-600 font-bold py-2 px-8 rounded-full hover:bg-amber-600 hover:text-white transition-all">
                        Request a Book
                    </button>
                </div>

            </div>
            <div className="h-40"></div>

        </div>
    );
}

export default Book;
