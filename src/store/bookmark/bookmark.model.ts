export interface Bookmark {
    id: number;
    name: string;
    url: string;
    group: string;
}
export interface Bookmarks {
    list: Bookmark[];
    id: number;
}