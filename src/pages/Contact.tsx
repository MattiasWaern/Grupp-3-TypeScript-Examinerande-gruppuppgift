import { useState } from "react";
import "../style/Contact.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value}));
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Kontaktformulär skickat:", formData);
    }

    return (
        <>
        <Navbar />
        <main className="contact-page">
            <h1>Kontakta oss</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Namn</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="email">E-post</label>
                <input id="email" name="email" value={formData.email} onChange={handleChange} />

                <label htmlFor="message">Meddelande</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} />

                <button type="submit">Skicka</button>
            </form>
        </main>
        <Footer />
        </>
    )
}