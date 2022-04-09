import {Component} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer flex align-items-center p-4 shadow-2">
            <img id="footer-logo" [src]="'assets/layout/images/footer-' + (app.layoutMode === 'light' ? 'ultima' : 'ultima-dark') + '.svg'" alt="ultima-footer-logo">
            <a href="https://github.com/a4ambrish" target="_blank">
            <button pButton pRipple type="button" icon="pi pi-github fs-large" class="p-button-rounded p-button-text p-button-plain" [ngClass]="{'ml-auto mr-2': !app.isRTL, 'ml-2 mr-auto': app.isRTL}" ></button>
            </a>
            <a href="https://www.facebook.com/ambrishpooja" target="_blank">
            <button pButton pRipple type="button" icon="pi pi-facebook fs-large" class="p-button-rounded p-button-text p-button-plain" [ngClass]="{'mr-2': !app.isRTL, 'ml-2': app.isRTL}"></button>
            </a>
            <a href="https://twitter.com/ambrishkjha" target="_blank">
            <button pButton pRipple type="button" icon="pi pi-twitter fs-large" class="p-button-rounded p-button-text p-button-plain" [ngClass]="{'mr-2': !app.isRTL, 'ml-2': app.isRTL}"></button>
            </a>
        </div>
    `
})
export class AppFooterComponent {
    constructor(public app: AppComponent) {}
}
