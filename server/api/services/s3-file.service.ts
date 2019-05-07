import * as AWS from 'aws-sdk';

export class S3FileService {
  private s3: AWS.S3;
  constructor() {
    this.s3 = new AWS.S3();
  }

  public getFile(s3Config: AWS.S3.GetObjectRequest): Promise<AWS.S3.GetObjectOutput> {
    return this.s3.getObject(s3Config).promise().then((res) => res).catch((e) => e);
  }

  public getFiles(s3Config: AWS.S3.ListObjectsRequest): Promise<AWS.S3.ListObjectsOutput> {
    return this.s3.listObjects(s3Config).promise().then((res) => res).catch((e) => e);
  }

  public saveFile(s3Config: AWS.S3.PutObjectRequest): Promise<AWS.S3.PutObjectOutput> {
    return this.s3.putObject(s3Config).promise().then((res) => res).catch((e) => e);
  }

  public deleteFile(s3Config: AWS.S3.DeleteObjectRequest): Promise<AWS.S3.DeleteObjectOutput> {
    return this.s3.deleteObject(s3Config).promise().then((res) => res).catch((e) => e);
  }
}
