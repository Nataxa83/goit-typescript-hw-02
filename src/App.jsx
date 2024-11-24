import { useEffect, useState } from "react";
import { renderImage } from "./api";
import { toast } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";  
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);  
  const [totalPages, setTotalPages] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const onSearch = (searchWord) => {
    setImages([]);
    setPageNumber(1);
    setSearchValue(searchWord);
  };

  const onLoadMore = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
    console.log(pageNumber);
  }

  const openModal = () => {
    setIsOpenModal(true);
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
      
      
      setImages((prevState) => pageNumber === 1 ? data.results : [...prevState, ...data.results]);
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
    setError(error.message);
      } finally{
    setLoading(false);
      }
    }
    
    fetchImageByValue();
    },[searchValue, pageNumber]);


  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {error !== null && <ErrorMessage error={error}/> }
     
     { (images !== null && images.length > 0) &&  
     <ImageGallery images={images}
     openModal={openModal}
     setSelectedImage={setSelectedImage}/> }

     {loading && <Loader />}

     {totalPages > pageNumber  && <LoadMoreBtn onLoadMore={onLoadMore}/>  }
     
     {<ImageModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        {...selectedImage}

      />}
     
    </div>
  );
};

export default App;
