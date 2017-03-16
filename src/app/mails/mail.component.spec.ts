
import { TestBed, async } from '@angular/core/testing';
import { MailsComponent } from './mails.component';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ResponseOptions, Response, Http, BaseRequestOptions, RequestMethod } from '@angular/http';
import {MailService} from '../mail.service';
var request = require("request");
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
                MailsComponent
            ],
            providers: [
                { provide: Http, useValue: mockHttpProvider },
                MockBackend,
                BaseRequestOptions]
        });
        TestBed.compileComponents();
    });

    it("should have a variable", () => {
        const fixture = TestBed.createComponent(MailsComponent);
        const mail_app = fixture.debugElement.componentInstance;
        expect(mail_app.somevar).toEqual('mails');
    })
    it("should have a variable to store mails", () => {
        const fixture = TestBed.createComponent(MailsComponent);
        const mail_app = fixture.debugElement.componentInstance;
        expect(mail_app.mails).toBeTruthy;
    })
    
    
})