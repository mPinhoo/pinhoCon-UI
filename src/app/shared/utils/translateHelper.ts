import { TranslateService } from "@ngx-translate/core"

export const translateAsync = (translate: TranslateService, path:string, obj?: any) => {
  return translate.get(path, obj).toPromise();
}
