

export class EnvImage {
    imageDomain = '';
    // location = '';

    constructor() { }

    getImageDomain() {
        const location = window.location.href;
        if (location.indexOf('localhost') > -1) {
            // this is localhost
            this.imageDomain = './assets/images/';
        } else if (location.indexOf('azure') > -1) {
            // this is azure
            this.imageDomain = 'uicomponent/assets/images/';
        }
        return this.imageDomain;
    }
}
