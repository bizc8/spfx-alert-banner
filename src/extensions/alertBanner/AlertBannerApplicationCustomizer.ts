import { override } from '@microsoft/decorators';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

export interface IAlertBannerApplicationCustomizerProperties {
  message: string;
  backgroundColor: string;
  textColor: string;
  fontSize: string;
  padding: string;
  fontFamily: string;
}

export default class AlertBannerApplicationCustomizer
  extends BaseApplicationCustomizer<IAlertBannerApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    const message = this.properties.message;

    if (message) {
      const backgroundColor = this.properties.backgroundColor || '#ffcc00';
      const textColor = this.properties.textColor || '#000';
      const fontSize = this.properties.fontSize || '12px';
      const padding = this.properties.padding || '5px';
      const fontFamily = this.properties.fontFamily || "'Segoe UI', sans-serif";

      this.injectBanner(message, backgroundColor, textColor, fontSize, padding, fontFamily);
    }

    return Promise.resolve();
  }

  private injectBanner(
    message: string,
    backgroundColor: string,
    textColor: string,
    fontSize: string = '12px',
    padding: string = '5px',
    fontFamily: string = "'Segoe UI', sans-serif"
  ): void {
    const banner: HTMLDivElement = document.createElement('div');

    banner.innerHTML = message;
    banner.style.backgroundColor = backgroundColor;
    banner.style.color = textColor;
    banner.style.padding = padding;
    banner.style.fontFamily = fontFamily;
    banner.style.textAlign = 'center';
    banner.style.fontWeight = 'normal';
    banner.style.fontSize = fontSize;
    banner.style.zIndex = '1000';

    // Optional styling
    banner.style.lineHeight = '1.5';
    banner.style.boxShadow = '0px 2px 5px rgba(0,0,0,0.2)';

    // Append to top of body
    document.body?.insertBefore(banner, document.body.firstChild);
  }
}
