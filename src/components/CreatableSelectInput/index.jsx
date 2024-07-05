import { Container } from "./styles"

export function CreatableSelectInput({ ...rest }) {
  return (
    <Container
      classNamePrefix={"Select"}
      placeholder="Selecione ou digite uma nova categoria."
      {...rest}
    ></Container>
  )
}
