

import { HttpContextToken } from '@angular/common/http';

export const IS_TOKEN_NEEDED = new HttpContextToken<boolean>(() => false);
