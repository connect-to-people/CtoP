import { styled } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import CartIcon from '@mui/icons-material/ShoppingCart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CoinIcon from '@mui/icons-material/MonetizationOn';

const icons = {
  file: FileIcon,
  cart: CartIcon,
  ligth: LightbulbIcon,
  coin: CoinIcon,

}

export default function ServicePonint({icon, title, content}) {
  const [theme] = useLocalStorage("theme");
  const IconComponent = icons[icon];

  return (
    <Container>
      <IconComponent/>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 40rem;
  height: 10rem;
  color: ${props => props.theme.secondary};
  p{
    text-align: justify;
  }
`;
