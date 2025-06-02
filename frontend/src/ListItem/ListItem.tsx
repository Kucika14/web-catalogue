import { FC } from 'react';
import './ListItem.scss';

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
  console.log('image:', image);
  return (
    <div className="list-item">
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Category: {category}</p>
      <p>{description}</p>
      {image && <img src={`http://localhost:5000${image}`} alt={name} />}
    </div>
  );
};

export default ListItem;