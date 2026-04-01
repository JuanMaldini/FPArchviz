import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const onChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // el submit real se conecta después
    console.log("Contact form submit", form);
  };

  return (
    <section className="bg-[var(--bg)] py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold scroll-mt-16 text-[var(--text-dark)]">
            Contacto
          </h1>
          <p className="mt-3 text-[var(--text-muted)]">
            Completa el formulario para recibir una propuesta arquitectónica
            inicial.
          </p>
        </header>

        <form
          onSubmit={onSubmit}
          className="space-y-4 bg-white p-6 rounded-xl shadow-lg border border-[var(--border)]"
        >
          <div>
            <label
              className="block text-sm font-medium text-slate-700 mb-1"
              htmlFor="name"
            >
              Nombre *
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={onChange("name")}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-slate-700 mb-1"
              htmlFor="email"
            >
              Correo *
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={onChange("email")}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium text-slate-700 mb-1"
                htmlFor="phone"
              >
                Teléfono (opcional)
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={onChange("phone")}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-slate-700 mb-1"
                htmlFor="company"
              >
                Empresa / Website (opcional)
              </label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={onChange("company")}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-slate-700 mb-1"
              htmlFor="message"
            >
              Mensaje *
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={onChange("message")}
              required
              rows={6}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-pre-wrap"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
