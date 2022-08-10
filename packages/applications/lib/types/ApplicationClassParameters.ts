import { AuthOpts } from '@vonage/auth';
import { AuthInterface } from '@vonage/auth';
import { VetchOptions } from '@vonage/vetch';

export type ApplicationClassParameters = AuthOpts &
  VetchOptions & {
    auth?: AuthInterface;
  };