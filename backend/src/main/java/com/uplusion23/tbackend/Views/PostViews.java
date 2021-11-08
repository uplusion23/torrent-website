package com.uplusion23.tbackend.Views;

public interface PostViews {
    public static class Public {};
    public static class Admin extends Public {};
    public static class Internal extends Admin {};
}
