import { Container } from "./styles"

export function ButtonText({ title, isActive = false, icon: Icon, ...rest }) {
  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}
