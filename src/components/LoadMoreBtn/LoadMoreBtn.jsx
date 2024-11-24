import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({onLoadMore}) => {
  return (
    <button type="button" onClick={onLoadMore} className={css.btnLoadMore}>Load More</button>
  )
}

export default LoadMoreBtn