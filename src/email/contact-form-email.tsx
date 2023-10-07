import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormProps = {
    name: string
    email: string
    phone: string
    message: string
}

export default function ContactFormEmail({
    email,
    message,
    name,
    phone
}: ContactFormProps) {
    return (
        <Html>
            <Head />
            <Preview>Novo contato vindo do website Produzir com Conexão</Preview>
            <Tailwind>
                <Body>
                    <Container>
                        <Section>
                            <Heading>
                                Você recebeu uma nova mensagem de: {name}
                            </Heading>
                            <Text>
                                {message}
                            </Text>
                            <Hr />
                            <Text>
                                Dados: telefone - {phone}; e-mail - {email}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}