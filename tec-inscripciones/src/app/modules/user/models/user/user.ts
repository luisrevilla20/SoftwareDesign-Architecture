export class User {
  user_name?: string;
    constructor(public username?: string,
                public password?: string,
                public email?: string,
				public balance?: Number,
				public session?: string
                ){

    }
}
