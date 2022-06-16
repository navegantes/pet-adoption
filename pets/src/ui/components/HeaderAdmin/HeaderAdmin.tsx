import { Link, Box } from '@mui/material'
import NextLink from 'next/link'

import {
  HeaderContainer,
  Logo,
  LinksContainer
} from './HeaderAdmin.style'

export default function HeaderAdmin(){
  return (
  <HeaderContainer>
    <div>
      <Link component={NextLink} href={'/'}>
        <a>
          <Logo src={'/imagens/logo.svg'} alt={'Adote um Pet'} />
        </a>
      </Link>
      <LinksContainer>
        <Link component={NextLink} href={'/pets/cadastro'}>
          <a>Cadastrar Pet</a>
        </Link>
        <Link component={NextLink} href={'/pets/relatorio'}>
          <a>
            Relatorio{' '}
            <Box
              component={'span'}
              sx={{display: {sm: 'initial', xs: 'none'}}}
            >
              de Adoção
            </Box>
          </a>
        </Link>
      </LinksContainer>
    </div>
  </HeaderContainer>
  )
}