import { useEffect, useState } from "react";
import { renderImage } from "../../api";
import { toast, Toaster } from "react-hot-toast";

import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";  
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "../types";


const App: React.FC = () => {
  const [images, setImages] = useState <Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);  
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  
  const onSearch = (searchWord:string) => {
    setImages([]);
    setPageNumber(1);
    setSearchValue(searchWord);
  };

  const onLoadMore = ()  => {
    setPageNumber((pageNumber) => pageNumber + 1);
    console.log(pageNumber);
  }

  const openModal = (image: Image) => {
    setIsOpenModal(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const fetchImageByValue = async ()=> {
      if (!searchValue) return;
      try {
        setLoading(true);
      const data = await renderImage(searchValue, pageNumber);
      // throw new Error('Something went wrong');
      
      setImages((prevImages) => pageNumber === 1 ? data.results : [...prevImages, ...data.results]);
      setTotalPages(data.total_pages);
      
      if (data.total_pages === 0) {
        toast.error("No images found", {
          duration: 4000,
          position: "top-center",
          style: {marginTop: 60}
        });
        return;
      }
      } catch (error) {
    setError((error as Error).message);
      } finally{
    setLoading(false);
      }
    }
    
    fetchImageByValue();
    },[searchValue, pageNumber]);

  return (
    <div>
      <Toaster />
      <SearchBar onSearch={onSearch} />
      {error !== null && <ErrorMessage error={error}/> }
     
     { (images !== null && images.length > 0) &&  
     <ImageGallery 
     images={images}
     openModal={openModal}
     setSelectedImage={setSelectedImage}/> }

     {loading && <Loader />}

     {totalPages > pageNumber  && <LoadMoreBtn onLoadMore={onLoadMore}/>  }
     
     {<ImageModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        modalData={selectedImage as Image}

      />}
     
    </div>
  );
};

export default App;
