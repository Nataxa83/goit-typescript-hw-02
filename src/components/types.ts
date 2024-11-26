export interface Image {
    id: number
    description: string
    likes: number
    urls: {
      small: string
      regular: string
    }
    user: {
      location: string
      name: string
      profile_image: {
        medium: string
      }
    }
  }

  export interface ImageData {
    total: number
    total_pages: number
    results: Image[]
  }