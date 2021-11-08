package com.uplusion23.tbackend.Utilities;

import java.util.Map;

public class Response {
    public static Map<Object, Object> get(String type, Object data) {
        return Map.of("response", type, "data", data);
    }
}
