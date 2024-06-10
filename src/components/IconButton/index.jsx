import { Container } from "./styles"

export function IconButton({ icon: Icon, title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  )
}
