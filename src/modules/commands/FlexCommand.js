import { dependencies as Inject } from "needlepoint";
import CommandModule from "../CommandModule";
import ChatApi from "../../core/api/ChatApi";

@Inject(ChatApi)
export default class FLexCommand extends CommandModule {
    /**
     * @param {ChatApi} api
     */
    constructor(api) {
        super();

        this.api = api;
    }

    getCommand() {
        return "flex";
    }

    getDescription() {
        return "Flexes";
    }

    getUsage() {
        return ""
    }

    validate(msg, argsString) {
        return true;
    }

    execute(msg, argsString) {
        return this.api.sendMessage(`💪`, msg.threadID);
    }
}
