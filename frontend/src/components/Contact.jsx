// components/Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import backgroundImage from '../assets/business2.jpg'; // Imagen de fondo
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        message: '',
    });
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.email || !formData.message) {
            setStatusMessage('❌ Todos los campos son obligatorios.');
            return;
        }

        emailjs
            .send(
                'service_h0ixtdj',    // ✅ Tu Service ID
                'template_0381cij',   // ✅ Tu Template ID
                formData,
                'U4nc_U-t0HUyaRorg'   // ✅ Tu User ID (Public Key)
            )
            .then(
                () => {
                    setStatusMessage('✅ ¡Mensaje enviado con éxito!');
                    setFormData({ from_name: '', email: '', message: '' });
                },
                (error) => {
                    setStatusMessage('❌ Error al enviar el mensaje. Inténtalo de nuevo.');
                    console.error('Error:', error);
                }
            );
    };

    return (
        <section
            id="contact"
            role="region"
            aria-labelledby="contact-heading"
            className="min-h-screen flex items-center justify-center bg-gray-600 bg-cover bg-center bg-no-repeat py-24"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Imagen de fondo decorativa para lectores de pantalla */}
            <span className="sr-only">Fondo de contacto con temática de negocios</span>

            <motion.div
                className="bg-black bg-opacity-70 p-8 mt-36 rounded-lg shadow-lg max-w-md w-full z-30"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <h2
                    id="contact-heading"
                    className="text-2xl font-semibold text-gray-100 text-center mb-6"
                >
                    Contacto
                </h2>

                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <label htmlFor="from_name" className="block text-gray-100 mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            placeholder="Escriba su nombre"
                            className="w-full p-3 bg-gray-700 bg-opacity-70 text-gray-200 rounded-md border border-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-white outline-none"
                            required
                            aria-required="true"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-100 mb-2">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Escriba su correo electrónico"
                            className="w-full p-3 bg-gray-700 bg-opacity-70 text-gray-200 rounded-md border border-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-white outline-none"
                            required
                            aria-required="true"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-100 mb-2">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Escriba su mensaje"
                            rows="4"
                            className="w-full p-3 bg-gray-700 bg-opacity-70 text-gray-200 rounded-md border border-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-white outline-none"
                            required
                            aria-required="true"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition duration-200"
                        aria-label="Enviar mensaje de contacto"
                    >
                        ENVIAR
                    </button>
                </form>

                {statusMessage && (
                    <p
                        className="mt-4 text-center text-sm text-yellow-400"
                        role="alert"
                    >
                        {statusMessage}
                    </p>
                )}
            </motion.div>
        </section>
    );
}
