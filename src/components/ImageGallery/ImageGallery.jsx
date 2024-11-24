import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

const ImageGallery = ({images, setSelectedImage, openModal}) => {
  return (
    <ul className={css.gallery}>
        {images.map(({id, description, likes, urls: {small, regular}, user: {location, name, profile_image:{medium}}}) => {
          
          
          return (

           
              

            <li key={id}>
              <ImageCard
              small={small} 
              regular={regular}
              description={description}
              likes={likes}
              location={location}
              name={name}
              medium={medium}
              className={css.imageCard}
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