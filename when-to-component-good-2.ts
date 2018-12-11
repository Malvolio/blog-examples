@Component({
  template: `<button (click)="button.next()">Press Me</button>`,
})
export class SomeComponent implements OnDestroy {
  private readonly onDestroy = new Subject<void>();
  readonly buttonPress = new Subject<void>();
  
  constructor(someService: SomeService,
              snackBar: MatSnackBar) {
    this.buttonPress.pipe(
      concatMap(() => someService.logButtonPress())
      takeUntil(this.onDestroy))
      .subscribe(v => {
        this.snackBar.open("Button Press Logged");
      });
  }
  ngOnDestroy() {
    this.onDestroy.next();
  }
}
