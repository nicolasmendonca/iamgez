class Previewer {
  private file: File;

  constructor(file: File) {
    this.file = file;
  }

  public buildPreview(): Promise<string> {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onloadend = () => resolve(fr.result as string);
      fr.onerror = () => reject(fr.error);
      fr.readAsDataURL(this.file);
    });
  }
}

export default Previewer;
