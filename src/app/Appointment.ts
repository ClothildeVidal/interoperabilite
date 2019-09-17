export class Appointment {
    id?: string;
    resourceType: string;
    description: string;
    start: Date;
    end: Date;
    comment?: string;
    participant: {
        actor: {
            reference: string;
            display: string;
        };
        required: string;
        status: string;
    }[];
}
