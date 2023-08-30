import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';


@Component({
    selector: 'theme-switch',
    templateUrl: './theme-switch.component.html',
    styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {
    private static readonly DARK_THEME_CLASS = 'dark-theme';
    private static readonly DARK_THEME_LIGHT = 'light';
    private static readonly DARK_THEME_DARK = 'dark';

    public theme?: string;

    constructor(@Inject(DOCUMENT) private document: Document) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches || this.document.documentElement.classList
            .contains(ThemeSwitchComponent.DARK_THEME_CLASS)) {
            this.selectDarkTheme();
        } else {
            this.selectLightTheme();
        }
    }

    public selectDarkTheme(): void {
        this.document.documentElement.classList.add(ThemeSwitchComponent.DARK_THEME_CLASS);
        this.theme = ThemeSwitchComponent.DARK_THEME_DARK;
    }

    public selectLightTheme(): void {
        this.document.documentElement.classList.remove(ThemeSwitchComponent.DARK_THEME_CLASS);
        this.theme = ThemeSwitchComponent.DARK_THEME_LIGHT;
    }
}