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
}