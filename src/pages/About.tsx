import "../style/About.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function AboutPage() {
    return (
        <main className="about-page">
            <h1>Om oss</h1>
            <p>
            Vi startade den här hyrbilstjänsten för att göra det enkelt och
            smidigt att hitta rätt bil för just din resa, oavsett om det gäller
            en helgutflykt eller en längre affärsresa.
            </p>
            <section className="about-values">
                <div className="value-card">
                    <h2>Enkelt</h2>
                    <p>Boka på några minuter, ingen inloggning krävs.</p>
                </div>
                <div className="value-card">
                    <h2>Pålitligt</h2>
                    <p>Alla våra bilar servas regelbundet och håller hög standard.</p>
                </div>
                <div className="value-card">
                    <h2>Flexibelt</h2>
                    <p>Boka när du behöver och hämta upp den hos oss när du är redo.</p>
                </div>
            </section>
        </main>
    )
}