package com.guet.oos.dto;

import java.io.Serializable;

/**
 * JSonReturn实体
 *
 * @author Shinelon
 */
public class JsonReturn implements Serializable {

    private static final long serialVersionUID = -7843378668234516424L;

    private boolean head;

    private String body;

    private static final boolean SUCCESS = true;

    private static final boolean FAIL = false;

    public static JsonReturn build(boolean head, String body) {
        return new JsonReturn(head, body);
    }

    public static JsonReturn buildSuccess(String body) {
        return build(SUCCESS, body);
    }

    public static JsonReturn buildFail(String body) {
        return build(FAIL, body);
    }

    public static JsonReturn buildSuccessEmptyContent() {
        return build(SUCCESS, "");
    }

    public static JsonReturn buildFailEmptyContent() {
        return build(FAIL, "");
    }

    public JsonReturn(boolean head, String body) {
        super();
        this.head = head;
        this.body = body;
    }

    public JsonReturn() {
        super();
    }

    @Override
    public String toString() {
        return "{" + "\"" + "head" + "\"" + ":" + "\"" + head + "\",\"" + "body" + "\"" + ":" + "\"" + body
                + "\"" + "}";
    }

}
