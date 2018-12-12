@Component({
  template: `The current value is {{currentValue | async }}`,
})
export class SomeComponent  {
  constructor(private someService: SomeService) {}
  
  currentValue = this.someService.getSomeObservable();
}
