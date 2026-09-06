import { useState } from "react";
//import style

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
        <main>
            <h1>Kontakta oss</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Namn</label>
                <input name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="email">E-post</label>
                <input name="email" value={formData.email} onChange={handleChange} />

                <label htmlFor="message">Meddelande</label>
                <input name="message" value={formData.message} onChange={handleChange} />

                <button type="submit">Skicka</button>
            </form>
        </main>
    )
}