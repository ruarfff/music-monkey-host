export const PRE_GAME_TAB_INDEX_CHANGED = 'PRE_GAME_TAB_INDEX_CHANGED'

export const onPreGameTabIndexChange = (index: number) => ({
  type: PRE_GAME_TAB_INDEX_CHANGED,
  paylod: index
})
