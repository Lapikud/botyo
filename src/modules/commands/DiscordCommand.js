import { dependencies as Inject } from "needlepoint";
import CommandModule from "../CommandModule";
import ChatApi from "../../core/api/ChatApi";

@Inject(ChatApi)
export default class DiscordCommand extends CommandModule {
    /**
     * @param {ChatApi} api
     */
    constructor(api) {
        super();

        this.api = api;
    }

    getCommand() {
        return "discord";
    }

    getDescription() {
        return "Returns Discord join link";
    }

    getUsage() {
        return ""
    }

    validate(msg, argsString) {
        return true;
    }

    execute(msg, argsString) {
        return this.api.sendMessage("https://discord.gg/Y58tU7q", msg.threadID);
    }
}
