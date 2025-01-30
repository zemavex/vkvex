import { ZodIssueCode, type ZodIssue } from "zod";
import type { FormattedZodIssues } from "shared/lib";

export const formatZodIssues = <Keys extends string>(
  issues: ZodIssue[]
): FormattedZodIssues<Keys> => {
  const formattedIssues = {} as FormattedZodIssues<Keys>;

  issues.forEach((i) => {
    const path = i.path[0] as Keys;

    switch (i.code) {
      case ZodIssueCode.invalid_string:
        formattedIssues[path] = {
          code: i.code,
          validation: i.validation,
        };
        break;
      case ZodIssueCode.too_small:
        formattedIssues[path] = { code: i.code, minimum: i.minimum };
        break;
      case ZodIssueCode.too_big:
        formattedIssues[path] = { code: i.code, maximum: i.maximum };
        break;
    }
  });

  return formattedIssues;
};
