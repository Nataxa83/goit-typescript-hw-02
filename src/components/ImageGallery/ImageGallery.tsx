import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"
import { Image } from "../types"

interface ImageGalleryProps {
  images: Image[]
  setSelectedImage: (image: Image) => void
  openModal: (image: Image) => void
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images, setSelectedImage, openModal}) => {
  return (
    <ul className={css.gallery}>
        {images.map((image) => {
          return (
              <li key={image.id}>
                <ImageCard
                image={image}
                setSelectedImage={setSelectedImage}
                openModal={openModal}
                />
              </li>
          )
        })}
</ul>
  )
}

export default ImageGallery