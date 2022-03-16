import { supabase } from './supabase.js'

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL

export const uploadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID()

  const { data, error } = await supabase.storage
    .from('videos')
    .upload(`uploads/${filename}.mp4`, videoFile)

  const file = data?.Key ? `${prefix}${data.Key}` : ''
  return [error, file]
}

export const publishVideo = async ({ videoSrc, description }) => {
  const defaultAlbum = 'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1668600269523990~c5_100x100.jpeg?x-expires=1647453600&x-signature=SyOgi7m55j%2Blj3fHVZBN0EA%2F7%2FY%3D'
  const defaultSong = 'buyout songs'

  const { data, error } = await supabase
    .from('videos')
    .insert([
      {
        user_id: 'e8c0e64c-eff5-467e-9407-2f17c8dc9c5e',
        description,
        albumImage: defaultAlbum,
        songTitle: defaultSong,
        src: videoSrc
      }
    ])

  return [error, data]
}

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select(`*, user:user_id (
      avatar,
      username,
      id
    )`)
    .order(
      'create_at',
      { ascending: false }
    )

  return [error, data]
}

// user:user_id (user es un alias para identificar lo que recibe el objeto y user_id es el campo, key o propiedad donde se hace join de la tabla donde se busca la informacion)
