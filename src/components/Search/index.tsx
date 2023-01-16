import * as S from './styles'
import Link from 'next/link'
const Search = () => (
  <>
    <S.Wrapper>
      <S.Container>
        <Link
          href="https://api.whatsapp.com/message/MBO27FZ2VSZVB1?autoload=1&app_absent=0"
          passHref
        >
          <S.Box>
            <S.Title>Atendimento via WhatsApp</S.Title>
          </S.Box>
        </Link>

        <Link href="https://www.instagram.com/awaresolucoes/" passHref>
          <S.Box>
            <S.Title>Siga-nos no Instagram</S.Title>
          </S.Box>
        </Link>

        <Link href="https://www.instagram.com/aware.informatica/" passHref>
          <S.Box>
            <S.Title>Siga-nos no nosso Instagram de Informática</S.Title>
          </S.Box>
        </Link>

        <Link href="https://www.facebook.com/awaresolucoes" passHref>
          <S.Box>
            <S.Title>Acompanhe-nos no Facebook</S.Title>
          </S.Box>
        </Link>

        <Link href="https://www.behance.net/awaresolucoes" passHref>
          <S.Box>
            <S.Title>Veja nossos projetos de Design no Behance</S.Title>
          </S.Box>
        </Link>
      </S.Container>
      <S.Copyright>© 2023 Copyright: awaresolucoes.com</S.Copyright>
    </S.Wrapper>
  </>
)

export default Search
