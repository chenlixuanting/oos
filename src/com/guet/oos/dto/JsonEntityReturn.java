package com.guet.oos.dto;

import java.io.Serializable;

/**
 * Created by Shinelon on 2018/5/20.
 */
public class JsonEntityReturn<T> implements Serializable {

    private static final long serialVersionUID = -4181927720052390850L;

    private boolean head;

    private T body;

    private static final boolean SUCCESS = true;

    private static final boolean FAIL = false;

    public JsonEntityReturn build(boolean head, T body) {
        return new JsonEntityReturn(head, body);
    }

    public JsonEntityReturn buildSuccess(T body) {
        return build(SUCCESS, body);
    }

    public JsonEntityReturn buildFail(T body) {
        return build(FAIL, body);
    }

    public JsonEntityReturn buildSuccessEmptyContent() {
        return build(SUCCESS, null);
    }

    public JsonEntityReturn buildFailEmptyContent() {
        return build(FAIL, null);
    }

    public JsonEntityReturn(boolean head, T body) {
        super();
        this.head = head;
        this.body = body;
    }

    public JsonEntityReturn() {
        super();
    }

    @Override
    public String toString() {
        return "{" + "\"" + "head" + "\"" + ":" + "\"" + head + "\",\"" + "body" + "\"" + ":" + "\"" + body
                + "\"" + "}";
    }


}
