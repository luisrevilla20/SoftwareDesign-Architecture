export class Reservation {
    constructor(
        public classroom?: string, 
        public date?: string, 
        public starttime?: string,
        public endtime?: string,
        public description?: string,
        public properties?: string,
        ){}
}
