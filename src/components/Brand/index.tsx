import * as S from './styles'
import Image from 'next/image'
const Brand = ({ title = '@awaresolucoes' }) => (
  <>
    <S.Brand>
      <Image
        src="/img/logoawarepreto.png"
        layout="fixed"
        width={150}
        height={100}
      />
      <S.Title>{title}</S.Title>
    </S.Brand>
  </>
)

export default Brand
