export class Formatter {

    static formatDate(value: Date): string {

        const date = new Date(value);

        return Intl.DateTimeFormat('es-Es', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
    }

}