import { Field } from 'formik';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Field> & { classes: string };

export function TextField({ classes, ...props }: Props) {
  return (
    <Field
      className={`mt-1.5 p-2.5 text-sm rounded border border-gray-400 focus:border-blue-500 focus:outline-none ${classes}`}
      {...props}
    />
  );
}
