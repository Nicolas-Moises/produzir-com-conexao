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
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={title}>
              📩 Novo contato recebido
            </Heading>
            <Text style={subtitle}>
              Você recebeu uma nova mensagem de <strong>{name}</strong>
            </Text>
          </Section>

          <Section style={messageBox}>
            <Text style={messageText}>
              {message}
            </Text>
          </Section>

          <Hr style={divider} />

          <Section>
            <Heading as="h3" style={sectionTitle}>📌 Dados de contato</Heading>
            <Text style={info}><strong>Nome:</strong> {name}</Text>
            <Text style={info}><strong>Email:</strong> {email}</Text>
            <Text style={info}><strong>Telefone:</strong> {phone}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f9f9f9',
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
} as const

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '24px',
  maxWidth: '600px',
  margin: '0 auto',
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
} as const

const header = {
  marginBottom: '20px',
} as const

const title = {
  fontSize: '20px',
  marginBottom: '8px',
  color: '#333333',
} as const

const subtitle = {
  fontSize: '14px',
  color: '#666666',
} as const

const messageBox = {
  backgroundColor: '#f3f4f6',
  padding: '16px',
  borderRadius: '6px',
  marginBottom: '20px',
} as const

const messageText = {
  fontSize: '15px',
  color: '#333333',
  lineHeight: '1.5',
} as const

const divider = {
  margin: '20px 0',
  borderColor: '#e5e7eb',
} as const

const sectionTitle = {
  fontSize: '16px',
  marginBottom: '12px',
  color: '#111827',
} as const

const info = {
  fontSize: '14px',
  color: '#374151',
  margin: '4px 0',
} as const
