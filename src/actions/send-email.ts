"use server"
import ContactFormEmail from '@/email/contact-form-email'
import React from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmails = async (formData: FormData) => {
    const name = formData.get('name')
    const phone = formData.get('phone')
    const email = formData.get('email')
    const message = formData.get('message')

    if (!name || typeof name !== 'string') {
        return {
            error: "Nome inválido"
        }
    }
    if (!phone || typeof phone !== 'string') {
        return {
            error: "Telefone inválido"
        }
    }
    if (!email || typeof email !== 'string') {
        return {
            error: "E-mail inválido"
        }
    }
    if (!message || typeof message !== 'string') {
        return {
            error: "Mensagem inválida"
        }
    }

    try {
        resend.emails.send({
            from: 'Contato Website<onboarding@resend.dev>',
            to: 'nicolas.nicc21@gmail.com', // produzircomconexao@gmail.com
            subject: 'Temos interesse em agendar uma reunião!',
            reply_to: email as string,
            text: `Mensagem de ${name}: ${message} - Dados: telefone - ${phone}; e-mail - ${email}`
            // react: React.createElement(ContactFormEmail, {
            //     message: message,
            //     email: email,
            //     name: name,
            //     phone: phone,
            // })
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                error: error.message
            }
        } else if (error && typeof error === 'object' && 'message' in error) {
            return {
                error: error.message
            }
        } else if (typeof error === 'string') {
            return {
                error
            }
        } else {
            error: 'Algo deu errado'
        }
    }
}