import { CustomRichTextService } from "./services/custom-rich-text.service";

export class CkEditorUploadAdapter {
    loader;
    service: CustomRichTextService;
    apiUrl: string;
    editor;
  
    constructor(loader, uploadService: CustomRichTextService, apiUrl: string, editor) {
      // The file loader instance to use during the upload.
      this.loader = loader;
      this.service = uploadService;
      this.apiUrl = apiUrl;
      this.editor = editor;
    }
  
    // Starts the upload process.
    upload() {
      const editor = this.editor;
      const service = this.service;
      return this.loader.file.then(file => new Promise((resolve, reject) => {
        service.uploadFile(file).subscribe(x => {
          const imageUrl = `https://${this.apiUrl}${x.imageUrl}`;
          editor.isReadOnly = false;
  
          resolve({
            // todo: this should be correct instead of incorrect.
            default: imageUrl
          });
        }, error => {
          editor.isReadOnly = false;
  
          reject("There was an error uploading the file. Please try again.")
        });
      })
      );
    }
    // Aborts the upload process.
    abort() {
      // NP 4/23/2020 todo? I'm not sure this is actually necessary, I don't see any way for the user to cancel the upload once triggered.
    }
  }