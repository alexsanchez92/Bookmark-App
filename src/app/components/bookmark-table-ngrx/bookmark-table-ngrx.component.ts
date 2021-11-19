import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Bookmark } from 'src/app/models/bookmark.model';
import { State } from 'src/app/store/bookmark/bookmark.reducer';
import * as BookmarkSelector from 'src/app/store/bookmark/bookmark.selector';

@Component({
  selector: 'app-bookmark-table-ngrx',
  templateUrl: './bookmark-table-ngrx.component.html'
})
export class BookmarkTableNgrxComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'url', 'group', 'actions'];
  public textColumns = [
    {
      name: 'id',
      header: 'Id',
      type: 'text'
    },
    {
      name: 'name',
      header: 'Name',
      type: 'text'
    },
    {
      name: 'url',
      header: 'Url',
      type: 'url'
    },
    {
      name: 'group',
      header: 'Group',
      type: 'text'
    }
  ];

  @Output() editEvent = new EventEmitter<Bookmark>();
  @Output() deleteEvent = new EventEmitter<Bookmark>();

  model$: any;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.model$ = this.store.pipe(
      select(BookmarkSelector.selectAllBookmarks),
      map((data) => this.groupBy('group', data))
    );
  }

  public isGroup = (index, item): boolean => item.isGroup;

  private groupBy(column: string, data: Bookmark[]) {
    if (!column) return data;

    const collapsedGroups = [];

    const customReducer = (accumulator, currentValue) => {
      const currentGroup = currentValue[column];
      if (!accumulator[currentGroup]) {
        accumulator[currentGroup] = [
          {
            groupName: `${column} ${currentValue[column]}`,
            value: currentValue[column],
            isGroup: true
          }
        ];
      }
      accumulator[currentGroup] = [...accumulator[currentGroup], currentValue];

      return accumulator;
    };

    const groups = Object.values(data).reduce(customReducer, {});
    const groupArray = Object.keys(groups).map((key) => groups[key]);
    const flatList = groupArray.reduce((a, c) => a.concat(c), []);

    return flatList.filter(
      (rawLine) =>
        rawLine.isGroup ||
        collapsedGroups.every((group) => rawLine[column] != group.value)
    );
  }
}
