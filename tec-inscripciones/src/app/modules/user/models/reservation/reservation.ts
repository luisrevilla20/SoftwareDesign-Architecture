export class Reservation {
    constructor(
        public id?: Number,
        public classroom?: string, 
        public date?: string, 
        public start_time?: string,
        public end_time?: string,
        public description?: string,
        public properties?: string,
        ){}
}
