import * as S from './styles'
import Image from 'next/image'
import Brand from 'components/Brand'
import Search from 'components/Search'
const Main = ({ title = '@awaresolucoes', description = '' }) => (
  <>
    <Brand />
    <Search />
  </>
)

export default Main
