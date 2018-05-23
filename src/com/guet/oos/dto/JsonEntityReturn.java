package com.guet.oos.dto;

import java.io.Serializable;

/**
 * Created by Shinelon on 2018/5/20.
 */
public class JsonEntityReturn implements Serializable {

    private static final long serialVersionUID = -4181927720052390850L;

    public boolean isHead() {
        return head;
    }

    public void setHead(boolean head) {
        this.head = head;
    }

    public Object getBody() {
        return body;
    }

    public void setBody(Object body) {
        this.body = body;
    }

    public static boolean isSUCCESS() {
        return SUCCESS;
    }

    public static boolean isFAIL() {
        return FAIL;
    }

    private boolean head;

    private Object body;

    private static final boolean SUCCESS = true;

    private static final boolean FAIL = false;

    public static JsonEntityReturn build(boolean head, Object body) {
        return new JsonEntityReturn(head, body);
    }

    public static JsonEntityReturn buildSuccess(Object body) {
        return build(SUCCESS, body);
    }

    public static JsonEntityReturn buildFail(Object body) {
        return build(FAIL, body);
    }

    public static JsonEntityReturn buildSuccessEmptyContent() {
        return build(SUCCESS, null);
    }

    public static JsonEntityReturn buildFailEmptyContent() {
        return build(FAIL, null);
    }

    public JsonEntityReturn(boolean head, Object body) {
        super();
        this.head = head;
        this.body = body;
    }

    public JsonEntityReturn() {
        super();
    }

}
