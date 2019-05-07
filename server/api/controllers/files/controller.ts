import { Request, Response } from 'express';
import FilesS3Service from '../../services/files.service';

export class Controller {
  async save(req: Request, res: Response): Promise<void> {
    try {
      const { base64, key } = req.body.file;
      const service = new FilesS3Service();
      await service.saveFileData(base64, key);
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false });
    }
  }
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const service = new FilesS3Service();
      await service.deleteFileData(id);
      res.json({ successful: true });
    } catch (error) {
      res.json({ successful: false });
    }
  }
  async all(req: Request, res: Response): Promise<void> {
    try {
      const service = new FilesS3Service();
      const records = await service.getFilesInFolder();
      res.json({ files: records.Contents });
    } catch (error) {
      res.json({ successful: [] });
    }
  }
  async byId(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const service = new FilesS3Service();
      const response = await service.getFileData(id);
      res.json({
        base64: response.Body.toString('base64'),
        contentType: response.ContentType
      });
    } catch (error) {
      res.json({ successful: false });
    }
  }
}
export default new Controller();
