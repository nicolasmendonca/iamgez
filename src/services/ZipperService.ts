import FileSaver from 'file-saver';
import JSZip from 'jszip';

class ZipperService {
  public static async zipAndDownload(files: File[]) {
    const zip = new JSZip();
    files.forEach(async (file) => await zip.file(file.name, file));
    const zippedBlob = await zip.generateAsync({ type: 'blob' });
    FileSaver.saveAs(zippedBlob, 'imagez-compressed.zip');
  }
}

export default ZipperService;
