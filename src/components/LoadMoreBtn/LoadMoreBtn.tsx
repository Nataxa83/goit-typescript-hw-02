import css from './LoadMoreBtn.module.css'

interface LoadMoreBtnProps {
  onLoadMore: () => void
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({onLoadMore}) => {
  return (
    <button type="button" onClick={onLoadMore} className={css.btnLoadMore}>
      Load More
      </button>
  )
}

export default LoadMoreBtn