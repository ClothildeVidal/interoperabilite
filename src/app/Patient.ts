export class Patient {
    id: string;
    resourceType : string;
    name : {
        use : string;
        family : string;
        given : string[];
    }[];
    telecom : {
        system : string;
        value : string;
        use : string;
        rank : number;
    }[];
    birthDate : Date;
    address : {
        use : string;
        text : string;
        city : string;
        state : string;
        postalCode : number;
    }[];
}