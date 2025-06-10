import { FC } from 'react';
import styles from './ListItem.scss';

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
  return (
    <li className="list-item" key={id}>
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Category: {category}</p>
      <p>{description}</p>
      {image && <img src={`http://localhost:5000${image}`} alt={name} />}
    </li>
  );
};

export default ListItem;