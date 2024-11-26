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
        {/* {images.map(({id, description, likes, urls: {small, regular}, user: {location, name, profile_image:{medium}}}) => { */}
        {images.map((image) => {
          return (
            <ul className={css.imageCard}>
            <li key={image.id}>
              <ImageCard
              image={image}
              // small={small} 
              // regular={regular}
              // description={description}
              // likes={likes}
              // location={location}
              // name={name}
              // medium={medium}
              
              setSelectedImage={setSelectedImage}
              openModal={openModal}
              />
            </li>

            </ul>
          )
        })}
</ul>
  )
}

export default ImageGallery