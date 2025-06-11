import { FC } from 'react';
import styles from './ListItem.scss';
import noImage from './assets/no_image_avaliable.jpg';
import { useNavigate } from 'react-router-dom';

interface ListItemProps {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const ListItem: FC<ListItemProps> = ({
  id,
  name,
  price,
  category,
  description,
  image
}) => {

  const navigate = useNavigate();

  const imgUrl = image ? `http://localhost:5000${image}` : noImage;

  const handleOnClick = () => {
    console.log(`Clicked on product ${id}`);
    navigate(`/products/${id}`);
  }

  return (
    <li className={styles.listItem} key={id} onClick={handleOnClick}>
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Category: {category}</p>
      <p>{description}</p>
      <img src={imgUrl} alt={name} />
    </li>
  );
};

export default ListItem;