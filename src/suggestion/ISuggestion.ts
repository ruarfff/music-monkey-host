import ISuggestionItem from "./ISuggestionItem";

export default interface ISuggestion {
  suggestionId?: string
  eventId: string
  userId: string
  type: string
  item: ISuggestionItem
  accepted: boolean
}
