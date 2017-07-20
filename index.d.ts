    import { ImageSource } from 'image-source';

    /**
     * Share an image.
     * @param {ImageSource} - The image to share.
     * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
     */
    export function shareImage(image?: ImageSource, subject?: string);


    /**
    * Share text.
    * @param {ImageSource} - The image to share.
    * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
    */
    export function shareText(text: string, subject?: string);


     /**
    * Share text.
    * @param {FilePath} - The file to share.
    * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
    */
    export function shareFile(filePath: string, subject?: string);
