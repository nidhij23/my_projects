import { AppComponent } from './app.component';
import { TestBed, async } from '@angular/core/testing';
import { MailsComponent } from './mails/mails.component';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ResponseOptions, Response, Http, BaseRequestOptions, RequestMethod } from '@angular/http';

const mockHttpProvider = {
  deps: [MockBackend, BaseRequestOptions],
  useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
    return new Http(backend, defaultOptions);
  }
};
describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MailsComponent
      ],
      providers: [
        { provide: Http, useValue: mockHttpProvider },
        MockBackend,
        BaseRequestOptions]
    });
    TestBed.compileComponents();
    // this.app=new AppComponent();
  });
  it("should have a variable", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  })

  it("should display all contents",()=>{

  })


  /*it("should have a app-mail element ",()=>{
    var spanElement = directiveElem.find('app-mails');
    expect(spanElement).toBeDefined();
 //expect(spanElement.text()).toEqual('This span is appended from directive.');
})*/


})