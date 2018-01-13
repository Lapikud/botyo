import { dependencies as Inject } from "needlepoint";
import CommandModule from "../CommandModule";
import ChatApi from "../../core/api/ChatApi";
import request from "request";

@Inject(ChatApi)
export default class InsultCommand extends CommandModule {
    /**
     * @param {ChatApi} api
     */
    constructor(api) {
        super();

        this.api = api;
    }

    getCommand() {
        return "insult";
    }

    getDescription() {
        return "Vihane Mari on pahane";
    }

    getUsage() {
        return "<nimi>"
    }

    validate(msg, argsString) {
        return argsString && argsString.length > 0;
    }

    execute(msg, argsString) {
        const url = "http://vihanemari.subscribe.ee/single.php";
        return request(url, (err, resp, body) => {
            var insult = body.trim()
            this.api.sendMessage(`${argsString} on ${insult}`, msg.threadID);
        })
    }
}
