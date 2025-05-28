import { Rating } from '@mantine/core';
import '@/sass/styles.scss';
export default function OutlinedRating({ className = '', ...props }) {
  return <Rating className={className} {...props} />;
}
