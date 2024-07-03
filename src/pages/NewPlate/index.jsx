import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  Container,
  Content,
  Form,
  InputGroup,
  Ingredients,
  Label,
} from "./styles"
import { CaretCircleLeft, Check, Image } from "@phosphor-icons/react"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { IngredientItem } from "../../components/IngredientItem"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"

export function NewPlate() {
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  function handleAddIngredient() {
    if (!newIngredient) {
      return alert("Ingrediente não pode ser vazio")
    }

    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(toRemove) {
    setIngredients((prevState) =>
      prevState.filter((ingredient, index) => index !== toRemove)
    )
  }

  //Navigation
  const navigate = useNavigate()
  function handleBackButton() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText
          title="Voltar"
          icon={CaretCircleLeft}
          $isactive
          onClick={handleBackButton}
        />
        <Form>
          <h2>Adicionar Prato</h2>

          <InputGroup>
            <Label htmlFor="plateImage" className="upload-button">
              <Image />
              <span>Selecionar Imagem do Prato</span>
              <input type="file" id="plateImage" />
            </Label>
            <Label htmlFor="plateName">
              Nome do Prato
              <Input
                placeholder="Ex.: Salada Ceaser"
                id="plateName"
                type="text"
              />
            </Label>
            <Label htmlFor="plateCategory">
              Categoria
              <select name="category" id="plateCategory">
                <option>Escolha uma categoria</option>
                <option value="refeição">Refeição</option>
                <option value="sobremesa">Sobremesas</option>
              </select>
            </Label>
          </InputGroup>

          <InputGroup>
            <Label>
              Ingredientes
              <Ingredients>
                {ingredients.map((ingredient, index) => (
                  <IngredientItem
                    key={String(index)}
                    value={ingredient}
                    onClick={() => {
                      handleRemoveIngredient(index)
                    }}
                  />
                ))}
                <IngredientItem
                  value={newIngredient}
                  placeholder="Novo"
                  isNew
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </Ingredients>
            </Label>
          </InputGroup>

          <Label htmlFor="platePrice">
            Preço
            <Input placeholder="R$ 00,00" id="platePrice" type="text" />
          </Label>

          <Label htmlFor="plateDescription">
            Descrição
            <Textarea
              id="plateDescription"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </Label>
          <div className="save-button">
            <Button title="Salvar Alterações" icon={Check} />
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  )
}
