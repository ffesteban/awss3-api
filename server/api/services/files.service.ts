import { S3FileService } from "./s3-file.service";
import { S3Buckets } from "../../environment/s3-env";
import { PutObjectRequest, GetObjectRequest, ListObjectsRequest, DeleteObjectRequest } from "aws-sdk/clients/s3";
import { FileUtils } from "../../common/utils/files";

export default class FilesS3Service extends S3FileService {
  public async saveFileData(base64: string, key: string) {
    const base64MineType = FileUtils.getBase64MimeType(base64);
    const base64Type = FileUtils.getBase64Type(base64MineType);    
    const s3Config: PutObjectRequest = {
      ACL: 'public-read',
      Body: FileUtils.getBufferFromBase64(base64, base64Type),
      Bucket: S3Buckets.files,
      Key: key,
      ContentEncoding: 'base64',
      ContentType: base64MineType
    };
    return this.saveFile(s3Config);
  }
  public async getFileData(key: string) {
    const s3Config: GetObjectRequest = {
      Bucket: S3Buckets.files,
      Key: key
    };
    return this.getFile(s3Config);
  }
  public async getFilesInFolder() {
    const s3Config: ListObjectsRequest = {
      Bucket: S3Buckets.files,
      Prefix: ''
    };
    return this.getFiles(s3Config);
  }
  public async deleteFileData(key: string) {
    const s3Config: DeleteObjectRequest = {
      Bucket: S3Buckets.files,
      Key: key
    };
    return this.deleteFile(s3Config);
  }
}
