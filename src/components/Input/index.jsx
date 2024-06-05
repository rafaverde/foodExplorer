import { Container } from "./styles"

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} color="#7C7C8A" />}
      <input {...rest} />
    </Container>
  )
}
