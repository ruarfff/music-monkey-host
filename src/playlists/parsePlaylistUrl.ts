interface IPlaylistQuery {
  playlistId: string
  userName: string
}
export default function parsePlayistUrl(
  playlistUrl: string
): IPlaylistQuery | undefined {
  try {
    const splitUrl = playlistUrl.split('/')
    const playlistId = splitUrl[splitUrl.length - 1]
    const userName = splitUrl[splitUrl.length - 3]

    if (!playlistId || !userName) {
      throw new Error()
    }

    return {
      playlistId,
      userName
    }
  } catch (err) {
    return undefined
  }
}
