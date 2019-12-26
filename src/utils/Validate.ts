export default class Validate {
    static email(email?: string): string {
        // TODO: Test this regex properly.
        const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        let validatedEmail = this.notEmpty(email);

        if (!emailRegex.test(validatedEmail)) {
            throw new SyntaxError("The email entered is not valid.");
        }

        return validatedEmail;
    }

    static password(password?: string): string {
        // TODO: Test this regex properly
        const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\^\$\*\.\[\]\{\}\(\)\?\-\"\!\@\#\%\&\/\\\,\>\<\'\:\;\|\_\~])[A-Za-z0-9\^\$\*\.\[\]\{\}\(\)\?\-\"\!\@\#\%\&\/\\\,\>\<\'\:\;\|\_\~]{6,99}$/);

        let validatedPassword = this.notEmpty(password);

        if(!passwordRegex.test(validatedPassword)) {
            throw new SyntaxError("The password entered is not valid.");
        }

        return validatedPassword;
    }

    // Throws error on undefined
    static defined(text?: string): string {
        if (!text) {
            throw new SyntaxError("The text recieved was not defined.");
        }
        return text;
    }

    // Throws error on undefined and length < 1
    static notEmpty(text?: string): string {
        let validatedText = this.defined(text);

        if (validatedText.length < 1) {
            throw new SyntaxError("The text entered is empty.");
        }

        return validatedText;
    }
}