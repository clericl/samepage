export type ModalType = 'signup' | 'login' | null

export interface AuthSlice {
  signedIn: boolean
  signIn: () => void
  signOut: () => void
}

export interface UiSlice {
  menuOpen: boolean
  modal: ModalType
  closeMenu: () => void
  closeModal: () => void
  openMenu: () => void
  setModal: (newModal: ModalType) => void
}

export type Price = {
  amount: number
  currency: string
}

export interface GoogleBooksVolume {
  kind: string
  id: string
  etag: string
  selfLink: URL
  volumeInfo: {
    title: string
    subtitle: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: {
      type: 'ISBN_10' | 'ISBN_13'
      identifier: string
    }[]
    readingModes: {
      text: boolean
      image: boolean
    }
    pageCount: number
    printedPageCount: number
    dimensions: {
      height?: string
      width?: string
    }
    printType: string
    categories: string[]
    averageRating: number
    ratingsCount: number
    maturityRating: 'MATURE' | 'NOT_MATURE'
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: {
      containsEpubBubbles: boolean
      containsImageBubbles: boolean
    }
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
      small: string
      medium: string
      large: string
    }
    language: string
    previewLink: URL
    infoLink: URL
    canonicalVolumeLink: URL
  }
  layerInfo: {
    layers: {
      layerId: string
      volumeAnnotationsVersion: string
    }[]
  }
  saleInfo: {
    country: string
    saleability: 'FOR_SALE' | 'NOT_FOR_SALE'
    isEbook: boolean
    listPrice: Price
    retailPrice: Price
    buyLink: URL
    offers: {
      finskyOfferType: number
      listPrice: {
        amountInMicros: number
        currencyCode: string
      }
      retailPrice: {
        amountInMicros: number
        currencyCode: string
      }
      giftable: boolean
    }
  }
  accessInfo: {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: 'ALLOWED' | 'DENIED'
  }
  epub: {
    isAvailable: boolean
    acsTokenLink: URL
  }
  pdf: {
    isAvailable: boolean
  }
  webReaderLink: URL
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export type PrunedVolume = Pick<
  GoogleBooksVolume,
  "id" | "selfLink"
> & {
  volumeInfo: Pick<
    GoogleBooksVolume["volumeInfo"],
    "title" |
    "subtitle" |
    "authors" |
    "publishedDate" |
    "description" |
    "pageCount" |
    "categories" |
    "averageRating" |
    "ratingsCount" |
    "imageLinks"
  >
}

