type ContactFormFields = {
  name: string;
  phone: string;
  email: string;
  content: string;
};

export async function sendEmail(formData: FormData) {
  const fields: ContactFormFields = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    content: formData.get("message") as string,
  };

  const res = await fetch("/api/send-mail", {
    method: "POST",
    body: JSON.stringify(fields),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  return { data, status: res.status };
}