import { Injectable } from '@angular/core';
import { Bookmark } from 'src/app/models/bookmark.model';
import { ELEMENT_DATA } from 'src/data/bookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  
	private storeKey = 'bookmarkList';

  	public getBookmarks():Bookmark[]{
		let bookmarkList = this.getList();
		if (!bookmarkList) {
			bookmarkList = ELEMENT_DATA;
			this.saveList(bookmarkList);
		}
		return bookmarkList;
	}

	public addBookmark(bookmark: Bookmark, id:number){
		const bookmarkInsert = Object.assign({}, bookmark, {id: id});
		let listSave = this.getList();
		listSave.push(bookmarkInsert)
		this.saveList(listSave);
  	}

	public editBookmark(bookmark: Bookmark){
		this.saveList(
			this.getList().filter((value,key)=>{
				if(value.id == bookmark.id){
					value.name = bookmark.name;
					value.url = bookmark.url;
					value.group = bookmark.group;
				}
				return true;
			})
		);
	}

	public deleteBookmark(id: number){
		this.saveList(
			this.getList().filter(item => item.id !== id)
		);
	}

	private saveList(list:Bookmark[]){
		window.localStorage.setItem( this.storeKey, JSON.stringify(list) );
	}

	private getList():Bookmark[]{
		return JSON.parse( window.localStorage.getItem(this.storeKey) );
	}
}