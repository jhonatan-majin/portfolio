import { parseISO, format } from 'date-fns';

export default function DateFormatter({ dateString }) {
 const date = parseISO(dateString);
 return <time dateTime={dateString}>{format(date, 'MMMM d, yyyy h:mm a')}</time>;
}