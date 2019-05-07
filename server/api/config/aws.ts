import { IAwsConfig } from "../../common/types/aws";

export const getAWSConfig = (): IAwsConfig => {
  return {
    clientId: process.env.CLIENTID
  }
}