import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { NumericFormat } from "react-number-format"

import {
  Container,
  Content,
  Form,
  InputGroup,
  Ingredients,
  Label,
  Thumbnail,
} from "./styles"
import { CaretCircleLeft, Check, Image, Trash } from "@phosphor-icons/react"
import plateImagePlaceholder from "../../assets/plate-image_placeholder.svg"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { IngredientItem } from "../../components/IngredientItem"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { CreatableSelectInput } from "../../components/CreatableSelectInput"

import { api } from "../../services/api"

export function EditPlate() {
  const params = useParams()

  //Navigation
  const navigate = useNavigate()
  function handleBackButton() {
    navigate(-1)
  }

  //Plate
  const [plate, setPlate] = useState(null)

  const [name, setName] = useState("")
  const [category, setCategory] = useState([])
  const [categoryOptions, setCategoryOptions] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [deletedIngredients, setDeletedIngredients] = useState([])
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")

  const [plateImage, setPlateImage] = useState("")
  const [plateImageFile, setPlateImageFile] = useState(null)
  const plateImageBaseURL = `${api.defaults.baseURL}/files/plates/`

  const [isLoading, setIsLoading] = useState(false)

  function handleAddIngredient() {
    if (!newIngredient) {
      return alert("Ingrediente não pode ser vazio")
    }

    setIngredients((prevState) => [...prevState, newIngredient])

    setDeletedIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== newIngredient)
    )

    setNewIngredient("")
  }

  function handleRemoveIngredient(toRemove) {
    setIngredients((prevState) =>
      prevState.filter((ingredient, index) => ingredient !== toRemove)
    )

    setDeletedIngredients((prevState) => [...prevState, toRemove])
  }

  function handlePlateImageChange(event) {
    const file = event.target.files[0]
    setPlateImageFile(file)

    const imagePreview = URL.createObjectURL(file)
    setPlateImage(imagePreview)
  }

  async function handleUpdatePlate() {
    if (
      !name ||
      !description ||
      !ingredients ||
      !price ||
      !category ||
      typeof category === "object"
    ) {
      return alert(
        "Todos os campos são obrigatórios. Confira e preencha novamente."
      )
    }

    if (newIngredient) {
      return alert(
        "Um dos ingredientes não foi adicionado, clique em + ou deixe sem informações."
      )
    }

    setIsLoading(true)

    const plate = {
      name,
      description,
      ingredients,
      deletedIngredients,
      price,
      category,
    }

    try {
      if (plateImageFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("image", plateImageFile)

        const response = await api.patch(
          `/plates/image/${params.id}`,
          fileUploadForm
        )
        const plateImageURL = `${plateImageBaseURL}${response.data.image}`
        setPlateImage(plateImageURL)
        await api.put(`/plates/${params.id}`, plate)
      } else {
        await api.put(`/plates/${params.id}`, plate)
      }

      alert("Prato atualizado com sucesso!")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar o prato. Tente novamente mais tarde.")
      }
    }

    setIsLoading(false)
  }

  async function handleDeletePlate() {
    setIsLoading(true)

    try {
      const confirm = window.confirm("Tem certeza que deseja excluir o prato?")
      if (confirm) {
        await api.delete(`/plates/${params.id}`)
        alert("Prato excluído com sucesso!")
        navigate("/")
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível deletar o prato. Tente novamente mais tarde.")
      }
    }

    setIsLoading(false)
  }

  function handleCreateCategoryOption(newOption) {
    const newCategory = { value: newOption, label: newOption }
    setCategoryOptions((prevOptions) => [...prevOptions, newCategory])
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`plates/${params.id}`)
      setPlate(response.data)
      setPlateImage(`${plateImageBaseURL}${response.data.image}`)
      setName(response.data.name)
      setCategory(response.data.category_name)
      setIngredients(
        response.data.ingredients.map((ingredient) => ingredient.name)
      )
      setPrice(response.data.price)
      setDescription(response.data.description)
    }

    fetchPlate()

    async function fetchCategories() {
      const categories = (await api.get("/categories")).data

      const categoryOptions = categories.map((category) => ({
        value: category.name,
        label: category.name,
      }))

      setCategoryOptions(categoryOptions)
    }
    fetchCategories()
  }, [])

  return (
    <Container>
      <Header />
      {plate && (
        <Content>
          <ButtonText
            title="Voltar"
            icon={CaretCircleLeft}
            $isactive
            onClick={handleBackButton}
          />
          <Form>
            <h2>Editar Prato</h2>
            <Thumbnail>
              <label htmlFor="plateImage">
                <img
                  src={plateImage ? plateImage : plateImagePlaceholder}
                  alt=""
                />
              </label>
            </Thumbnail>
            <InputGroup>
              <Label htmlFor="plateImage" className="upload-button">
                <Image />
                <span>Selecionar Imagem do Prato</span>
                <input
                  type="file"
                  id="plateImage"
                  onChange={handlePlateImageChange}
                />
              </Label>
              <Label htmlFor="plateName">
                Nome do Prato
                <Input
                  value={name}
                  placeholder="Ex.: Salada Ceaser"
                  id="plateName"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </Label>
              <Label htmlFor="plateCategory">
                Categoria
                <CreatableSelectInput
                  options={categoryOptions}
                  value={category.value}
                  defaultValue={category}
                  onChange={(event) => setCategory(event.value)}
                  onCreateOption={(newValue) =>
                    handleCreateCategoryOption(newValue)
                  }
                  placeholder={category}
                />
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
                        handleRemoveIngredient(ingredient)
                      }}
                    />
                  ))}
                  <IngredientItem
                    value={newIngredient}
                    placeholder="Novo"
                    isNew
                    onChange={(e) =>
                      setNewIngredient(e.target.value.toLowerCase())
                    }
                    onClick={handleAddIngredient}
                  />
                </Ingredients>
              </Label>
            </InputGroup>
            <Label htmlFor="platePrice">
              Preço
              <NumericFormat
                customInput={Input}
                prefix="R$ "
                thousandSeparator="."
                decimalScale={2}
                decimalSeparator=","
                fixedDecimalScale={true}
                allowNegative={false}
                placeholder="R$ 0,00"
                value={price}
                onChange={(e) => setPrice(e.target.value.replace("R$ ", ""))}
              />
            </Label>

            <Label htmlFor="plateDescription">
              Descrição
              <Textarea
                id="plateDescription"
                defaultValue={description}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Label>
            <div className="buttons">
              <div className="save-button">
                <Button
                  title="Salvar Alterações"
                  icon={Check}
                  onClick={handleUpdatePlate}
                  loading={isLoading}
                />
              </div>
              <div className="save-button">
                <Button
                  title="Excluir Prato"
                  icon={Trash}
                  onClick={handleDeletePlate}
                  loading={isLoading}
                />
              </div>
            </div>
          </Form>
        </Content>
      )}
      <Footer />
    </Container>
  )
}
