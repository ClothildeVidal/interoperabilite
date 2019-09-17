export class Medecin {
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
    address : {
        use : string;
        type : string;
        text : string;
        city : string;
        state : string;
        postalCode : number;
    }[];
    gender : string;
    birthDate : Date;
}