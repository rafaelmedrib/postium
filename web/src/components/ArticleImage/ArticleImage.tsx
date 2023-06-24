import { useState } from 'react'

const ArticleImage = ({ imageURL }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <div className=" flex justify-center">
        {isLoading && (
          <div className="mb-20 h-16 w-16 animate-spin rounded-full border-4 border-dashed dark:border-violet-400"></div>
        )}
        <img
          className="h-64 w-full rounded-t object-cover"
          src={imageURL}
          alt="Article"
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
    </>
  )
}

export default ArticleImage
