import { Amiri, IBM_Plex_Sans_Arabic, Rakkas } from 'next/font/google'

export const plexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["200", "500", "700"]
})

export const amiri = Amiri({
    subsets: ["arabic"],
    weight: ["400", "700"]
})

export const rakas = Rakkas({
    subsets: ["arabic"],
    weight: ["400"]
})