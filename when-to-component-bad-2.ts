/**
 * very bad use of .subscribe()
 * Do NOT do this either
 */
@Component({
  template: `The current value is {{currentValue}}`,
})
export class SomeComponent implements OnDestroy {
  private readonly onDestroy = new Subject<void>();
  currentValue: string;
  constructor(someService: SomeService) {
    someService.getSomeObservable()
      .pipe(takeUntil(this.onDestroy))
      .subscribe(v => {
       this.currentValue = v;
      });
  }
  ngOnDestroy() {
    this.onDestroy.next();
  }
}
