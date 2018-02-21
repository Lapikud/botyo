import { dependencies as Inject } from "needlepoint";
import CommandModule from "../CommandModule";
import ChatApi from "../../core/api/ChatApi";

@Inject(ChatApi)
export default class SlackCommand extends CommandModule {
    /**
     * @param {ChatApi} api
     */
    constructor(api) {
        super();

        this.api = api;
    }

    getCommand() {
        return "slack";
    }

    getDescription() {
        return "Returns slack join link";
    }

    getUsage() {
        return ""
    }

    validate(msg, argsString) {
        return true;
    }

    execute(msg, argsString) {
        return this.api.sendMessage("https://join.slack.com/t/lapikud/shared_invite/enQtMzAxNDUyNTg5NjIzLTM3MGM0NTU0M2E2NGQzYmRkOGI1ZTRjYWMwZGYyMGViNjRmOTBiMzg3MDQ3ZDgzMDUzNDZhZDRlNWI1NDhiMDg", msg.threadID);
    }
}
