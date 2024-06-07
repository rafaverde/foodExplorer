import { Container } from "./styles"

export function IconButton({ icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
    </Container>
  )
}
