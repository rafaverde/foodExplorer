import { Plus, X } from "@phosphor-icons/react"
import { Container } from "./styles"

export function IngredientItem({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew.toString()}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button type="button" onClick={onClick}>
        {isNew ? (
          <Plus className="button-add" />
        ) : (
          <X className="button-delete" />
        )}
      </button>
    </Container>
  )
}
