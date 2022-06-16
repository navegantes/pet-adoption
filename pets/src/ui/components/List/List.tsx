import { Button } from '@mui/material'
import {
  ListStyled,
  ItemList,
  PetImage,
  Infos,
  Description,
  Name
} from './List.style'
import { Pet } from '../../../data/@types/Pet';
import { TextService } from '../../../data/services/TextService'

interface ListProps{
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps) {
  const maxLen = 200;
  return (
    <ListStyled>
      {props.pets.map(pet => (
        <ItemList key={pet.id}>
          <PetImage src={pet.image} alt={pet.name} />
          <Infos>
            <Name>{pet.name}</Name>
            <Description>
              {TextService.textLimiter(pet.history, maxLen)}
            </Description>
            <Button
              variant={'contained'}
              fullWidth
              onClick={() => props.onSelect(pet)}
            >Adotar {pet.name}</Button>
          </Infos>
        </ItemList>
      ))}
    </ListStyled>
  )
};
