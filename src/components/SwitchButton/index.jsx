import { Container } from "./styles"
import { IconButton } from "../IconButton"
import { Moon, Sun } from "@phosphor-icons/react"

import { useUI } from "../../hooks/ui"

export function SwitchButton({ onSwitchButton }) {
  const { isDarkTheme } = useUI()

  return (
    <Container $ison={isDarkTheme.toString()}>
      {isDarkTheme ? (
        <IconButton icon={Sun} onClick={onSwitchButton} />
      ) : (
        <IconButton icon={Moon} onClick={onSwitchButton} />
      )}
      <span></span>
    </Container>
  )
}
