import css from "./ImageCard.module.css"
import { AiTwotoneLike } from "react-icons/ai";
import { Image } from "../types";

interface ImageCardProps {
  image: Image
  setSelectedImage: (image: Image) => void;
  openModal: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({image, setSelectedImage, openModal}) => {
  const handleClick = (): void => {
    setSelectedImage(image);
    openModal(image);
  }
  return (  
    <div className={css.imageCard}>
    <img src={image.urls.small} alt={image.description} className={css.image} onClick={handleClick} />
    <div className={css.info}>
    <p className={css.data}><AiTwotoneLike /> {image.likes}</p>
    </div>
    </div>
  )
}

export default ImageCard