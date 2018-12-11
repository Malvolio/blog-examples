/**
 * terrible use of /subscribe()
 * Do NOT do this
 */
@Component({
  template: `The current value is {{currentValue}}`,
})
export class SomeComponent {
  currentValue: string;
  constructor(someService: SomeService) {
    someService.getSomeObservable().subscribe(v => {
      this.currentValue = v;
    });
  }
}
