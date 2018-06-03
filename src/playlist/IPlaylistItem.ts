import ITrack from "../tracks/ITrack";

export default interface IPlaylistItem {   
    added_at: string,
    track: ITrack
}